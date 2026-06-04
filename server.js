import { createRequestHandler } from "@remix-run/express";
import express from "express";
import {createIPX, createIPXNodeServer, ipxFSStorage, ipxHttpStorage } from "ipx";
import 'dotenv/config'
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

// Limit native sharp concurrency to 1 to prevent memory spikes and high CPU usage under load
sharp.concurrency(1);

const CACHE_DIR = path.resolve("./.cache/ipx");

const ipx = createIPX({
  storage: ipxFSStorage({ dir: "./public"}),
  httpStorage: ipxHttpStorage({ domains: [process.env.STRAPI_URL] }),
  alias: {
    strapi: process.env.STRAPI_URL,
  },
});

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

const app = express();
app.use(
  viteDevServer
    ? viteDevServer.middlewares
    : express.static("build/client")
);
app.use(
  "/_ipx",
  (req, res, next) => {
    // Generate a secure hash of the request URL to avoid directory traversal and uniquely reference cached files
    const hash = crypto.createHash("sha256").update(req.originalUrl).digest("hex");
    const rawPath = path.join(CACHE_DIR, `${hash}.raw`);
    const metaPath = path.join(CACHE_DIR, `${hash}.meta`);

    // Serve from local disk if already optimized (extremely fast, zero CPU overhead)
    if (fs.existsSync(rawPath) && fs.existsSync(metaPath)) {
      try {
        const contentType = fs.readFileSync(metaPath, "utf8");
        res.setHeader("Content-Type", contentType);
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        return res.sendFile(rawPath);
      } catch (err) {
        console.error("Failed to read IPX cache, falling back to live generation:", err);
      }
    }

    // Intercept response stream to capture and cache optimized images on-the-fly
    const originalWrite = res.write;
    const originalEnd = res.end;
    const chunks = [];

    res.write = function (chunk, ...args) {
      if (chunk) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      }
      return originalWrite.apply(res, [chunk, ...args]);
    };

    res.end = function (chunk, ...args) {
      if (chunk) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      }

      if (res.statusCode === 200) {
        const buffer = Buffer.concat(chunks);
        const contentType = res.getHeader("content-type") || "image/jpeg";

        // Write to temporary files first, then rename atomically to prevent serving partially-written, corrupt files on parallel hits
        const tempRawPath = `${rawPath}.tmp.${crypto.randomBytes(6).toString("hex")}`;
        const tempMetaPath = `${metaPath}.tmp.${crypto.randomBytes(6).toString("hex")}`;

        fs.promises.mkdir(CACHE_DIR, { recursive: true })
          .then(() => Promise.all([
            fs.promises.writeFile(tempRawPath, buffer),
            fs.promises.writeFile(tempMetaPath, contentType)
          ]))
          .then(() => Promise.all([
            fs.promises.rename(tempRawPath, rawPath),
            fs.promises.rename(tempMetaPath, metaPath)
          ]))
          .catch((err) => {
            console.error("Failed to write IPX cache:", err);
            fs.promises.unlink(tempRawPath).catch(() => {});
            fs.promises.unlink(tempMetaPath).catch(() => {});
          });
      }

      return originalEnd.apply(res, [chunk, ...args]);
    };

    next();
  },
  createIPXNodeServer(ipx)
);

const build = viteDevServer
  ? () =>
      viteDevServer.ssrLoadModule(
        "virtual:remix/server-build"
      )
  : await import("./build/server/index.js");

app.all(/.*/, createRequestHandler({ build }));

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
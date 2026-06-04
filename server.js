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

// Periodically clean up cache files that haven't been accessed/modified in 7 days
function cleanupIpxCache() {
  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

  fs.promises.readdir(CACHE_DIR)
    .then((files) => {
      return Promise.all(
        files.map((file) => {
          const filePath = path.join(CACHE_DIR, file);
          return fs.promises.stat(filePath)
            .then((stats) => {
              if (stats.isFile() && stats.mtimeMs < sevenDaysAgo) {
                return fs.promises.unlink(filePath).catch(() => {});
              }
            })
            .catch(() => {}); // Ignore stat errors (e.g., if a file was deleted in parallel)
        })
      );
    })
    .catch((err) => {
      if (err.code !== "ENOENT") {
        console.error("Error during IPX cache cleanup:", err);
      }
    });
}

// Run cleanup on startup and schedule to run every 24 hours
cleanupIpxCache();
const cleanupTimer = setInterval(cleanupIpxCache, 24 * 60 * 60 * 1000);
if (cleanupTimer.unref) {
  cleanupTimer.unref(); // Prevent blocking process exit
}

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
    // Rewrite f_auto and f_avif to f_webp to force WebP output
    if (req.url) {
      req.url = req.url.replace(/f_auto/g, "f_webp").replace(/f_avif/g, "f_webp");
    }
    if (req.originalUrl) {
      req.originalUrl = req.originalUrl.replace(/f_auto/g, "f_webp").replace(/f_avif/g, "f_webp");
    }

    // Generate a secure hash of the request URL to avoid directory traversal and uniquely reference cached files
    const hash = crypto.createHash("sha256").update(req.originalUrl).digest("hex");
    const rawPath = path.join(CACHE_DIR, `${hash}.raw`);
    const metaPath = path.join(CACHE_DIR, `${hash}.meta`);

    // Check cache files asynchronously (fully non-blocking)
    Promise.all([
      fs.promises.stat(rawPath),
      fs.promises.readFile(metaPath, "utf8")
    ])
      .then(([rawStat, contentType]) => {
        if (rawStat.isFile()) {
          // Touch files asynchronously to update access/modification times (non-blocking)
          const now = new Date();
          fs.promises.utimes(rawPath, now, now).catch(() => {});
          fs.promises.utimes(metaPath, now, now).catch(() => {});

          res.setHeader("Content-Type", contentType.trim());
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          res.sendFile(rawPath, { dotfiles: "allow" }, (err) => {
            if (err && !res.headersSent) {
              console.error("Failed to send IPX cached file, generating fresh:", err);
              setupCacheInterceptor();
              next();
            }
          });
        } else {
          setupCacheInterceptor();
          next();
        }
      })
      .catch(() => {
        // Cache miss: setup response interceptor to capture and cache the output on-the-fly
        setupCacheInterceptor();
        next();
      });

    function setupCacheInterceptor() {
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
    }
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
import { createRequestHandler } from "@remix-run/express";
import express from "express";
import {createIPX, createIPXNodeServer, ipxFSStorage, ipxHttpStorage } from "ipx";

const ipx = createIPX({
  storage: ipxFSStorage({ dir: "./public"}),
  httpStorage: ipxHttpStorage({ domains: [process.env.STRAPI_URL] }),
  alias: {
    strapi: process.env.STRAPI_URL ,
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

app.all("*", createRequestHandler({ build }));

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
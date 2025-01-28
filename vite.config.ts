import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { createRoutesFromFolders } from "@remix-run/v1-route-convention";
import remarkGfm from "remark-gfm";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm],
    }),
    tailwindcss(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true,
        v3_singleFetch: true,
      },
      routes(defineRoutes) {
        // uses the v1 convention, works in v1.15+ and v2
        return createRoutesFromFolders(defineRoutes);
      },
    }),
    tsconfigPaths(),
  ],
});

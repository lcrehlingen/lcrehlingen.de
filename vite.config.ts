import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import remarkGfm from "remark-gfm";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm],
    }),
    tailwindcss(),
    reactRouter(),
  ],
});

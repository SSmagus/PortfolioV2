import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },

  vite: {
    base: "/saumya-portfolio/",

    server: {
      proxy: {
        "/leetcode": {
          target: "https://leetcode.com",
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/leetcode/, ""),
        },
      },
    },
  },
});
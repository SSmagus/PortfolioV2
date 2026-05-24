import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
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
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/api/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@hooks": path.resolve(__dirname, "./src/hooks/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@styles": path.resolve(__dirname, "./src/styles/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@context": path.resolve(__dirname, "./src/context/"),
      "@routes": path.resolve(__dirname, "./src/routes/"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://api.tftmeta.pl",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

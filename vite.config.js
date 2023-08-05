import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr';

export default defineConfig(() => {
  return {
    server: {
      open: true,
      port: 3000,
    },
    build: {
      outDir: "build",
    },
    plugins: [react(), svgr({ svgrOptions: { icon: true } })],
  };
});

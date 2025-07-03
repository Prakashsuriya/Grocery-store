import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  server: {
    port: 8080,
    host: true,
  },
  devToolbar: {
    enabled: false,
  },
  build: {
    outDir: "dist",
  },
});

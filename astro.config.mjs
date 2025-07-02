import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    port: 8080,
    host: true,
  },
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@shared": "/shared",
      },
    },
  },
});

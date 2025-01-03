// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

import analogjsangular from "@analogjs/astro-angular";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    analogjsangular({
      vite: {
        inlineStylesExtension: "scss|sass|less",
        liveReload: true,
        experimental: {
          supportAnalogFormat: true,
        },
      },
    }),
  ],
  vite: {
    optimizeDeps: {
      include: ["@excalidraw/excalidraw"],
    },
    ssr: {
      external: ["@excalidraw/excalidraw"],
    },
    define: {
      "process.env.IS_PREACT": JSON.stringify("false"),
    },
  },

  adapter: node({
    mode: "standalone",
  }),
});

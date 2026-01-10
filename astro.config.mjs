// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["docs.astro.build"],
  },

  site: "https://elblogdelgzus.netlify.app/",
  integrations: [preact()],
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
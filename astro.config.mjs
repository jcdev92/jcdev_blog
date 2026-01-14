// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["docs.astro.build"],
  },

  site: "https://elblogdelgzus.netlify.app/",
  integrations: [react(), markdoc(), keystatic()],

  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },

  adapter: vercel(),
});
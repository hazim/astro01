// @ts-check
import { defineConfig } from 'astro/config';


import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: "shiki", // Enables syntax highlighting
    shikiConfig: {
      theme: "dracula", // Try other themes like "github-dark" or "nord"
    },
  },
  site: "https://frontendflux.netlify.app",
  integrations: [preact()]
});

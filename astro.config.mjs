// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://whiskyfestival.be',
  integrations: [sitemap()],
  server: {
    port: 4332,
    host: true
  }
});
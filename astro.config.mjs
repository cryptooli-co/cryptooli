// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cryptooli.com',
  trailingSlash: 'always',
  compressHTML: false,
  integrations: [sitemap()],
});
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://bertermann-art.netlify.app',
  output: 'static',
  adapter: netlify(),
  integrations: [
    react(),
    markdoc(),
    keystatic(),
  ],
});

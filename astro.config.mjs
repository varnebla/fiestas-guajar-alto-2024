import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://fiestasguajaralto2024.com',
  integrations: [tailwind(), sitemap()]
});

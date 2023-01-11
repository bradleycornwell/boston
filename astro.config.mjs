import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
	output: 'server',
	adapter: netlify(),
	integrations: [tailwind()],
});

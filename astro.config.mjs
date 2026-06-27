import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://www.buckley.ca',
	output: 'static',
	trailingSlash: 'never',
	integrations: [sitemap()]
});

import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	site: 'http://stevepop.com',
	port: 4321,
	integrations: [mdx(), sitemap()],
	adapter: node({
		mode: "standalone"
	})
});

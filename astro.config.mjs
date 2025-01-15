import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Home',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Frontend',
					autogenerate: { directory: 'frontend', },
				},
				{
					label: 'Backend',
					autogenerate: { directory: 'backend', },
				},			
			],
		}),
	],
});

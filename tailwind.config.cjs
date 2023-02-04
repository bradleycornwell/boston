/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			white: '#FFFFFF',
			black: '#000000',
			green: {
				100: '#eef3f0',
				300: '#a9c1b2',
				500: '#528265',
				900: '#314e3d',
			},
		},
		extend: {},
	},
	plugins: [],
};

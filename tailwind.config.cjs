/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			body: ['Playfair Display', 'sans'],
			heading: ['Great Vibes', 'serif'],
		},
		colors: {
			white: '#FFFFFF',
			black: '#000000',
			green: '#528265',
		},
		extend: {},
	},
	plugins: [],
};

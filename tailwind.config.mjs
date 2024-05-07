/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				noto: ['Noto Serif Display', 'serif'],
				cloud: ['IBM Plex Mono', 'monospace'],
				glacial: ['Iosevka Aile', 'sans-serif'],
			},
			colors: {
				bgPrimary:'#F4ECE7',
				wine:'#721F49',
				brown:'#5B4437',
				whiteVariation: '#FFFBF8'
			}
		},
	},
	plugins: [],
}

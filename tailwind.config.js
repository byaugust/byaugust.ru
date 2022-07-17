module.exports = {
	mode: 'jit',
	important: true,
	purge: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
	darkMode: 'class',
	content: [],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
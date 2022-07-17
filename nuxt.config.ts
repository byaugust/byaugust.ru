import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
	css: ['~/assets/css/tailwind.css'],
	modules: ['@nuxt/content'],
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	}
})
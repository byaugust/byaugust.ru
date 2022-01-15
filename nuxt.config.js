export default {
    ssr: true,
    components: true,
    head: {
        title: 'Константин Вороной',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [

        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    css: ["@/assets/css/tailwind.css"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxt/content'],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    colorMode: {
        classSuffix: ""
    }
}
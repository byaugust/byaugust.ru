<template>
    <div class="w-full mx-auto h-full py-0 my-0">
        <div class="lg:w-6/12 w-full md:w-10/12 flex items-center mx-auto px-6 py-6 md:px-8">
            <div>
                <nuxt-link v-if="$colorMode.preference === 'light'" to="/"><img class="h-10 w-10" src="~/static/kv.png" alt=""></nuxt-link>
                <nuxt-link v-else to="/"><img class="h-10 w-10" src="~/static/kv_gray.png" alt=""></nuxt-link>
            </div>
            <div class="ml-auto">
                <button v-if="$colorMode.preference === 'dark'" @click="change_theme('light')" class="focus:outline-none hover:outline-none outline-none border-none rounded-lg h-10 w-10 flex text-gray-600 dark:text-gray-400 items-center justify-center dark:hover:bg-dark-222 dark:hover:text-gray-200 hover:bg-gray-200 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </button>
                <button v-else-if="$colorMode.preference === 'light'" @click="change_theme('dark')" class="focus:outline-none hover:outline-none outline-none border-none rounded-lg h-10 w-10 flex text-gray-600 dark:text-gray-400 items-center justify-center dark:hover:bg-dark-222 dark:hover:text-gray-200 hover:bg-gray-200 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </button>
                <button v-else-if="$colorMode.preference === 'system'" @click="change_theme('dark')" class="focus:outline-none hover:outline-none outline-none border-none rounded-lg h-10 w-10 flex text-gray-600 dark:text-gray-400 items-center justify-center dark:hover:bg-dark-222 dark:hover:text-gray-200 hover:bg-gray-200 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </button>
            </div>
            <!-- <div class="ml-auto ">
                <nuxt-link class="hover:text-blue-600" to="/">Блог</nuxt-link>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'navbar',
    methods: {
        change_theme(theme) {
            if (theme) {
                this.$colorMode.preference = theme
            }
        }
    }
}
</script>
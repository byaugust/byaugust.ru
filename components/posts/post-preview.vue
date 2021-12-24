<template>
    <nuxt-link class="mb-6 block relative" :to="`/posts/${post.slug}`">
        <div class="absolute left-0 top-0 mt-1 -ml-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="hovered ? 'text-indigo-600' : 'text-indigo-200'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        </div>
        <div @mouseover="hovered = true" @mouseleave="hovered = false">
            <h2 class="text-xl font-medium mb-0" :class="hovered ? 'text-dark-333' : 'text-dark-444'">
                {{ post.title }}
            </h2>
            <p class="text-base font-normal" :class="hovered ? 'text-dark-555' : 'text-dark-666'">
                {{ get_date(post.date) }}
            </p>
        </div>
    </nuxt-link>
</template>

<script>
import * as dayjs from "dayjs"
import 'dayjs/locale/ru'
export default {
    name: 'post-preview',
    props: {
        post: Object
    },
    data() {
        return {
            hovered: false
        }
    },
    methods: {
        get_date(date) {
            return dayjs.unix(date).locale('ru').format('DD MMM YYYY')
        }
    }
}
</script>
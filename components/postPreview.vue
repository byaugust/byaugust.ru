<template>
    <nuxt-link class="mb-6 block relative" :to="post._path">
        <div class="absolute left-0 top-0 mt-1 -ml-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="hovered ? 'text-indigo-600' : 'text-indigo-200'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        </div>
        <div @mouseover="hovered = true" @mouseleave="hovered = false">
            <h2 class="text-xl font-medium mb-0 text-neutral-900 dark:text-neutral-100" :class="{'opacity-90' : hovered}">
                {{ post.title }}
            </h2>
            <p class="text-base font-normal text-neutral-600 dark:text-neutral-200" :class="{'opacity-90' : hovered}">
                {{ postDate }}
            </p>
        </div>
    </nuxt-link>
</template>
<script setup>
import { ref } from 'vue'
import dayjs from "dayjs"
import 'dayjs/locale/ru'
const props = defineProps(['post'])
const hovered = ref(false)
async function get_date(date) {
    return dayjs.unix(date).locale('ru').format('DD MMM YYYY')
}
const postDate = await get_date(props.post.date)
</script>
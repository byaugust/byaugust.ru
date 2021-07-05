<template>
    <div class="w-full mx-auto h-full py-0 my-0 ">
        <div class="lg:w-6/12 w-full md:w-10/12 mx-auto content lg:py-24 md:py-16 py-8 px-4 md:px-0">
            <div class="w-40 h-40 rounded-full shadow-sm mb-6">
                <img class="h-full w-full rounded-full" src="../static/pic.jpeg" alt="">
            </div>
            <h2 class="md:text-2xl text-xl font-medium mb-2">Привет, я — Костя 🖖</h2>
            <p class="md:text-lg text-base font-normal mb-4">Днем преподаю английский, по ночам пишу код. Здесь документирую: что делаю, что сделал, что узнал нового, что получилось, что не получилось и т.п.</p>
            <div v-for="post in posts" :key="post.slug" class="border-b border-gray-200 border-dashed py-12">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </span>
                <h1 class="text-xl font-medium mb-4">

                    {{ post.title }}
                </h1>
                <nuxt-content :document="post" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const posts = await $content("posts").fetch();
        return { posts };
    },
};
</script>
<style lang="css">
.content p {
    @apply mb-6 text-lg font-normal;
    color: #333333;
}
</style>


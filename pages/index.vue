<template>
    <div class="w-full mx-auto h-full py-0 my-0">
        <div class="lg:w-6/12 w-full md:w-10/12 mx-auto pt-8 pb-24 px-6 md:px-8">
            <div class="w-40 h-40 rounded-full shadow-sm mb-6">
                <img class="h-full w-full rounded-full" src="../static/pic.jpeg" alt="">
            </div>
            <h2 class="md:text-2xl text-xl font-medium mb-2">Привет, я — Костя 🖖</h2>
            <p class="md:text-xl text-lg text-dark-555 font-normal mb-12">Днем преподаю английский, по ночам пишу код. Здесь документирую: что делаю, что сделал, что узнал нового, что получилось и т.п.</p>
            <h2 class="text-2xl font-medium mb-3">Блог</h2>
            <postpreview v-for="post in posts" :key="post.slug" :post="post" />
        </div>
    </div>
</template>

<script>
import postpreview from "~/components/posts/post-preview.vue"
export default {
    components: {
        postpreview
    },
    async asyncData({ $content, params }) {
        try {
            const posts = await $content("posts").sortBy('date', 'desc').fetch();
            return { posts };
        } catch {
            (err) => {
                console.log(err);
            };
        }
    }
};
</script>



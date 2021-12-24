<template>
    <div class="w-full mx-auto h-full py-0 my-0 ">
        <div class="lg:w-6/12 w-full md:w-10/12 mx-auto py-8 px-6 md:px-8">
            <h1 class="text-3xl font-medium mb-3">
                {{ post.title }}
            </h1>
            <p class="text-base font-normal mb-6 text-dark-666">
                {{ get_date(post.date) }}
            </p>
            <nuxt-content class="content " :document="post" />
        </div>
    </div>
</template>

<script>
import * as dayjs from "dayjs"
import 'dayjs/locale/ru'
export default {
    name: 'post-page',
    async asyncData({ $content, params }) {
        try {
            const post = await $content("posts", params.post).fetch();
            return { post };
        } catch {
            (err) => {
                console.log(err);
            };
        }
    },
    head() {
        return {
            title: this.post?.title ? this.post.title : ''
        }
    },
    methods: {
        get_date(date) {
            return dayjs.unix(date).locale('ru').format('DD MMM YYYY')
        }
    }

}
</script>

<style lang="css">
.content p {
    @apply mb-6 text-xl font-normal;
    color: #333333;
}
.content h3 {
    @apply mb-6 text-xl font-medium;
    color: #000000;
}
</style>
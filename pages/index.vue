<template>
    <div class="w-full mx-auto h-full py-0 my-0">
        <div class="lg:w-6/12 w-full md:w-10/12 mx-auto pt-8 pb-24 px-6 md:px-8">
            
            <div class="w-40 h-40 rounded-full shadow-sm mb-6">
                <img class="h-full w-full rounded-full" src="/pic.jpeg" alt="">
            </div>

            <h2 class="md:text-2xl text-black dark:text-gray-50 text-xl font-medium mb-2">Привет, я — Костя 🖖</h2>

            <p class="md:text-xl text-lg text-dark-555 dark:text-gray-300 font-normal mb-6">Пишу код, создаю проект <a class="link text-blue-600" href="https://speakny.ru">speakny.ru</a> и <a class="link text-blue-600" href="https://createtoday.ru">createtoday.ru</a></p>

            <p class="md:text-xl text-lg text-dark-555 dark:text-gray-300 font-normal mb-6">Раньше преподавал английский, испанский, итальянский, французский, португальский. А сейчас учусь в университете искусственного интеллекта.</p>

            <p class="md:text-xl text-lg text-dark-555 dark:text-dark-20 font-normal mb-12">Здесь документирую понемногу свое путешествие.</p>

            <h2 class="text-2xl text-black dark:text-dark-20 font-medium mb-3">Блог</h2>
            
            <ContentList path="/posts" v-slot="{ list }" :query="{ sort: { date:-1, $numeric: true } }">
                <postPreview v-for="post in list" :key="post._id" :post="post" />   
            </ContentList>
        </div>
    </div>
</template>
<script setup>
useHead({
    title: 'augustjourney'
})
</script>
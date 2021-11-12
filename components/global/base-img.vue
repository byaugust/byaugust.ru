<template>
    <div class="image-container mb-6 p-1 rounded" style="background: #FBFBFB">
        <img :src="src" class="rounded" :alt="src">
    </div>
</template>

<script>
export default {
    name: 'base-img',
    props: {
        src: String,
        alt: String
    }
}
</script>
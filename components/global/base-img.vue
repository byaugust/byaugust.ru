<template>
    <div class="image-container mb-6">
        <img :src="src" class="shadow-xl rounded-xl" :alt="src">
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
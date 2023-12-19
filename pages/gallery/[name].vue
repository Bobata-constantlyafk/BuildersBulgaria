<template>
    <div class="gallery-full-main">
        <p>product details for {{ name }}</p>
    </div>
</template>

<script setup>
    const {name} = useRoute().params
    definePageMeta({
        layout: 'gallery'
    })
</script>

<style lang="scss" scoped>
.gallery-full-main{
    display: grid;
    justify-content: center;
    align-content: center;
    height: 100vh;

    p{
        font-family: 'Basil Regular';
        font-size: 1.5rem;
    }
}
</style>
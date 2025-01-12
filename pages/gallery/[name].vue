<template>
  <div class="galleryPageMain">
    <div class="imageContainer">
      <img v-for="(src, index) in imageSrcArray" :key="index" :src="src" alt="House Image" />
    </div>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch } from '#app';

const imageSrcArray = ref([]);
const text = ref('');
const route = useRoute();

onMounted(async () => {
  const houseType = route.params.name;
  console.log('House Type:', houseType);

  if (houseType) {
    const { data, error } = await useFetch(`/api/getImages?houseType=${houseType}`);
    if (!error.value) {
      imageSrcArray.value = data.value;
      text.value = `${houseType.charAt(0).toUpperCase() + houseType.slice(1)}`;
    } else {
      console.error('Error fetching images:', error.value);
      text.value = 'Error loading images.';
    }
  } else {
    imageSrcArray.value = [];
    text.value = 'No house type selected.';
  }
});
</script>

<style lang="scss" scoped>
.galleryPageMain {
  display: grid;
  grid-template-rows: auto auto;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }

  p {
    font-family: 'Basil Regular';
    font-size: 1.5rem;
    margin: 0 auto;
    margin-top: 2vw;
    max-width: 50%;
  }
}
</style>

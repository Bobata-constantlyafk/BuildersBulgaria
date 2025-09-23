<template>
  <div class="galleryPageMain">
    <h1>Галерия</h1>
    <h2>{{ translatedText }}</h2>
    <div class="imageContainer">
      <img v-for="(src, index) in imageSrcArray" :key="index" :src="src" alt="House Image" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch } from '#app';

const imageSrcArray = ref([]);
const text = ref('');
const translatedText = ref('');
const route = useRoute();

function translateRoute(name) {
  const translations = {
    metalHouses: "Метални къщи",
    ogradi: "Огради",
    Saniranev: "Санировки",
    PodporniSteni: "Подпорни стени"
  };
  return translations[name] || name;
}

async function fetchImages(houseType) {
  if (!houseType) {
    imageSrcArray.value = [];
    text.value = 'No house type selected.';
    return;
  }

  const { data, error } = await useFetch(`/api/getImages?houseType=${houseType}`);

  if (!error.value) {
    imageSrcArray.value = data.value;
    text.value = `${houseType.charAt(0).toUpperCase() + houseType.slice(1)}`;
  } else {
    console.error('Error fetching images:', error.value);
    text.value = 'Error loading images.';
  }
}

onMounted(async () => {
  const houseType = route.params.name;
  translatedText.value = translateRoute(houseType);
  await fetchImages(houseType);
});
</script>

<style lang="scss" scoped>
.galleryPageMain {
  display: grid;
  grid-template-rows: auto auto;

  img {
    width: 100vw;
    height: auto;
    object-fit: cover;
  }

  h1{
    font-family: 'Basil Regular';
    font-size: 4rem;
    margin: 0 auto;
    margin-top: 1vw;
  }

  h2{
    font-family: 'Basil Regular';
    font-size: 2rem;
    margin: 0 auto;
    margin-bottom: 6vw;
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

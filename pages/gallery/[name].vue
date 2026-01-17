<template>
  <div class="galleryPageMain">
    <h1>Галерия</h1>
    <h2>{{ translatedText }}</h2>

    <!-- -b- Wrap Splide in Client Only -->
    <Splide :options="{ type: 'loop', autoplay: true, pagination: true, arrows: true }">
      <SplideSlide v-for="(src, index) in imageSrcArray" :key="index">
        <img :src="src" alt="House Image" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useFetch } from '#app';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const imageSrcArray = ref([]);
const translatedText = ref('');
const route = useRoute();

function translateRoute(name) {
  const translations = {
    metalHouses: "Метални къщи",
    ogradi: "Огради",
    sanirane: "Санировки",
    podporniSteni: "Подпорни стени"
  };
  return translations[name] || name;
}

async function fetchImages(houseType) {
  if (!houseType) {
    imageSrcArray.value = [];
    return;
  }

  const { data, error } = await useFetch(`/api/getImages?houseType=${houseType}`);

  if (!error.value) {
    imageSrcArray.value = data.value;
  } else {
    console.error('Error fetching images:', error.value);
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
  grid-template-rows: auto auto auto;
  justify-items: center;
  padding-bottom: 10rem;

  h1 {
    font-family: 'Basil Regular';
    font-size: 4rem;
    margin: 0 auto;
    margin-top: 1vw;
  }

  h2 {
    font-family: 'Basil Regular';
    font-size: 2rem;
    margin: 0 auto;
    margin-bottom: 3vw;
  }

  .splide {
    width: 100%;
    max-width: 1200px;

    img {
      width: 100%;
      height: 600px;
      object-fit: contain;
      background: black;
      border-radius: 12px;
    }
  }
}
</style>

<template>
  <div class="galleryMain">
    <NuxtLink :to="'/gallery/House-trad'">
      <img class="gallery-image" :src="houseTradImage" alt="house">
    </NuxtLink>
    <NuxtLink :to="'/gallery/House-modern'">
      <img class="gallery-image" :src="houseModernImage" alt="house">
    </NuxtLink>
    <NuxtLink :to="'/gallery/Italian-house'">
      <img class="gallery-image" :src="italianHouseImage" alt="house">
    </NuxtLink>
    <NuxtLink :to="'/gallery/house-example'">
      <img class="gallery-image" :src="houseExampleImage" alt="house">
    </NuxtLink>
  </div>
</template>

<script>
import houseTradImage from '@/public/House-trad.png';
import houseModernImage from '@/public/House-modern.png';
import italianHouseImage from '@/public/Italian-house.png';
import houseExampleImage from '@/public/house-example.jpg';

export default {
  data() {
    return {
      houseTradImage,
      houseModernImage,
      italianHouseImage,
      houseExampleImage,
    };
  },
};
</script>

<style lang="scss">
.galleryMain {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0;
  height: 130vh;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

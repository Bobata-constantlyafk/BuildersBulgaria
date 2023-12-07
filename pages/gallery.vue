<template>
  <div class="galleryMain" v-cloak>
    <img class="gallery-image" src="/House-Trad.png" alt="house">
    <img class="gallery-image" src="/House-modern.png" alt="house">
    <img class="gallery-image" src="/Italian-house.png" alt="house">
    <img class="gallery-image" src="/house-example.jpg" alt="house">
  </div>
</template>



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
  object-fit:cover;
}
</style>

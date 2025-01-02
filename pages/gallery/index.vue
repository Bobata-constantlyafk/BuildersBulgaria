<template>
  <div class="galleryMain">
    <NuxtLink :to="'/gallery/House-trad'">
      <img class="gallery-image" src="House-trad.png" alt="house">
    </NuxtLink>
    <NuxtLink :to="'/gallery/House-modern'">
      <img class="gallery-image" src="House-modern.png" alt="house">
    </NuxtLink>
    <NuxtLink :to="'/gallery/Italian-house'">
      <img class="gallery-image" src="Italian-house.png" alt="house">
    </NuxtLink>
    <NuxtLink :to="'/gallery/house-example'">
      <img class="gallery-image" src="house-example.jpg" alt="house">
    </NuxtLink>
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

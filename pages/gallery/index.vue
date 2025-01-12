<template>
  <div class="galleryMain">
    <NuxtLink :to="'/gallery/metalHouses'">
      <img class="gallery-image" src="https://i.imgur.com/Kj6Jre1.png" alt="house">
    </NuxtLink>
    <NuxtLink :to="'/gallery/ogradi'">
      <img class="gallery-image" src="https://i.imgur.com/CSDBVvv.png" alt="house">
    </NuxtLink>
    <NuxtLink :to="'/gallery/sanirane'">
      <img class="gallery-image" src="https://i.imgur.com/UckWm1p.png" alt="house">
    </NuxtLink>
    <NuxtLink :to="'/gallery/podporniSteni'">
      <img class="gallery-image" src="https://i.imgur.com/5TEkWlp.png" alt="house">
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

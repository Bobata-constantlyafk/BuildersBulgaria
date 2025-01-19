<template>
  <div class="galleryMain">
    <NuxtLink :to="'/gallery/metalHouses'">
      <img class="gallery-image" src="https://i.imgur.com/ObzcPVW.png" alt="metalniKushti">
    </NuxtLink>
    <NuxtLink :to="'/gallery/ogradi'">
      <img class="gallery-image" src="https://i.imgur.com/2paexcy.png" alt="fences">
    </NuxtLink>
    <NuxtLink :to="'/gallery/sanirane'">
      <img class="gallery-image" src="https://i.imgur.com/ceWzq7q.png" alt="sanirane">
    </NuxtLink>
    <NuxtLink :to="'/gallery/podporniSteni'">
      <img class="gallery-image" src="https://i.imgur.com/WrxKi1Z.png" alt="podporniSteni">
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

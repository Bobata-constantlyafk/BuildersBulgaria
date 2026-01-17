<template>
  <h1>Галерия</h1>
  <div class="galleryMain">
    <NuxtLink :to="'/gallery/metalHouses'">
      <img class="gallery-image" src="https://i.imgur.com/fiaGEpp.png" alt="металниКъщи" title="металниКъщи">
    </NuxtLink>
    <NuxtLink :to="'/gallery/ogradi'">
      <img class="gallery-image" src="https://i.imgur.com/2paexcy.png" alt="огради" title="огради">
    </NuxtLink>
    <NuxtLink :to="'/gallery/sanirane'">
      <img class="gallery-image" src="https://i.imgur.com/OF9C6S1.png" alt="саниране" title="саниране">
    </NuxtLink>
    <NuxtLink :to="'/gallery/podporniSteni'">
      <img class="gallery-image" src="https://i.imgur.com/WrxKi1Z.png" alt="подпорниСтени" title="подпорниСтени">
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">

h1{
    text-align: center;
    align-self: end;
    font-size: 4rem;
    font-family: 'Basil Regular';
    padding-top: 0vw;
  }

.galleryMain {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.6rem;
  height: 130vh;
  overflow: hidden;
}

.gallery-image {
  width: 100%; 
  height: 100%;
  object-fit:cover;
}
@media (max-width: 768px) {
  .galleryMain {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    height: auto;
  }

  h1{
    font-size: 2.5rem;
    padding-top: 1rem;
  }
}
</style>

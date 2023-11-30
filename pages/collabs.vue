<template>
  <div class="collabsMain">
    <h1>Колаборатори</h1>
    <div class="collabs-images">
      <img class="collabs-image" src="/Sofia.png" alt="">
      <img class="collabs-image" src="/Varna.png" alt="Varna">
      <img class="collabs-image" src="/Teteven.png" alt="Teteven">
    </div>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Basil Regular';
  src: url('/Basil-Regular.ttf') format('truetype'),
       url('/Basil-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

.collabsMain {
  display: grid;
  grid-template-rows: 100px 250px;
  padding-top: 1rem;
  padding-bottom: 10rem;
  justify-content: center;

  h1{
    text-align: center;
    font-size: 4rem;
    font-family: 'Basil Regular';
  }

  .collabs-images{
    padding-top: 6rem;
    display: grid;
    grid-template-columns: 30rem 30rem 30rem;
    justify-items: center;
  }

  .collabs-image {
    width: auto;
    height: 250px;
  }
}
</style>

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
.collabsMain {
  display: grid;
  grid-template-rows: 180px 400px;
  justify-content: center;
  height: 100%;
  overflow: hidden;

  h1{
    text-align: center;
    align-self: end;
    font-size: 4rem;
    font-family: 'Basil Regular';
    padding-top: 0vw;
  }

  .collabs-images{
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 30rem 30rem 30rem;
    justify-items: center;

      .collabs-image {
      width: auto;
      height: 250px;
      }
  }
}
@media (max-width: 768px) {
  .collabsMain {
    grid-template-rows: 100px auto;
    height: auto;
    padding-top: 6rem;

    h1 {
      font-size: 3rem;
      padding-top: 6rem;
    }

    .collabs-images {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, auto);
      gap: 1.5rem;
      padding: 1rem 0;

      .collabs-image {
        height: 150px;
      }
    }
  }
}
</style>

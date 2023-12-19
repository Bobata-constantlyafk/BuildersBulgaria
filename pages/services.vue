<template>
  <div class="servicesMain">
    <h1>Услуги</h1>
    <div class="services-images">
      <div>
        <img class="services-image" src="/planning.png" alt="Varna">
        <h2>Планиране</h2>
      </div>

      <div>
        <img class="services-image" src="/housemaking.png" alt="">
        <h2>Строеж</h2>
      </div>

      <div>
        <img class="services-image" src="/housemaking.png" alt="Teteven">
        <h2>Ремонт</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.servicesMain {
  display: grid;
  grid-template-rows: 180px 400px;
  justify-content: center;
  height: 100%;
  overflow: hidden;

  h1,h2{
    text-align: center;
    font-family: 'Basil Regular';
  }

  h1{
    align-self: end;
    font-size: 4rem;
  }

  h2{
    font-size: 1.5rem;
  }

  .services-images{
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 30rem 30rem 30rem;
    justify-items: center;

      .services-image {
      width: auto;
      height: 250px;
      }
  }
}
</style>

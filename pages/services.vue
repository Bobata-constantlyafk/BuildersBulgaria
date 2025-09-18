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
        <img class="services-image" src="/houseRepair.png" alt="Teteven">
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
  padding-top: 6rem;
  padding-bottom: 6rem;

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
    display: grid;
    grid-template-columns: 30rem 30rem 30rem;
    justify-items: center;

      .services-image {
      width: auto;
      height: 250px;
      }
  }
}
@media (max-width: 768px) {
  .servicesMain {
    grid-template-rows: 100px auto;
    height: auto;
    padding-top: 15rem;
    padding-bottom: 0rem;

    h1 {
      font-size: 3.9em;
      margin-top: 6rem;
    }

    h2 {
      margin: 0;
    }

    .services-images {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, auto);
      gap: 6rem;
      padding: 1rem 0;

      .services-image {
        height: 150px;
      }
    }
  }
}
</style>

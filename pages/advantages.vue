<template>
  <div class="advantagesMain">
    <img class="advantages-image" src="/Italian-house.png" alt="house">
    <div class="advantages-right">
      <div class="advantages-good">
        <img class="advantages-primer" src="/housemaking.png" alt="good">
        <h1>Опит</h1>
        <p>paragraphus maxisum doterimus dolor si amet, met de costa baller. Helaas pindakaas.</p>
      </div>

      <div class="advantages-good">
        <img class="advantages-primer" src="/planning.png" alt="good">
        <h1>Качество</h1>
        <p>paragraphus maxisum doterimus dolor si amet, met de costa baller. Helaas pindakaas.</p>
      </div>

      <div class="advantages-good">
        <img class="advantages-primer" src="/planning.png" alt="good">
        <h1>Майсторлък</h1>
        <p>paragraphus maxisum doterimus dolor si amet, met de costa baller. Helaas pindakaas.</p>
      </div>

      <div class="advantages-good">
        <img class="advantages-primer" src="/housemaking.png" alt="good">
        <h1>Пунктуалност </h1>
        <p>paragraphus maxisum doterimus dolor si amet, met de costa baller. Helaas pindakaas.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.advantagesMain {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .advantages-image {
  width: 100%; 
  height: 100%;
  object-fit:cover;
  }

  .advantages-right{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding-inline: 2rem;
    gap:2rem;
    justify-content: center;
    align-items: center;

    .advantages-good{
      display: grid;
      justify-items: center;
    }

    .advantages-primer{
      width:auto;
      height: 12rem;
    }

    h1,p{
      font-family: 'Basil Regular';
      text-align: center;
      margin-top: 0rem;
      margin-bottom: 0rem;
    }
  }
}


</style>

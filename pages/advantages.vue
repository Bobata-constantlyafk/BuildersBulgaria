<template>
  <h1>Защо бихте работили с нас?</h1>
  <div class="advantagesMain">
    <img class="advantages-image" src="/Italian-house.png" alt="house">
    <div class="advantages-right">
      <div class="advantages-good">
        <img class="advantages-primer" src="/customer-service.png" alt="good">
        <h2>Опит</h2>
        <p>Над 10 години опит в стройтелството <br/> ‎ </p>
      </div>

      <div class="advantages-good">
        <img class="advantages-primer" src="/quality.png" alt="good">
        <h2>Качество</h2>
        <p>Работим с високи стандарти за безкомпромисно качество.</p>
      </div>

      <div class="advantages-good">
        <img class="advantages-primer" src="/technician.png" alt="good">
        <h2>Майсторлък</h2>
        <p>Съчетаваме умения и внимание към детайла, за устойчиви и красиви домове.</p>
      </div>

      <div class="advantages-good">
        <img class="advantages-primer" src="/punctuality.png" alt="good">
        <h2>Пунктуалност </h2>
        <p>Държим на коректното и навременно изпълнение</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

  h1{
    text-align: center;
    align-self: end;
    font-size: 3.3rem;
    font-family: 'Basil Regular';
    padding-top: 0vw;
  }
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

    h2,p{
      font-family: 'Basil Regular';
      text-align: center;
      margin-top: 0rem;
      margin-bottom: 0rem;
    }
  }
}

@media (max-width: 768px) {

  h1{
    text-align: center;
    font-size: 3rem;
    padding-top: 6rem;
  }

  .advantagesMain {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    height: auto;

    .advantages-image {
      height: 40vh;
    }

    .advantages-right {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(1, auto);
      padding: 1rem;
      gap: 1rem;

      .advantages-good {
        .advantages-primer {
          height: 8rem;
          padding-top: 3rem;
        }

        h2 {
          font-size: 2.1rem;
        }

        p {
          font-size: 1.5rem;
        }
      }
    }
  }
}

</style>

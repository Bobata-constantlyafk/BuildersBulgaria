<template>
  <div class="aboutMain">
    <p> В БълдърсБългария се стремим да предоставяме изключителни строителни услуги. Целта ни е да доставим възможно най-добрата изработка.</p>
    <p> Обхващаме всеки етап на вашия проект, включително планиране, проектиране, изпълнение и последен щрих.</p>
  </div>
</template>
  
<script>

</script>

<style lang="scss">
  .aboutMain{
    margin-bottom: 3%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    p{
      font-size: 1.4rem;
      font-family: 'Basil Regular';
      padding-inline: 12%;
      text-align:left;
      color: black;
    }
  }

  @media (max-width: 768px) {
    .aboutMain {
      grid-template-columns: 1fr;

      p {
        padding-inline: 5%;
        font-size: 1.2rem;
        text-align: center;
        font-size: 1.5rem;
      }
    }
  }
</style>
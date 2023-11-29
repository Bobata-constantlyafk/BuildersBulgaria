<template>
  <div class="aboutMain">
    <p> В БълдърсБългария се стремим да предоставяме изключителни строителни услуги. Ангажирани сме да се съобразим с вашият бюджет и да доставим възможно най-добрата изработка.</p>
    <p> Обхващаме всеки етап на вашия проект, включително планиране, проектиране, изпълнение и завършващи докосвания.</p>
  </div>
</template>
  
<script>

</script>

<style lang="scss">
@font-face {
  font-family: 'Basil Regular';
  src: url('/Basil-Regular.ttf') format('truetype'),
       url('/Basil-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
  .aboutMain{
    margin-left: 4%;
    margin-right: 4%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    p{
      font-size: 1.2rem;
      font-family: 'Basil Regular';
      padding-inline: 3%;
      text-align: justify;
    }
  }
</style>
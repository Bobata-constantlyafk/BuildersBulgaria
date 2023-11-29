<template>
  <div class="servicesMain">
    <h1>Сайтът е в процес на изработка</h1>
    <p>Благодарим за търпението</p>
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

.servicesMain{
  display: grid;
  grid-template-rows: 5rem 2rem 2rem;
  justify-content: center;
  align-content: center;
  margin-top: 0%;
  height:80vh;
  background-image: url('/house3.png');
  background-size: cover;
  background-position: center;

  h1, p{
    color: white;
    text-align: center;
    font-family: 'Basil Regular';
  }
}
</style>
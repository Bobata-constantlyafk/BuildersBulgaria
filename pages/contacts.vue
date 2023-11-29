<template>
  <div class="contactsMain">
    <h1>Контакти</h1>
    <p>Електронна поща: <br/> buildconstruction21@gmail.com</p>
    <p>Телефонен номер: <br/>Калоян Борисов: +359(0) 896 835 470 <br/> Ивайло Нончев: +359(0) 878 716 062</p>
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

.contactsMain{
  display: grid;
  grid-template-rows: 5rem 3.5rem 3.5rem;
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
  
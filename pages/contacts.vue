<template>
  <div className="contactsMain">
    <h1>Контакти</h1>
    <p>Телефонен номер</p>
    <p>Електронна поща</p>
  </div>
</template>

<script>

</script>

<style lang="scss">
@font-face {
  font-family: 'Basil Regular';
  src: url('~/public/Basil-Regular.ttf') format('truetype'),
       url('~/public/Basil-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

.contactsMain{
  display: grid;
  justify-content: center;

  h1, p{
    text-align: center;
    font-family: 'Basil Regular';
  }
}
</style>
  
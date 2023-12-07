<template>
  <div class="contactsNewMain">
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <div class="contactsInfo">
      <h1>Контакти</h1>
      <div>
        <h2>Телефонен номер:</h2> <p>Калоян Борисов: <br/> +359(0) 896 835 470 <br/> <br/>Ивайло Нончев: <br/> +359(0) 878 716 062</p>
      </div>
      <div>
        <h2>Електронна поща:</h2> <p class="email">buildconstruction21@gmail.com</p>
      </div>  
    </div>
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

.contactsNewMain{
  display: grid;
  height:88vh;
  width: auto;
  background-size:cover;
  background-repeat: no-repeat; 
  background-image: url('/House-modern-hq.png');
  border: 104px solid black;
  border-bottom: 60px solid black;
  border-top: 50px solid black;
  border-left: none;

  .contactsInfo{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: space-between;
    align-items: start;
    margin-left: 10em;
    padding-top: 2em;
    padding-left: 2em;
    padding-right: 2em;
    background-color: #000;
    
    h1,h2, p{
    color: white;
    font-family: 'Basil Regular';
    }
    h1{
      font-size: 3em;
      margin-top: 0rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    p{
      font-size: 1.1em;
    }
    .email{
      color: black;
      background-color: white;
    }
  }
  
}
</style>
  
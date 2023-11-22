<template>
  <div className="indexMain">
    <div className="headings">
        <h1 className="first-h1">Майсторство</h1>
        <h3>без компромиси</h3>
        <h1 className="second-h1">Усилия </h1>
        <h3>без граници</h3>
    </div>
  </div>
  <About />
</template>

<script setup>
import About from './about.vue';
</script>

<style lang="scss">

@font-face {
  font-family: 'Basil Regular';
  src: url('~/public/Basil-Regular.ttf') format('truetype'),
       url('~/public/Basil-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

  .indexMain{
    margin-top: 0%;
    height:80vh;
    background-image: url('/house3.png');
    background-size: cover;
    background-position: center;

    .headings{
      margin-left: 5%;
      font-size: 2.5rem;
        h1 {
        font-family: 'Basil Regular';
        margin-top: 0%;
        margin-bottom: 0%;
        color: white;
        }
        h3 {
        font-family: 'Basil Regular';
        margin-top: -1%;
        margin-bottom: 0%;
        color: white;
        }
        .first-h1{
            padding-top: 7%;
        }
        .second-h1{
            padding-top: 2.5%;
        }
    }
  }
</style>
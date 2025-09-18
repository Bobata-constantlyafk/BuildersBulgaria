<template>
  <div class="homeMain">
    <div class="headings">
        <h1 class="first-h1">Майсторство</h1>
        <h3>без компромиси</h3>
        <h1 class="second-h1">Усилия </h1>
        <h3>без граници</h3>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .homeMain{
    margin-top: 0%;
    height:80vh;
    background-image: url('/house3.png');
    background-size: cover;
    background-position: center;

    .headings{
      position: absolute;
      top: 40%;
      left: 5%;
      transform: translate(0, -50%);
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

 @media (max-width: 768px) {
  .homeMain {
    height: 40vh;
    background-size: cover;
    display: grid;
    place-items: center;

    .headings {
      position: static;
      transform: none;
      text-align: center;

      h1 {
        font-size: 2.1rem;
      }
      h3 {
        font-size: 1.5rem;
      }
      .second-h1 {
        margin-top: 1.5rem;
      }
    }
  }
}

</style>
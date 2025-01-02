<template>
    <div>
      <header>
        <nav class="nav">
          <ul class="nav-ul">
            <NuxtLink class="link" to="/">НАЧАЛО</NuxtLink>
            <NuxtLink class="link" to="/services">УСЛУГИ</NuxtLink>
            <NuxtLink class="link" to="/contacts">КОНТАКИ</NuxtLink>
            <NuxtLink class="link" to="/projects">ПРОЕКТИ</NuxtLink>
          </ul>
        </nav>
      </header>

      <div>
        <slot/>
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
  .nav {
      display: grid;
      grid-template-columns: 1fr 4fr;
      align-items: center;
      background-color: rgb(0,0,0,0.9);
      margin-bottom: 0rem;
      position:static;
      width: 100%;

        .nav-ul {
          display: grid;
          grid-template-columns: 10rem 10rem 10rem 10rem;
          justify-items: center;
          align-items: center;

        .link {
              color: white;
              text-decoration: none;
              font-size: 1.2rem;
              font-family: 'Basil Regular';
              padding-top: 5px;
              padding-bottom: 5px;
              padding-inline: 20px;
          }
          .link:hover{
              background-color: black;
              color: white;
          }

          .router-link-exact-active {
            font-size: 1.35rem;
            background-color: white;
            color: black;
          }

      }
  }
</style>
<template>
    <div>
      <header>
        <nav class="nav">
          <NuxtLink to="/"><img class="logo" src="/BK-Logo-Centered.png" alt=""></NuxtLink>
          <ul class="nav-ul">
            <NuxtLink class="link" to="/about">ЗА НАС</NuxtLink>
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
  src: url('~/public/Basil-Regular.ttf') format('truetype'),
       url('~/public/Basil-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
  .nav {
      display: grid;
      grid-template-columns: 1fr 4fr;
      align-items: center;
      background-color: transparent;
      margin-bottom: 0rem;
      position: absolute;
      width: 100%;

      .logo{
          display:grid;
          justify-content: start;
          width: 35%;
      }

        .nav-ul {
          display: grid;
          grid-template-columns: 10rem 10rem 10rem 10rem;
          justify-content: end;

        .link {
              color: white;
              text-decoration: none;
              font-size: 1.2rem;
              font-family: 'Basil Regular';
          }
      }
  }
</style>
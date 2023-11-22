<template>
    <div>
      <header>
        <nav className="nav">
          <NuxtLink to="/"><img className="logo" src="/BK-Logo-Centered.png" alt=""></NuxtLink>
          <ul className="nav-ul">
            <NuxtLink className="link" to="/about">ЗА НАС</NuxtLink>
            <NuxtLink className="link" to="/services">УСЛУГИ</NuxtLink>
            <NuxtLink className="link" to="/contacts">КОНТАКИ</NuxtLink>
            <NuxtLink className="link" to="/projects">ПРОЕКТИ</NuxtLink>
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
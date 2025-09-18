<template>
  <div>
    <header>
      <nav class="nav">
        <div class="hamburger" @click="isMenuOpen = !isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="nav-ul" :class="{ open: isMenuOpen }">
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


<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
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
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 1rem;
    cursor: pointer;

    span {
      height: 3px;
      width: 25px;
      background: white;
      border-radius: 2px;
    }
  }

  .nav-ul {
    display: grid;
    grid-template-columns: repeat(4, 10rem);
    justify-items: center;
    align-items: center;

    .link {
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
      font-family: 'Basil Regular';
      padding: 5px 20px;
    }

    .link:hover {
      background-color: black;
      color: white;
    }

    .router-link-exact-active {
      font-size: 1.35rem;
      background-color: white;
      color: black;
    }
  }

  // Mobile styles
  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    body{
      overflow-x: hidden;
    }

    .nav {
    overflow-x: hidden;
  }

    .hamburger {
      display: flex;
    }

    .nav-ul {
      display: none;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.95);
      box-sizing: border-box;
      width: 100%;
      padding: 1rem;

      &.open {
        display: flex;
      }

      .link {
        padding: 1rem;
        font-size: 1.2rem;
      }
    }
  }
  body, html {
  overflow-x: hidden; // ensure nothing creates horizontal scroll
}
}
</style>
<template>
  <Home />
  <About />
  <Gallery />
  <Collabs />
  <Advantages />
  <Services />
  <Contacts />
</template>

<script setup>
import About from './about.vue';
import Home from './home.vue';
import Gallery from './gallery/index.vue';
import Collabs from './collabs.vue';
import Contacts from './contacts.vue';
import Services from './services.vue';
import Advantages from './advantages.vue';

</script>

<style lang="scss">
html, body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
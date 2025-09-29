<template>
  <div class="slider-container">
    <ImageSlider :image-urls="IMAGES" />
  </div>
</template>

<script setup lang="ts">
import ImageSlider from './components/slider.vue';   

import img1 from '~/public/House-modern-hq.png'
import img2 from '~/public/houseTrad.png'
import img3 from '~/public/Italian-house.png'
import img4 from '~/public/Metal construction house.png'


const IMAGES = [img1,img2, img3, img4]
</script>

<style>
.slider-container {
  max-width: 1200px;
  width: 100%;
  /* height: 500px; */
  aspect-ratio: 10 /6;
  margin: 0 auto;
}
</style>

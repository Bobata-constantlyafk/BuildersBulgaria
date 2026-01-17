<template>
  <div class="slider">
    <!-- current image -->
    <div class="image-div">
      <img
            :src="imageUrls[imageIndex]"
            alt="slider image"
            class="img-slider-image"
      />
    </div>
   
    <!-- prev button -->
    <button class="img-slider-button prev" :style="{ left: '0px' }" @click="prev">
      <ArrowLeft />
    </button>

    <!-- next button -->
    <button class="img-slider-button next" :style="{ right: '0px' }" @click="next">
      <ArrowRight />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'

const props = defineProps<{
  imageUrls: string[]
}>()

const imageIndex = ref(0)

const next = () => {
  imageIndex.value = (imageIndex.value + 1) % props.imageUrls.length
}

const prev = () => {
  imageIndex.value =
    (imageIndex.value - 1 + props.imageUrls.length) % props.imageUrls.length
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.image-div{
  width: 100%;
  height: 100%;
  position: relative;
}

.slider {
  width: 100%;
  max-height: 700px;
  position: relative; /* needed for absolutely positioned buttons */
  overflow: hidden;
}

.img-slider-image {
  object-fit: cover;
  width: 100%;
  max-height: 700px;
  display: block;
}

.img-slider-button {
  all: unset;
  display: flex; /* center icons */
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 300ms ease-in-out;
}

.img-slider-button.prev {
  left: 0;
}

.img-slider-button.next {
  right: 0;
}

.img-slider-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.img-slider-button > * {
  stroke: #ffda44; /* sunflower yellow */
  fill: #ffda44;
  width: 2rem;
  height: 2rem;
}
</style>

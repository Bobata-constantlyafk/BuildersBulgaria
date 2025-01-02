<template>
    <div class="galleryPageMain">
      <img :src="imageSrc" alt="kushta">
      <p>{{ text }}</p>
      <p>{{ text }}</p>
      <p>{{ text }}</p>
    </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const imageSrc = ref('');
  const text = ref('');
  
  const route = useRoute();
  
  onMounted(() => {
    // Get the parameter from the route
    const houseType = route.params.name;
    console.log('House Type:', houseType);
    
    // Load the appropriate image and text based on the houseType
    switch (houseType) {
      case 'House-trad':
        imageSrc.value = '/House-trad.png';
        text.value = 'Traditional House Text';
        break;
      case 'House-modern':
        imageSrc.value = '/House-modern.png';
        text.value = 'Modern House Text In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Modern House Text';
        break;
      case 'Italian-house':
        imageSrc.value = '/Italian-house.png';
        text.value = 'Italian House Text';
        break;
      case 'house-example':
        imageSrc.value = '/house-example.jpg';
        text.value = 'Example House Text';
        break;
      default:
        break;
    }
  });
</script>
  
<style lang="scss" scoped>
    .galleryPageMain{
    display: grid;
    grid-template-rows: auto auto; 
    
    img{
      width: 100%;
      height: 80vh;
      object-fit: cover;
    }

    p{
      font-family: 'Basil Regular';
      font-size: 1.5rem;
      margin: 0 auto;
      margin-top: 2vw;
      max-width: 50%;
    }

    }
</style>
  
<template>
  <div class="home">
    <GoogleMap :markers="markers" :center="center" />
  
    <img
      alt="backgrondPhoto"
      src="../assets/roraima.jpg"
      width="700"
      height="400"
    />
    
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue'


export default {
  name: 'Home',
  components: {
    GoogleMap
  },
  data() {
    return {
      center: { lat: 53.551086, lng: 9.993682 },
      markers: [
        {
          id: 'hello',
          position: {
            lat: 51.093048, lng: 6.842120
          },
        },
        {
          id: 'Copenhagen',
          position: {
            lat: 53.551086, lng: 9.993682
          },
        }
      ]
    }
  }
}
</script>
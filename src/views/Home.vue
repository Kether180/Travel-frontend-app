<template>
  <div class="himalayas">
    <img alt="backgrondPhoto" src="../assets/himalayas.jpg">
    <HomeTravel msg=""/>
  </div>
</template>




<script>
// @ is an alias to /src
import HomeTravel from '@/components/HomeTravel.vue'

export default {
  name: 'Home',
  components: {
    HomeTravel
  }
}
</script>

<template>
  <div class="dahsboard">
    
 <!---google maps--->
  <div class="text-center">
    <div class="p-6" id="nav">
      <router-link class="font-bold text-yellow-1000" to="/"
        >Check Our Travel Locations</router-link
      >
      <router-link class="font-bold text-yellow-700" to="/about"></router-link>
    </div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  
    <GoogleMap :markers="markers" :center="center" />
  
 
    <div class="flex h-screen pt-16">
    <SpotPreview />
    <Map />
  </div>
    
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue'
import SpotPreview from "../components/SpotPreview";
import SpotPreviewCard from "../components/SpotPreviewCard";
import Map from "../components/Map";


export default {
  name: 'Dashboard',
  components: {
    GoogleMap,
    SpotPreview,
    SpotPreviewCard,
    Map,
    
  },
  data() {
    return {
      center: { lat: 53.551086, lng: 9.993682 },
      markers: [
        {
          id: '',
          position: {
            lat: 51.093048, lng: 6.842120
          },
        },
        {
          id: '',
          position: {
            lat: 51.093897, lng: 8.842128
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


<!---template>
  <div class="flex h-screen pt-16">
    <SpotPreview />
    <Map />
  </div>
</template>

<script>
import SpotPreview from "../components/SpotPreview";
import Map from "../components/Map";
export default {
  name: "Dashboard",
  components: {
    SpotPreview,
    Map,
  },
};
</script--->


<template>
  <div class="dahsboard">
    <!---google maps--->
    <h1 class=" my-3 text-yellow-1000  my-5 text-3xl b-3">
      Check Our Travel Locations <br>
    </h1>
  </div>

  

  <GoogleMap :markers="markers" :center="center" />

  <div class="flex h-screen pt-16">
    
  </div>
  <div class="flex h-screen pt-16">
   
   </div>
  <div class="flex h-screen pt-16">
   <LocationData class="mb" />
 </div>
 <div class="flex h-screen pt-16">
   <overview-card class="mb" />
 </div>

</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";

import OverviewCard from '../components/OverviewCard.vue';

//import LocationData from './utils/locationData';

export default {
  name: "Dashboard",
  components: {
    GoogleMap,
   
    //LocationData

    OverviewCard  },
  data() {
    return {
      center: { lat: 53.551086, lng: 9.993682 },
      markers: [
        {
          id: "",
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        },
        {
          id: "",
          position: {
            lat: 51.093897,
            lng: 8.842128,
          },
        },
           {
          id: "",
          position: {
            lat: 58.093897,
            lng: 9.842128,
          },
        },
           {
          id: "",
          position: {
            lat: 47.093897,
            lng: 4.842128,
          },
        },
           {
          id: "",
          position: {
            lat: 33.093897,
            lng: 1.842128,
          },
        },
           {
          id: "",
          position: {
            lat: 22.093897,
            lng: 1.842128,
          },
        },
        {
          id: "Copenhagen",
          position: {
            lat: 53.551086,
            lng: 9.993682,
          },
        },
      ],
    };
  },
};
</script>

<template>
  <div class="dahsboard">
    <!---google maps--->
    <h1 class=" my-3 text-yellow-1000  my-5 text-3xl b-3">
      Check Our Travel Locations
      <h1 />
    </h1>
  </div>

  <GoogleMap :markers="markers" :center="center" />
  <router-link to="/destinations">
    <div class="flex h-screen pt-5">
      <div v-for="marker in markers" :key="marker.id">
        <OverviewCard :marker="marker" />
      </div>
    </div>
  </router-link>

  
    <!---POST FETCH DATA --->

    <div class="text-center bg-black p-1">
    

      <Posts  class="mb" />
    </div>
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";
import OverviewCard from "@/components/OverviewCard.vue";
import Posts from "@/components/Posts.vue";

export default {
  name: "Dashboard",
  components: {
    GoogleMap,

    //LocationData

    OverviewCard,
    Posts,
  },
  data() {
    return {
      center: { lat: 53.551086, lng: 9.993682 },
      markers: [
        {
          id: "Machu Picchu",
          image: "/img/machu_picchu.jpg",
          text: "Old Inca Empire",
          position: {
            lat: -13.163333,
            lng: -72.545556,
          },
        },
        {
          id: "Roraima  Venezuela",
          image: "/img/roraima.jpg",
          text: "Mountains of South America",
          position: {
            lat: 5.143333,
            lng: -60.7625,
          },
        },
        {
          id: "Beijing  China",
          image: "/img/beijing2.jpg",
          text: "Temple of Heaven",
          position: {
            lat: 39.8822,
            lng: 116.4066,
          },
        },
        {
          id: "Tibet",
          image: "/img/potala00.jpg",
          text: "Potala Palace",
          position: {
            lat: 29.657778,
            lng: 91.116944,
          },
        },
        {
          id: "Canarias Islands Spain",
          image: "/img/teresitas.jpg",
          text: "Spain",
          position: {
            lat: 28.268611,
            lng: -16.605556,
          },
        },
        {
          id: "Copenhagen",
          image: "/img/copenhagen.jpg",
          text: "Denmark",
          position: {
            lat: 55.676111,
            lng: 12.568333,
          },
        },
      ],
    };
  },
};
</script>

<template>
  <div class="dahsboard">
    <!---google maps--->
    <h1 class=" my-3 text-yellow-1000  text-2xl p">
      Check Our Travel Locations <br>
    </h1>
  </div>

  <GoogleMap :markers="markers" :center="center" />

  <div class="flex h-screen pt-16">
    <SpotPreview />
    <Map />
  </div>
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";

export default {
  name: "Dashboard",
  components: {
    GoogleMap,
  },
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

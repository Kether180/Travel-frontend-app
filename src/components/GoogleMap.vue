<template>
  <div class="about">
    <GMapMap
      :center="center"
      :zoom="4"
      map-type-id="terrain"
      style="width: 98,5vw; height: 450px"
    >
      <GMapMarker
        :key="marker.id"
        v-for="marker in markers"
        :position="marker.position"
      />
    </GMapMap>
  </div>
</template>
<script>
export default {
  name: 'GoogleMap',
  props: {
      markers: Array,
      center: Object,
  },
//   data() {
//     return {
//       center: { lat: 53.551086, lng: 9.993682 },
//     }
//   }
}
</script>
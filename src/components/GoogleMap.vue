<template>
  <div class="about">
    <GMapMap
      :center="center"
      :zoom="2"
      map-type-id="terrain"
      style="width: 65,5vw; height: 400px"
    >
      <GmapCluster>
        <GMapMarker
          v-for="marker in markers"
          :key="marker.id"
          :position="marker.position"
          :clickable="true"
          :draggable="true"
         @click="myFunction()"
        />
      </GmapCluster>
    </GMapMap>
  </div>
</template>
<script>
export default {
  name: "GoogleMap",
  props: {
    markers: Array,
    center: Object,
  },

  methods: {
    myFunction() {
      console.log("myFunction");
      this.$emit("myFunction");
    },
  },
};
</script>

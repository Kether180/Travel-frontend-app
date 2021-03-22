<template>
  <div class="p-10 white transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl cursor-pointer">
    <!--Card 1-->
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white m-3 text-xl px-3 py-4">
      <img   v-bind:src="marker.image" />
    
      <div class="px-6 py-4">
        <div class="font-bold text-s mb-2"> {{marker.id}} </div>
        <div class="text-m mb-2"> {{marker.text}} </div>
        
        <p class="text-gray-700 text-base"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverviewCard",
  components: {},

  props: {
    marker: Object,
  },
};
</script>

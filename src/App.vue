<template>
  <!---Menu--->

  <div class="text-center bg-black">
    <Nav class="mb-6" />
  </div>
  <div class="text-center bg-black text-yellow-1000"></div>

  <!---google maps--->
  <div class="text-center text-yellow-1000">
    <div class="p-6" id="nav"></div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>

  <div class="text-center bg-black p-1"></div>

  <div class="text-center bg-black p-1">
    <!---Footer--->

    <Footer class="mb" />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },

  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Cabin&display=swap");

#app {
  background-color: black;
}
h1 {
  color: yellow;
}
</style>

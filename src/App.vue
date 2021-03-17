<template>
  <div id="app">
    <Nav class="mb-6" />
  </div>

  <!---google maps--->
  <div class="text-center">
    <div class="p-6" id="nav"></div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>

  <div id="app">
    <Footer class="mb-6" />
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

  created() {
    this.$store.dispatch("init");
  },
  computed: {
    initialized() {
      return this.$store.getters.initialized;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Cabin&display=swap");
#app {
  font-family: "Cabin", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-size-adjust: 10;
  background-color: black;
  height: 100%;
  color: #ffef08;
  margin-top: ;
  padding: 0;
}

#menu-bar {
  padding: 50px;
}

#menu-bar a {
  font-weight: bold;
  color: #ffef08;
}

#menu-bar a.router-link-exact-active {
  color: #e20d0d;
}

*,
::before,
::after {
  border-width: 0;
  border-style: solid;
  border-color: theme("borderColor.default", currentColor);
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
</style>

<template>
  <div id="app">
    <Nav class="mb-6" />
    <HomeTravel msg="THE TRAVEL NOMAD GEEK BLOG" class="text-red-center 500 bg-green-500"/>
   
  <h1 class="text-center text-white bg-yellow"> DISCOVER & TRAVEL WITH A MINDFULNESS STATE OF MIND {{ msg }}
  </h1>
  </div>

<div class="text-center">
    <div class="p-6" id="nav">
      <router-link class="font-bold text-yellow-1000" to="/">Check Our Travel Locations</router-link> 
      <router-link class="font-bold text-yellow-700" to="/about" ></router-link
      >
    </div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>


<script>
import Nav from './components/Nav.vue';

export default {
   name: "App",
  components: {
 
    Nav,
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
  background-color: black ;
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

/*#h1 {
  color: #ffef08;
  text-size-adjust: 10;
  text-align: center;
}*/

h2 {
  margin: 40px 0 0;
  color: #3908ff;
  text-size-adjust: 10;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  
}


*,
::before,
::after {
  border-width: 0;
  border-style: solid;
  border-color: theme('borderColor.default', currentColor);
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

</style>



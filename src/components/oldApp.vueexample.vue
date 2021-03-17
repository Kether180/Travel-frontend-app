<!----template>
  
<menu APP vue>

<div v-if="initialized">
      
      <div class="flex items-center space-x-10">
        <router-link to="/contact" class="flex items-center justify-center w-40 border rounded-md h-3/5 border-bridal-300 bg-shark-500 hover:bg-bridal-300 text-bridal-300 hover:text-shark-500"
        >
          <h1 class="font-medium font-montserrat">Contact</h1>
        </router-link>
        <div class="flex items-center justify-center w-40 transform border rounded-md border-bridal-300 h-3/5 hover:bg-shark-500 hover:text-bridal-300 bg-bridal-300 text-shark-500">
          <svg
            class="absolute left-2 hover:fill-current h-4/6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 class="font-medium font-montserrat">New Post</h1>
        </div>
        <div
          class="flex items-center justify-center w-40 transform border rounded-md border-bridal-300 h-3/5 hover:bg-shark-500 hover:text-bridal-300 bg-bridal-300 text-shark-500"
        >
          <svg
            class="absolute left-2 hover:fill-current h-4/6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          <h1 class="font-medium font-montserrat">Login</h1>
        </div>
      </div>
    
    <!-- <router-view />

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  
    

  <div v-else class="flex items-center justify-center min-h-screen transform hover:opacity-30 bg-shark-600 text-bridal-600">
    <div class="flex items-center justify-center border-2 rounded-lg h-14 w-72 border-bridal-600">
      <h1 class="text-2xl animate-pulse"> Let's travel around the world...</h1>
    </div>
  </div>
 
    <!---menu bar2

    <div class="inline-block align-middle p-6"> 
      <router-link to="/">Home </router-link> 
      </div>
       <div class="inline-block align-middle p-6">
      <router-link to="/about">About</router-link> 
       </div>
        <div class="inline-block align-middle p-6"> 
      <router-link to="/blog">Blog</router-link> 
        </div>
         <div class="inline-block align-middle p-6"> 
      <router-link to="/destinations">Destinations</router-link> 
         </div>
      <div class="inline-block align-middle p-6"> 
      <router-link to="/contact">Contact</router-link> 
       </div>
    
    <div class="w-full max-w-xs ">
  <form class="bg-black shadow-md rounded px-1 pt pb mb">
    <div class="mb-1">
      <label class="block text-white-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded py-1 px text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-1">
      <label class="block text-white-700 text-sm font-bold mb" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red- rounded py-1 px text-gray-700 mb leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p class="text-yellow-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-grey-400 hover:bg-white-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline py-1 px font-bold text-sm text-white-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
</div>
   <!---Menu bar3
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





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
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
   <LocationData class="mb" />
  <div class="text-center bg-black p-1">

     <!---Footer--->

    <Footer class="mb" />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import bannerImage from "/public/img/copenhagen.jpg";
//import LocationData from "/utils/locationData";


  //import getPosts from '@/composables/getPosts.js';
  //import bannerImage from '@/assets/banner1.jpg';
  //import Banner from '@/components/Banner.vue';
  //import OverviewCard from '@/components/OverviewCard.vue';
  //import Map from '@/components/Map.vue';
  //import Spinner from '@/components/Spinner.vue';
  // import { getBlogposts, getUsers, to } from '../utils/io.js';

export default {
  name: "App",
  components: {
    Nav,
    Footer,
    //LocationData,
  },
  
  data() {
      return {
        bannerImage,
        bannerText: 'The Travel Blog',
        bannerButtonText: 'About',
        bannerButtonLink: 'about',
      };
    },
    methods: {
      selectBlogpost(blogpost) {
        const link = '/details/' + blogpost._id;
        this.$router.push(link);
      },
    },
 
    // get all blogposts
    //setup() {
      //const { blogposts, error, load } = getPosts();
      //load();
      //return { blogposts, error };
    //}, --
        // load list of blogposts:
    // async mounted() {
    //   console.log('/home mounted');
    //   {
    //     const { data, error } = await to(getBlogposts());
    //     if (!error) {
    //       console.log('data:', data);
    //       this.blogposts = data;
    //       let array = data;
    //       this.$store.dispatch('setAllBlogposts', data);
    //       console.log('👍Got blogposts from Server');
    //     } else {
    //       console.log('🚫Error getting Blogpost-Data from Server');
    //     }
    //   }
    //   {
    //     const { data, error } = await to(getUsers());
    //     if (!error) {
    //       this.users = data;
    //       console.log('👍Got users from Server');
    //     } else {
    //       console.log('🚫Error getting user-Data from Server');
    //     }
    //   }
    // },
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


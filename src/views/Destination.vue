<template>
  <div class="text-white-300">
    <destination-travel
      msg=""/>
  <h1 class="about text-yellow-1000 py text-4xl bg-gray-800">
   TRAVEL LOCATIONS
  </h1>

  <div class="about  text-white text">
    <br />
    A decade ago, I quit my job as a Business Developer in Sales and Marketing
    to visit Asia. <br />
    I thought I would take just a sabbatical year, but I ended up making
    different trips around the world<br />
    adventure. I started Legal Travel Geek Nomads to share photos and stories
    from my years around the globe.<br /><br />

    Instead of returning to America and the job environment, I decided to purse
    a new career in Europe.<br />
    Food, meditation and technology became my obsessions, and the best way I
    could connect to others in a new place<br />
    was by joining groups related to those likes. On Travel Geek Nomads, I share
    the lessons I have learnt in my years of travel.<br />
    As resources for people wanting to try something similar and as my travels
    have evolved, so has this site.<br /><br />

    The Travel Geek Nomad Blog remains as a place to tell share knowledge<br />
    and experiences. <br />I hope you enjoy the ride!<br />
    <br />
  </div>

  <div class="roraima-about inline-block align-middle">
    <img
      alt="backgrondPhoto"
      src="../assets/wao1.jpg"
      width="700"
      height="400"
    />
  </div>
   </div>

</template>

<script>
import DestinationTravel from '../components/DestinationTravel.vue';
export default {
  components: { DestinationTravel },
  name: "Destination",
};

</script>
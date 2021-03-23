<template>
  <div class="text-white-300">
    <reservations-travel msg="" />
    <h1 class="about text-yellow-1000 py text-4xl bg-gray-800">
      RESERVATIONS
    </h1>

    <div class="about  text-white text">
      <br />

      <!-- OUR BOOKING FORM MARKUP -->
      <h1 class="text-yellow-1000">Booking Form</h1>
    </div>

    <div class="text-white">
      <h1 class="text" id="post">Please Enter Your Name</h1>

      <input
        type="text"
        name="guestname"
        id="guestname"
        placeholder="John Doe/Jane Doe"
      />
      <span class="field-icon"><i class="fa fa-user"></i></span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ReservationsTravel from "@/components/ReservationsTravel.vue";

export default {
  name: "Reservations",
  components: {
    ReservationsTravel,
  },
};
</script>

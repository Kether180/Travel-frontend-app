<template>
  <form>
    <div class="text-white-300">
      <reservations-travel msg="" />
      <h1 class="about text-yellow-1000 py text-4xl bg-gray-800">
        RESERVATIONS
      </h1>

      <div class="about  text-white text">
        <br />

        <!-- OUR BOOKING FORM MARKUP -->
        <h1 class="text-yellow-1000"></h1>
      </div>

      <label class="text-black">
        <h1 class="text" id="post">Please Enter Your Name</h1>

        <input
          class="text-center"
          type="text"
          name="guestname"
          id="guestname"
          placeholder="John Doe/Jane Doe"
        />
      </label>

      <label class="text-black field-label">
        <h1 class="text" id="post">Email</h1>

        <input
          class="text-center"
          type="text"
          name="email"
          id="email"
          placeholder="peter@mail.com"
        />
      </label>

      <label class="text-black field-label">
        <h1 class="text" id="guesttelephone">Mobile Number</h1>

        <input
          class="text-center"
          type="text"
          name="mobile"
          id="mobile"
          placeholder="Telephone / Moble Number"
        />
      </label>

      <label class="text-black field-label">
        <h1 class="number" id="travelers-adults">Number of Adults</h1>

        <input
          class="text-center"
          type="number"
          name="travelers-adults"
          id="travelers-adults"
          placeholder=""
        />
      </label>

      <label class="text-black field-label">
        <h1 class="number" id="travelers-children">Number of Children</h1>

        <input
          class="text-center"
          type="number"
          name="travelers-children"
          id="travelers-children"
          placeholder=""
        />
      </label>
      <label class="text-black field-label">
        <h1 class="text" id="guesttelephone">Check in</h1>

        <input
          class="text-center"
          type="text"
          name="mobile"
          id="mobile"
          placeholder="mm/dd/yyyy"
        />
      </label>
      <label class="text-black field-label">
        <h1 class="text" id="guesttelephone">Check out</h1>

        <input
          class="text-center"
          type="text"
          name="mobile"
          id="mobile"
          placeholder="mm/dd/yyyy"
        />
      </label>
    </div>
    <label class="switch text-white my-2">
      <input
        class="my-2"
        type="checkbox"
        name="switch2"
        id="switch2"
        value="switch2"
      />
      <span class="switch-label" data-on="YES" data-off="NO"></span>
      <span>Do you need us to pick you up? </span>
    </label>

    <div class="section">
      <label for="comment" class="field-label"></label>
      <label for="comment">
        <textarea
          class="gui-textarea"
          id="comment"
          name="comment"
          placeholder="Let us know about any special accommodation need"
        >
        </textarea>
        <div class="input-hint text-white">
          <strong>Please:</strong> Be as descriptive as possible
        </div>
      </label>
    </div>
    <!---button confirmation-->

    <div>
      
        <button 
          class="my-5 hover:bg-white-700  py-1 px-6 hover:text-blue-800 bg-gray-800 text-white font text-s rounded focus:outline-none focus:shadow-outline"
          type="submit"
          v-on:click="showAlert"> Confirm </button>
    </div>
  </form>

  <div class="roraima-about inline-block align-middle">
    <img
      alt="backgrondPhoto"
      src="../assets/wao1.jpg"
      width="700"
      height="400"
    />
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

  methods: {
    data() {
      return {
        msg: "",
      };
    },
    showAlert: () => {
      alert("Thank you! we will get in touch with you as soon as possible :)!");
    },
  },
};
</script>

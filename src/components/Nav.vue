<template>
  <nav class="flex items-center bg-black-500 p-3 text-white">
    <div class="flex items-center">
      <img
        alt="Logo7"
        src="../assets/nomadlogo.png"
        width="100"
        height="100 "
      />
      <div>
        <h1 class="text-center m-6 text-white bg-yellow text-2xl">
          THE TRAVEL GEEK NOMAD BLOG {{ msg }}
        </h1>
        <div></div>
      </div>
      <div class="inline-block align-middle p-5">
        <router-link to="/">Home </router-link>
      </div>
      <div class="inline-block align-middle p-5">
        <router-link to="/about">About</router-link>
      </div>
      <div class="inline-block align-middle p-5">
        <router-link to="/destinations">Locations</router-link>
      </div>
       <div class="inline-block align-middle p-5">
        <router-link to="/reservations/">Reservation</router-link>
      </div>
       </div>
      <div class="inline-block align-middle p-5">
        <router-link to="/blog">Blog</router-link>
      </div>
      <div class="inline-block align-middle p-6">
        <router-link to="/contact">Contact</router-link>
      </div>
    

    <div class="w-full max-w-xs ">
      <form class="bg-black shadow-md rounded px-6">
        <div class="mb">
          <label
            class="block text-white-700 text-sm font-bold "
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-1">
          <label
            class="block text-white-700 text-sm font-bold mb"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red- rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p class="text-yellow-500 text-xs italic">
           
          </p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="my-3 hover:bg-white-700 hover:text-blue-800 bg-gray-800 text-white font bg-yellow-350 py px-1  text-s rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Log in
          </button>
          <a
            class="inline-block align-baseline py-1 px font-bold text-sm text-white-500 hover:text-blue-800 "
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </nav>

  <h1 class="text-center text-white text-3xl ">
    DISCOVER & TRAVEL WITH A MINDFULNESS STATE OF MIND {{ msg }}
  </h1>
</template>

<script>
export default {
  name: "Nav",
};
</script>

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
        <h1 class="text-center m-6 text-white bg-yellow">
          THE TRAVEL GEEK NOMAD BLOG {{ msg }}
        </h1>
        <div></div>
      </div>
      <div class="inline-block align-middle p-6">
        <router-link to="/">Home </router-link>
      </div>
      <div class="inline-block align-middle p-6">
        <router-link to="/details/:spotId"> details SpotID </router-link>
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
    </div>

    <div class="w-full max-w-xs ">
      <form class="bg-black shadow-md rounded px-1 pt pb mb">
        <div class="mb-1">
          <label
            class="block text-white-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded py-1 px text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            class="shadow appearance-none border border-red- rounded py-1 px text-gray-700 mb leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p class="text-yellow-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-grey-400 hover:bg-white-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline py-1 px font-bold text-sm text-white-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </nav>

  <h1 class="text-center text-white bg-yellow">
    DISCOVER & TRAVEL WITH A MINDFULNESS STATE OF MIND {{ msg }}
  </h1>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<template>
  <div class="flex h-screen pt-1">
    <!-- Left area -->
    <div
      class="flex flex-row w-4/6 px-10 pt-20 pb 2xl:pt-10 2xl:px-10 bg-bridal-300"
    >
      <div>
        <div
          @click="$router.go(-1)"
          class="flex items-center justify-center w-35 h-5 transform border rounded-md cursor-pointer border-shark-500 hover:bg-bridal-200 hover:text-shark-500 bg-shark-500 text-bridal-300"
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
              d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
            ></path>
          </svg>

          <h1 class="font-montserrat">Go back</h1>
        </div>
      </div>
      <div
        class="flex flex-col justify-between h-full py-2 2xl:py-12 font-merriweather text-shark-500"
      >
        <div>
          <div class="py-5 text-5xl">Contact</div>

          <div class="py-2 2xl:py-2 2xl:text-lg text-gray-300">
            <p>
              This Project was Made for The last Project of the Full-Stack
              Developement Program <br />
              <a target="_blank" href="https://hamburgcodingschool.com/">
                at Hamburg Coding School.</a
              >
            </p>
          </div>
          <div class="py-2 text-sm 2xl:py-5 2xl:text-base text-gray">
            <ul class="space-y-1 2xl:space-y-2 text-gray-300">
              <li>
                This project was built with <b>Vue 3</b> and
                <b> Vuex for State & Store Management</b>
              </li>

              <!---reservation-->

              <form class="w-full max-w-2xl px-4 space-y-6 rounded inputs">
                <fieldset :disabled="reservation === null">
                  <div class="mb-3 text-xl font-bold text-yellow">
                    Travel Booking
                  </div>

                  <div class="flex space-x-4">
                    <div class="w-1/2">
                      <label class="text-gray-600" for="name">Full name</label>
                      <input
                        class="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-teal-400"
                        type="text"
                        name="title"
                        id="title"
                      />
                    </div>
                    <div class="w-1/2">
                      <label class="text-yellow-1000" for="season"
                        >Travel Location</label
                      >
                      <input
                        class="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-teal-400"
                        type="text"
                        name="season"
                        id="season"
                      />
                    </div>
                  </div>
                  <div class="flex mt-3 space-x-4">
                    <div class="w-1/2">
                      <label class="text-gray-600" for="episode">Season</label>
                      <input
                        class="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-teal-400"
                        type="text"
                        name="episode"
                        id="episode"
                      />
                    </div>
                    <div class="w-1/2">
                      <label class="text-gray-600" for="air_date">Date</label>
                      <input
                        class="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-teal-400"
                        type="text"
                        name="air_date"
                        id="air_date"
                      />
                    </div>
                  </div>
                  <div class="flex mt-3 space-x-">
                    <label
                      >Send Reservation
                      <input class="mx-3" type="checkbox" />
                      <div class="items-center text-center">The Details</div>
                    </label>
                  </div>
                </fieldset>
              </form>

              <!---reservation-->

              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Right area -->
    <div class="w-2/6 p-4">
      <div class="flex justify-center h-full rounded-sm bg-shark-500 text-white">
        <div class="w-3/5 mt-16">
          <img
            class="rounded-full"
            src="../assets/tibet1.jpg"
            alt="Image of Alex"
          />

          <div class="py-1 1xl:py-2 2xl:text-lg b-2 text-yellow">
            <p>Full-Stack Developer</p>
          </div>
          <div class="py-2 2xl:py-2 2xl:text-lg text-white-400">
            Alexander Garcia <br />
            
            <svg
              class="w-5 right h-5 inline-block align-middle mr-3 2xl:w-5 2xl:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p>
              <a
                target="_blank"
                href="mailto:conscientia.digitaltech@gmail.com"
              >
                conscientia.digitaltech@gmail.com</a
              >
            </p>
            <a
              target="_blank"
              href="https://github.com/Kether180/Travel-frontend-app"
              >Github</a
            >
            <br />
            <li>Vannagardsgatøn 58</li>
            <li>21236 Malmø, Sweden</li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>
© 2021 GitHub, Inc. Terms Privacy Security Status Docs Contact GitHub Pricing
API Training Blog About

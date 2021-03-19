import { createStore } from "vuex";
//import { getLocationData } from "../utils/locationData"; // Static spot data

export default createStore({
  state: {
    mapCenter: {},
  },

  getters: {
    mapCenter: (state) => state.mapCenter,
  },

  mutations: {
    initMapCenter: (state, data) => {
      state.mapCenter = data;
    },
  },

  actions: {
    
      },

  modules: {},
});

//IO Handling

//const url = "http://localhost:3000/";

//export function locationData() {
  //return fetch(url + "locations");
//}

//function to(promise) {
  //return promise
    //.then((response) => response.json())
    //.then((data) => ({ data, error: null }))
   // .catch((error) => ({ data: null, error }));
//}

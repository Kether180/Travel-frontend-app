import { createStore } from 'vuex';
import { getLocationData } from '../utils/locationData'; // Static spot data

export default createStore({
	state: {
		initialized: false,
		spotList: [],
		selectedSpotId: 0,
		latestPost: {},
		detailSpot: {},
		mapCenter: {}
	},

	getters: {
		initialized: state => state.initialized,
		spotList: state => state.spotList,
		selectedSpotId: state => state.selectedSpotId,
		latestPost: state => state.latestPostId,
		detailSpot: state => state.detailSpot,
		mapCenter: state => state.mapCenter
	},

	mutations: {
		initialized: (state, data) => {
			state.initialized = data;
		},

		initSpotList: (state, data) => {
			state.spotList = data;
		},

		setSelectedSpotId: (state, data) => {
			state.selectedSpotId = data;
		},

		setlatestPost: (state, data) => {
			state.latestPost = data;
		},

		setDetailSpot: (state, data) => {
			state.detailSpot = data;
		},

		initMapCenter: (state, data) => {
			state.mapCenter = data;
		}
	},

	actions: {
		async init({ state, commit }) {
			// Check if App already has been initialized
			if (state.initialized) {
				return;
			}

			{
				// Get spot data
				// const data = getLocationData(); // Static spot data
				const { data, error } = await to(getLocationData());
				if (error) {
					return;
				}
				console.log('Spot data fetched');

				// Sort data ascending by date
				data.data.sort((a, b) => {
					return b.date.seconds - a.date.seconds;
				});
				commit('initSpotList', data.data);

				// Set latestPost to latest post
				const latestPost = data.data[0];
				console.log(`ID of latest post is ${latestPost.id} ✨`);
				commit('setlatestPost', latestPost);

				// Make latest post pre-selected
				commit('setSelectedSpotId', latestPost.id);

				// Init map center by latest post
				const center = latestPost.location.coordinates;
				commit('initMapCenter', center);
			}

			// App data is ready for use
			commit('initialized', true);
			console.log('App initialized ⚙️');
		}
	},
	modules: {}
});

//*  IO Handling 

const url = 'https://nomad-travel-geek.herokuapp.com/';

export function locationData() {
return fetch(url + 'locations');
}

function to(promise) {
	return promise
	.then(response => response.json())
	.then(data => ({ data, error: null }))
	.catch(error => ({ data: null, error }));
 }   
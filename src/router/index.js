import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import SpotDetails from '../views/SpotDetails.vue';
import ContactPage from '../views/ContactPage.vue';
import AboutTravel from '../views/About.vue';
import BlogTravel from '../views/Blog.vue';
import DestinationTravel from '../views/Destination.vue';


const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard
	},
	{
		path: '/about',
		name: 'About',
		component: AboutTravel
	},
	{
		path: '/blog',
		name: 'Blog',
		component: BlogTravel
	},
	{
		path: '/destinations',
		name: 'Destination',
		component: DestinationTravel
	},

	{
		path: '/details/:spotId',
		name: 'SpotDetails',
		component: SpotDetails,
		props: true
	},
	{
		path: '/contact',
		name: 'ContactPage',
		component: ContactPage
	},
	
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
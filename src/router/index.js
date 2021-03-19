import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import ContactPage from '../views/ContactPage.vue';
import AboutTravel from '../views/About.vue';
import BlogTravel from '../views/Blog.vue';
import DestinationTravel from '../views/Destination.vue';
import ReservationsTravel from '../views/Reservations.vue';


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
		path: '/reservations',
		name: 'Reservations',
		component: ReservationsTravel
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
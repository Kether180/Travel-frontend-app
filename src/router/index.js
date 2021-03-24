import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import ContactPage from '../views/ContactPage.vue';
import AboutTravel from '../views/About.vue';
import DestinationTravel from '../views/Destination.vue';
import ReservationsTravel from '../views/Reservations.vue';
import LoggedUserHome  from '../views/LoggedUser.vue';
import ForgotPassword  from '../views/ForgotPasswordview.vue';
 

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
		path: '/home-logged',
		name: 'Home-logged',
		component: LoggedUserHome
	},
	{
		path: '/forgot-password',
		name: 'forgot-password',
		component: ForgotPassword
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
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Destination from "../views/destination/Destination.vue";
import Crew from "../views/crew/Crew.vue";
import Technology from "../views/technology/Technology.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: Home,
		},
		{
			path: "/destination",
			component: Destination,
		},
		{
			path: "/crew",
			component: Crew,
		},
		{
			path: "/technology",
			component: Technology,
		},
	],
});

export default router;

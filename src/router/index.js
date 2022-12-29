import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Destination from '../views/Destination.vue'
import Crew from '../views/Crew.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/destination',
            component: Destination
        },
        {
            path: '/crew',
            component: Crew
        },
        {
            path: '/technology',
            component: () => import('../views/Technology.vue')
        }
    ]
})

export default router;
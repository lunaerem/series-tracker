import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Games from '../components/Games.vue'

import NotFound from '../error/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/games', component: Games },
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
    ],
})

export default router

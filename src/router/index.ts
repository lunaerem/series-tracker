import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Games from '../components/Games.vue'
import TestGame from '../components/games/TestGame.vue'
import TestGame2 from '../components/games/TestGame2.vue'

import NotFound from '../error/NotFound.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
	{ path: '/', alias: '/home', component: Home },
	{ path: '/about', component: About },
	{ path: '/games', component: Games },
	{ path: '/games/game1', component: TestGame },
	{ path: '/games/game2', component: TestGame2 },
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
    ],
    scrollBehavior(to, from, savedPosition) {
	return { top: 0 }
    },
})

export default router

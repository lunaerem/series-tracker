import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Games from '../components/Games.vue'
import CompletionTemplate from '../components/games/CompletionTemplate.vue'
import TimelineTemplate from '../components/games/TimelineTemplate.vue'

import NotFound from '../error/NotFound.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
	{ path: '/', alias: '/home', component: Home },
	{ path: '/about', component: About },
	{ path: '/games', component: Games },
	{ path: '/games/game1', component: CompletionTemplate },
	{ path: '/games/game2', component: TimelineTemplate },
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
    ],
    scrollBehavior(to, from, savedPosition) {
	if (to.hash) {
	    return {
		el: to.hash,
		top: 10,
		behavior: 'smooth',
	    }
	} else if (savedPosition) {
	    return savedPosition;
	} else if (from) {}

	return { top: 0 }
    },
})

export default router

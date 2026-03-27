<script setup lang="ts">
import { inject } from 'vue';

const toggleModal = inject('toggle');
</script>

<template>
    <div id="games-splash" class="splash-img">
	<h1>Games List</h1>
    </div>
    <section>
	<div class="set-ratio">
	    <h2>Brief description</h2>
	    <p>Placeholder</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">
	    <h2>Completion Guides/Documents</h2>
	    <p>Placeholder</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">
	    <h2>Game Series Timelines</h2>
	    <p>Placeholder</p>
	</div>
    </section>
    <div>
	This is just testing stuff, delete later
	<ul>
	    <li>
		<RouterLink to="/games/game1">Game 1</RouterLink>
	    </li>
	    <li>
		<RouterLink to="/games/game2">Game 2</RouterLink>
	    </li>
	</ul>
	<button @click="toggleModal('Games')">Popup Test</button>
    </div>	
</template>

<style scoped>
#games-splash {
    background-image: url("../assets/vue.svg");
}
</style>

<script setup lang="ts">
import { inject } from 'vue';

const toggleModal = inject('toggle');
</script>

<template>
    <div>
	<h1>Games - Splash Header</h1>
	<p>Placeholder</p>
    </div>
    <section>
	<h2>Brief description</h2>
	<p>Placeholder</p>
    </section>
    <section>
	<h2>Completion Guides/Documents</h2>
	<p>Placeholder</p>
    </section>
    <section>
	<h2>Game Series Timelines</h2>
	<p>Placeholder</p>
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

</style>

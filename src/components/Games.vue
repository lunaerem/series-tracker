<script setup lang="ts">
import { inject } from 'vue';

const toggleModal = inject('toggle');
</script>

<template>
    <div>
	Games - Splash Header
    </div>
    <section>
	Brief description
    </section>
    <section>
	Game listing
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

<script setup lang="ts">
import { inject, onMounted } from 'vue';

const toggleModal = inject('toggle');
const splash = inject('splash');

onMounted(() => {
    splash.value = document.querySelector('.splash-img');
})
</script>

<template>
    <div id="completion-splash" class="splash-img">
	<h1>Completion Template</h1>
    </div>
    <section>
	<div class="set-ratio">
	    <h2>Description</h2>
	    <p>Placeholder</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">
	    <h2>Completion Documents</h2>
	    <p>Placeholder</p>
	</div>
    </section>
    <div>
	Just here for testing purposes, remove later.
	<button @click="toggleModal('Game1')">Popup Test</button>
    </div>
</template>

<style scoped>
#completion-splash {
    background-image: url("../../assets/vue.svg");
}
</style>

<script setup lang="ts">
import { inject, onMounted } from 'vue';

const splash = inject('splash');

onMounted(() => {
    splash.value = document.querySelector('.splash-img');
})
</script>

<template>
    <div id="home-splash" class="splash-img">
	<h1>Series Tracker (Name Pending)</h1>
    </div>
    <section style="background: purple">
	<div class="set-ratio">
	    <h2>Quick About</h2>
	    <p>Placeholder</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">
	    <h2>Section about reaching out for errors, etc.</h2>
	    <p>Placeholder</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">	
	    <h2>Disclaimers</h2>
	    <p>Placeholder</p>
	</div>
    </section>
</template>

<style scoped>
#home-splash {
    background-image: url("../assets/vue.svg");
}
</style>

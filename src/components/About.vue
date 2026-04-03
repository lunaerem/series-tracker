<script setup lang="ts">
import { inject, onMounted } from 'vue';

const splash = inject('splash');

onMounted(() => {
    splash.value = document.querySelector('.splash-img');
})
</script>

<template>
    <div id="about-splash" class="splash-img">
	<h1>About</h1>
    </div>
    <section>
	<div class="set-ratio">
	    <h2>Description about the website</h2>
	    <p>Placeholder</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">
	    <h2>Disclaimers</h2>
	    <p>Placeholder</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">
	    <h2>Attributions</h2>
	    <p>Placeholder</p>
	</div>
    </section>
</template>

<style scoped>
#about-splash {
    background-image: url("../assets/vue.svg");
}
</style>

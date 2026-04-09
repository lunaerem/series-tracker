<script setup lang="ts">
import { inject, onMounted } from 'vue';

const splash = inject('splash') as any;

onMounted(() => {
    splash.value = document.querySelector('.splash-img');
})
</script>

<template>
    <div id="auto-splash" class="splash-img">
	<h1>NieR Automata <br />
	Spoiler-Sensitive Guide for 100% Completion</h1>
    </div>
    <section>
	<div class="set-ratio">
	    <h2>Platforms</h2>
	    <p>Chips (Probably change this from a full section to something more condensed)</p>
	    <p>Developer: </p>
	    <p>Publisher: </p>
	</div>
    </section>
</template>

<style scoped>
#auto-splash {
    background-image: url("../../assets/splash/na.svg");
}
</style>

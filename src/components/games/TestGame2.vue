<script setup lang="ts">
import { inject } from 'vue';

const toggleModal = inject('toggle');
</script>

<template>
    <div>
	<h1>Test Game #2 - Splash</h1>
    </div>
    <section>
	<h2>Placeholder</h2>
	<p>Placeholder</p>
    </section>
    <div>
	<button @click="toggleModal('Game2')">Popup Test</button>
    </div>
</template>

<style scoped>

</style>

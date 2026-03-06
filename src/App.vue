<script setup lang="ts">
import Home from './components/Home.vue'
</script>

<template>
    <nav>
	<RouterLink to="/">Go to Home</RouterLink>
	<RouterLink to="/about">Go to About</RouterLink>
	<RouterLink to="/games">Go to Games</RouterLink>
    </nav>
    <main>
	<RouterView />
    </main>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { inject } from 'vue';

const toggleModal = inject('toggle');
</script>

<template>
    <div>
	<div>
	    Test Game #1
	</div>
	<div>
	    <button @click="toggleModal('Game1')">Popup Test</button>
	</div>
    </div>
</template>

<style scoped>

</style>

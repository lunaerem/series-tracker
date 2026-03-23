<script setup lang="ts">
import { inject } from 'vue';

const toggleModal = inject('toggle');
</script>

<template>
    <div>
	Test Game #1
    </div>
    <div>
	<button @click="toggleModal('Game1')">Popup Test</button>
    </div>
</template>

<style scoped>

</style>

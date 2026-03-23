<script setup lang="ts">
import { inject } from 'vue';

const toggleModal = inject('toggle');
</script>

<template>
    <div>
	Test Game #2
    </div>
    <div>
	<button @click="toggleModal('Game2')">Popup Test</button>
    </div>
</template>

<style scoped>

</style>

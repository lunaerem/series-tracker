<script setup lang="ts">
import { inject, onMounted, ref } from "vue";

const toggleModal = inject("toggle") as any;
const splash = inject("splash") as any;

const gameIndex = ref(0);
const loading = ref(true);

let games = null;

function moveRight() {
  gameIndex.value = (gameIndex.value + 1) % games.length;
}

function moveLeft() {
  gameIndex.value = (gameIndex.value - 1 + games.length) % games.length;
}

onMounted(() => {
  splash.value = document.querySelector(".splash-img");

  fetch("./data/kh.json")
    .then((response) => response.json())
    .then((data) => {
      games = data.games;
      loading.value = false;
    })
    .catch(console.error);
});
</script>

<template>
  <div id="timeline-splash" class="splash-img">
    <h1>
      Kingdom Hearts <br />
      Series Timeline
    </h1>
  </div>
  <section>
    <div class="set-ratio">
      <h2>Description</h2>
      <p>Placeholder</p>
    </div>
  </section>
  <section>
    <div class="set-ratio">
      <h2>Timeline</h2>
      <div class="timeline-wrapper">
        <button @click="moveLeft()">Left</button>
        <div class="timeline-inner">
          <span class="loader" v-if="loading" />
          <div :key="gameIndex" v-if="!loading">
            <div class="timeline-entry">
              <img :src="games[gameIndex].image" :alt="games[gameIndex].alt" />
              <h3>
                {{ games[gameIndex].title }}
              </h3>
              <button @click="toggleModal(games[gameIndex])">More Info</button>
            </div>
          </div>
        </div>
        <button @click="moveRight()">Right</button>
      </div>
      <div class="pagination-dots" v-if="!loading">
        <span
          v-for="(game, index) in games"
          :key="index"
          :class="{ active: index === gameIndex }"
          @click="gameIndex = index"
          >#{{ index + 1 }}</span
        >
      </div>
    </div>
  </section>
  <div>
    Just here for testing purposes, remove later.
    <button @click="toggleModal('Game2')">Popup Test</button>
    <button @click="console.log(games)">Print Test</button>
  </div>
</template>

<style scoped>
#timeline-splash {
  background-image: url("../../assets/splash/kh.svg");
}
</style>

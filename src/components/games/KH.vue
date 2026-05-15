<script setup lang="ts">
import { inject, onMounted } from "vue";
import { loadJSON, moveLeft, moveRight } from "../../timeline.ts";

const toggleModal = inject("toggle") as any;
const splash = inject("splash") as any;

onMounted(() => {
  splash.value = document.querySelector(".splash-img");

  const timeline = document.querySelector(".timeline-inner");
  loadJSON(timeline, "./data/kh.json");
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
          <!--
          <div class="timeline-entry">
            <p>#1</p>
          </div>
          <div class="timeline-entry" style="left: 50%">
            <p>#2</p>
          </div>
          <div class="timeline-entry" style="right: 0">
            <p>#3</p>
          </div>
	    -->
        </div>
        <button @click="moveRight()">Right</button>
      </div>
    </div>
  </section>
  <div>
    Just here for testing purposes, remove later.
    <button @click="toggleModal('Game2')">Popup Test</button>
  </div>
</template>

<style scoped>
#timeline-splash {
  background-image: url("../../assets/splash/kh.svg");
}
</style>

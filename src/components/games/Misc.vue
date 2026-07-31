<script setup lang="ts">
import { inject, onMounted, ref, computed } from "vue";
import { removeSpoiler, revealAllSpoilers } from "../../spoilers.ts";

const splash = inject("splash") as any;

const loading = ref(true);
const pageNum = ref(1);
const itemsPerPage = ref(10);
const games = ref(null);
const searchQuery = ref("");
let selectorElement = null;
let searchElement = null;

const searchGames = computed(() => {
  return games.value.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});

const paginatedGames = computed(() => {
  const start = (pageNum.value - 1) * itemsPerPage.value;
  return searchGames.value.slice(start, start + itemsPerPage.value);
});

onMounted(() => {
  splash.value = document.querySelector(".splash-img");
  selectorElement = document.getElementById("sel");
  searchElement = document.getElementById("searchBox");

  selectorElement.addEventListener("change", (event) => {
    itemsPerPage.value = parseInt(event.target.value, 10);
    pageNum.value = 1;
  });

  searchElement.addEventListener("input", (event) => {
    searchQuery.value = event.target.value;
    pageNum.value = 1;
  });

  fetch("./data/misc.json")
    .then((response) => response.json())
    .then((data) => {
      games.value = data.games;
      games.value.sort((a, b) => a.title.localeCompare(b.title));
      loading.value = false;
    })
    .catch(console.error);
});

function right() {
  if (
    Math.ceil(searchGames.value.length / itemsPerPage.value) != pageNum.value
  ) {
    pageNum.value++;
  }
}

function left() {
  if (pageNum.value != 1) {
    pageNum.value--;
  }
}
</script>

<template>
  <div id="auto-splash" class="splash-img">
    <h1>Games that have Little to No Missables</h1>
  </div>
  <section style="padding-bottom: 0">
    <div class="set-ratio">
      <h2>About</h2>
      <p>
        This page contains a list of various games that either do not have
        anything that is permanently missable in them, or have rather few things
        to note, so they do not justify having a whole page dedicated to them.
        Furthermore, there are games on this list where playing them multiple
        times is a requirement for 100% completion or are short enough to
        justify not listing anyting that is missable. Also note that just
        because a game does not appear on this list does not mean that it either
        has missables or no missables. I likely have just not played the game or
        have any experience with it.
      </p>
    </div>
  </section>
  <section>
    <div class="set-ratio">
      <h2>List of Games</h2>
      <div>
        <input value="" type="search" placeholder="Search" id="searchBox" />
        <p style="display: inline">Number of Games to Display:</p>
        <select required id="sel">
          <option value="10" selected>10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <span class="loader" v-if="loading" />
      <ol v-if="!loading">
        <li v-for="game in paginatedGames">
          <details v-if="game.desc">
            <summary>{{ game.title }}</summary>
            <p>{{ game.desc }}</p>
          </details>
          <p v-else>{{ game.title }}</p>
        </li>
      </ol>
      <div v-if="!loading">
        <button @click="left()">Left</button>
        <p style="display: inline">
          Page Number {{ pageNum }} of
          {{ Math.ceil(searchGames.length / itemsPerPage) }}
        </p>
        <button @click="right()">Right</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
#auto-splash {
  background-image: url("../../assets/splash/main.svg");
}

details {
  all: revert;
}

summary {
  all: revert;
}

ul {
  /*list-style-type: none;*/

  p {
    margin: 0;
  }
}
</style>

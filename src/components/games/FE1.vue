<script setup lang="ts">
import { inject, onMounted } from "vue";

const splash = inject("splash") as any;

onMounted(() => {
  splash.value = document.querySelector(".splash-img");
});

function removeSpoiler(event: any) {
  event.currentTarget.classList.remove("spoiler");
}
</script>

<template>
  <div id="auto-splash" class="splash-img">
    <h1>
      Fire Emblem Shadow Dragon and the Blade of Light <br />
      Spoiler-Sensitive Guide for 100% Completion
    </h1>
  </div>
  <section style="padding-bottom: 0">
    <div class="set-ratio">
      <h2>Platforms</h2>
      <div class="chip-container">
        <div class="chip ns">Nintendo Switch (Delisted)</div>
        <div class="chip fc">Famicom (Japanese Exclusive)</div>
      </div>
      <p><u>Developer(s):</u> Intelligent Systems, Nintendo R&D1</p>
      <p><u>Publisher:</u> Nintendo</p>
    </div>
  </section>
  <section>
    <div class="set-ratio">
      <h2>General Tips</h2>
      <ul>
        <li>Placeholder</li>
      </ul>
    </div>
  </section>
  <section>
    <div class="set-ratio">
      <h2>Recruitment Guide</h2>
      <p>
        In Fire Emblem Shadow Dragon and the Blade of Light, recruitable units
        are the only permanently missable unique thing. Units must be recruited
        in the chapter that they appear. If the recruitable unit is killed or
        the map is finished before they are acquired, the character is
        permanently lost.
      </p>
      <p>
        Like most Fire Emblem games, the majority of the adventure's playable
        units will be obtained during a map through various methods. Some
        characters are given at the start of a map automatically, others are
        only obtained by visiting certain villages with Marth, and there are
        some units that can only be recruited by talking to them as an enemy.
        The latter are a bit more complicated in Shadow Dragon and the Blade of
        Light. Sometimes an enemy unit can be recruited by moving a specific
        character next to them and selecting the "Talk" option, while other
        times you must wait for them to come to you and have them initiate the
        conversation.
      </p>
      <div class="table-wrapper" style="padding: 1rem">
        <table class="long-t">
          <caption>
            <u>Recruitment Table</u>
            <p>
              Character names and recruitment conditions are spoiler-tagged.
              Click on them or the button below to reveal their information at
              your discretion.
            </p>
            <button>Reveal all Spoiler-tagged Entries</button>
          </caption>
          <thead>
            <tr>
              <th scope="col">Chapter #</th>
              <th scope="col">Character Name</th>
              <th scope="col">Recruitment Conditions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
#auto-splash {
  background-image: url("../../assets/splash/na.svg");
}

ul > img {
  max-height: 40rem;
}
</style>

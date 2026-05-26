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
        <li>
          Only Marth can visit villages (The multi-tile buildings with the walls
          in front), but anyone can visit the smaller buildings. Try to visit as
          many villages and buildings as possible because they give good rewards
          and drop hints toward game mechanics, stories, and secrets
        </li>
        <li>
          Save Warp staves until you truly need them, as they are rather limited
          in the game
        </li>
        <li>
          Promote units as soon as possible because promotion raises stats to
          the class's base values
        </li>
        <li>
          Keep Caeda alive through the entire game if you want the best ending
        </li>
        <li>
          Arenas are infinite in this game, so they are an easy source of
          farming
        </li>
        <li>
          Thieves who steal items from chests do not drop the items when
          defeated, unlike later entries in the series. Either block the chests
          with units or get to them before the thieves to get full rewards (Warp
          staves are especially useful for these circumstances)
        </li>
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
              <td>1</td>
              <td>Marth</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Caeda</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Jagen</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Cain</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Abel</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Draug</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Gordon</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Wrys</td>
              <td>Visit the western village with Marth</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ogma</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Barst</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bord</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Cord</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Castor</td>
              <td>Enemy, talk with Caeda</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Darros</td>
              <td>Enemy, talk with Marth</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Julian</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Lena</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Navarre</td>
              <td>Enemy, talk with Caeda</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Merric</td>
              <td>Visit the northern village with Marth</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Matthis</td>
              <td>Enemy, talk with Lena</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Hardin</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Wolf</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Sedgar</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Roshea</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Vyland</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Wendell</td>
              <td>Enemy, talk with Marth or Merric</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Rickard</td>
              <td>Enemy, talk with Marth or Julian</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Bantu</td>
              <td>Visit the village with Marth</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Caesar</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Radd</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Roger</td>
              <td>Enemy, talk with Caeda</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Jeorge</td>
              <td>Visit the village with Marth</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Maria</td>
              <td>Enemy, talk with Marth</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Minerva</td>
              <td>Enemy, talk with Marth, Maria must be recruited already</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Linde</td>
              <td>Visit the village with Marth</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Jake</td>
              <td>Enemy, talk with Caeda</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Midia</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Dolph</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Macellan</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Tomas</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Boah</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Beck</td>
              <td>Visit the village with Marth</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Astram</td>
              <td>Enemy, talk with Midia</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Palla</td>
              <td>Enemy, talk with Marth</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Catria</td>
              <td>Enemy, talk with Marth</td>
            </tr>
            <tr>
              <td>16</td>
              <td>Arran</td>
              <td>Visit the village with Marth*</td>
            </tr>
            <tr>
              <td>16</td>
              <td>Samson</td>
              <td>Visit the village with Marth*</td>
            </tr>
            <tr>
              <td>16</td>
              <td>Xane</td>
              <td>Enemy, talk with Marth</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Est</td>
              <td>Enemy, talk with Marth</td>
            </tr>
            <tr>
              <td>19</td>
              <td>Tiki</td>
              <td>Enemy, talk with Bantu</td>
            </tr>
            <tr>
              <td>20</td>
              <td>Lorenz</td>
              <td>Enemy, talk with Caeda</td>
            </tr>
            <tr>
              <td>24</td>
              <td>Elice</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
            <tr>
              <td>25</td>
              <td>Gotoh</td>
              <td>Automatically at beginning of chapter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
#auto-splash {
  background-image: url("../../assets/splash/fe1.svg");
}
</style>

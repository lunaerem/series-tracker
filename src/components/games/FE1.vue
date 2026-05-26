<script setup lang="ts">
import { inject, onMounted } from "vue";
import { removeSpoiler, revealAllSpoilers } from "../../spoilers.ts";

const splash = inject("splash") as any;

onMounted(() => {
  splash.value = document.querySelector(".splash-img");
});
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
            <button
              class="button"
              style="cursor: pointer; margin-bottom: 1rem"
              @click="revealAllSpoilers()"
            >
              Reveal all Spoiler-tagged Entries
            </button>
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
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Marth</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Caeda</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Jagen</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Cain</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Abel</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Draug</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Gordon</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Wrys</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Visit the western village with Marth</span
                >
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Ogma</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Barst</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Bord</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Cord</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Castor</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Caeda</span
                >
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Darros</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Marth</span
                >
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Julian</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Lena</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Navarre</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Caeda</span
                >
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Merric</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Visit the northern village with Marth</span
                >
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Matthis</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Lena</span
                >
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Hardin</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Wolf</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Sedgar</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Roshea</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Vyland</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Wendell</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Marth or Merric</span
                >
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Rickard</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Marth or Julian</span
                >
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Bantu</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Visit the village with Marth</span
                >
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Caesar</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Radd</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Roger</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Caeda</span
                >
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Jeorge</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Visit the village with Marth</span
                >
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Maria</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Marth</span
                >
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Minerva</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Marth, Maria must be recruited already</span
                >
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Linde</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Visit the village with Marth</span
                >
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Jake</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Caeda</span
                >
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Midia</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Dolph</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Macellan</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Tomas</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Boah</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Beck</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Visit the village with Marth</span
                >
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Astram</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Midia</span
                >
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Palla</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Marth</span
                >
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Catria</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Marth</span
                >
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Arran</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Visit the village with Marth* (Mutually exclusive with
                  Samson)</span
                >
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Samson</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Visit the village with Marth* (Mutually exclusive with
                  Arran)</span
                >
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Xane</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Marth</span
                >
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Est</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Marth</span
                >
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)">Tiki</span>
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Bantu</span
                >
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Lorenz</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Enemy, talk with Caeda</span
                >
              </td>
            </tr>
            <tr>
              <td>24</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Elice</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
            </tr>
            <tr>
              <td>25</td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Gotoh</span
                >
              </td>
              <td>
                <span class="spoiler" @click="removeSpoiler($event)"
                  >Automatically at beginning of chapter</span
                >
              </td>
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

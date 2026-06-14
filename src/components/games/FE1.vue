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
          If you are going for 100% completion, recruit and keep all units alive
          throughout the game (More details in the Chapter Guide section below),
          as they are the only permanently missable unique thing in the game. A
          fair few are required to recruit others in future chapters. Units must
          be recruited in the chapter that they appear, and if the recruitable
          unit is killed or the map is finished before they are acquired, the
          character is permanently lost.
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
      <h2>Chapter Guide</h2>
      <p>
        The Chapter Guide is a full breakdown of each Chapter and how to get the
        full, permanently missable, rewards from them, notably the recruitable
        units. Some of the recruitable characters require specific units to be
        brought into the Chapter, which are noted, but the actual method for
        recruiting each Chapter's units in addition to any other notes regarding
        the map are spoiler tagged to essentially act as hints and not
        immediately give away everything to allow for initial experimentation.
      </p>
      <button
        class="button"
        style="cursor: pointer; margin-bottom: 1rem"
        @click="revealAllSpoilers()"
      >
        Reveal all Spoiler-tagged Entries
      </button>
      <div>
        <h3>Chapter 1</h3>
        <p><u>Number of Recruitable Characters:</u> 8</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Marth (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Caeda (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Jagen (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Cain (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Abel (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Draug (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Gordon (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Wrys (Visit the western village with Marth)</span
            >
          </li>
        </ul>
      </div>
      <div>
        <h3>Chapter 2</h3>
        <p><u>Number of Recruitable Characters:</u> 6</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> Caeda</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Ogma (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Barst (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Bord (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Cord (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Castor (Enemy, initiate Talk with Caeda)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Darros (Enemy, initiate Talk with Marth)</span
            >
          </li>
        </ul>
      </div>
      <div>
        <h3>Chapter 3</h3>
        <p><u>Number of Recruitable Characters:</u> 3</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> Caeda</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Julian (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Lena (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Navarre (Enemy, initiate Talk with Caeda)</span
            >
          </li>
        </ul>
      </div>
      <div>
        <h3>Chapter 4</h3>
        <p><u>Number of Recruitable Characters:</u> 2</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> Lena</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Merric (Visit the northern village with Marth)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Matthis (Enemy, initiate Talk with Lena)</span
            >
          </li>
        </ul>
      </div>
      <div>
        <h3>Chapter 5</h3>
        <p><u>Number of Recruitable Characters:</u> 6</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Hardin (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Wolf (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Sedgar (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Roshea (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Vyland (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Wendell (Enemy, either initiate Talk with Merric or have him
              initiate Talk with Marth)</span
            >
          </li>
        </ul>
      </div>
      <div>
        <h3>Chapter 6</h3>
        <p><u>Number of Recruitable Characters:</u> 1</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> Lena</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Rickard (Enemy, either initiate Talk with Julian or have him
              initiate Talk with Marth)</span
            >
          </li>
        </ul>
        <p>
          <u>Notes:</u>
          <span class="spoiler" @click="removeSpoiler($event)">
            The only way to get the chest furthest left is by using a Warp staff
            to block it with a unit. Lena should be the only unit at this point
            in the game capable of using staves.</span
          >
        </p>
      </div>
      <div>
        <h3>Chapter 7</h3>
        <p><u>Number of Recruitable Characters:</u> 1</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Bantu (Visit the village with Marth)</span
            >
          </li>
        </ul>
      </div>
      <div>
        <h3>Chapter 8</h3>
        <p><u>Number of Recruitable Characters:</u> 3</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> Caeda</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Caesar (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Radd (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Roger (Enemy, initiate Talk with Caeda)</span
            >
          </li>
        </ul>
      </div>
      <div>
        <h3>Chapter 9</h3>
        <p><u>Number of Recruitable Characters:</u> 1</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Jeorge (Visit the village with Marth)</span
            >
          </li>
        </ul>
      </div>
      <div>
        <h3>Chapter 10</h3>
        <p><u>Number of Recruitable Characters:</u> 2</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Maria (Enemy, initiate Talk with Marth)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Minvera (Enemy, let her initate Talk with Marth, Maria must be
              recruited first)</span
            >
          </li>
        </ul>
      </div>
      <div>
        <h3>Chapter 11</h3>
        <p><u>Number of Recruitable Characters:</u> 2</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> Caeda</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Linde (Visit the village with Marth)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Jake (Enemy, initiate Talk with Caeda)</span
            >
          </li>
        </ul>
      </div>
      <div>
        <h3>Chapter 12</h3>
        <p><u>Number of Recruitable Characters:</u> 5</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Midia (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Dolph (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Macellan (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Tomas (Automatically at beginning of Chapter)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Boah (Automatically at beginning of Chapter)</span
            >
          </li>
        </ul>
      </div>
      <div>
        <h3>Chapter 13</h3>
        <p><u>Number of Recruitable Characters:</u> 2</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> Midia</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Beck (Visit the village with Marth)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Astram (Enemy, initiate Talk with Midia)</span
            >
          </li>
        </ul>
      </div>
      <div>
        <h3>Chapter 14</h3>
        <p><u>Number of Recruitable Characters:</u> 2</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Palla (Enemy, Minerva must be recruited and still alive, let her
              initiate Talk with Marth)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Catria (Enemy, Minerva must be recruited and still alive, let her
              initiate Talk with Marth)</span
            >
          </li>
        </ul>
        <p>
          <u>Notes:</u>
          <span class="spoiler" @click="removeSpoiler($event)">
            In this Chapter, there is the Silver Card, which discounts all
            purchased items in shops by 50% when in the unit's inventory. It is
            generally a good idea to pick this item up.</span
          >
        </p>
      </div>
      <div>
        <h3>Chapter 15</h3>
        <p><u>Number of Recruitable Characters:</u> 0</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p>
          <u>Notes:</u>
          <span class="spoiler" @click="removeSpoiler($event)">
            Do NOT attack or get in the range of the enemy Bishop guarding the
            chests. He is invulnerable to all attacks, but will have a scripted
            retreat on turn 8. So just wait until he leaves before looting that
            corner of the map.
          </span>
        </p>
      </div>
      <div>
        <h3>Chapter 16</h3>
        <p><u>Number of Recruitable Characters:</u> 2*</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Arran (Visit the left village with Marth, mutually exclusive with
              Samson)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Samson (Visit the right village with Marth, mutually exclusive
              with Arran)</span
            >
          </li>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Xane (Enemy, let him initiate Talk with Marth)</span
            >
          </li>
        </ul>
      </div>
      <div>
        <h3>Chapter 17</h3>
        <p><u>Number of Recruitable Characters:</u> 0</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p>
          <u>Notes:</u>
          <span class="spoiler" @click="removeSpoiler($event)">
            One of the Curates in this map will drop an item called a VIP Card.
            There is a door on the tile directly above the boss that, when
            opened and stood on while holding the VIP Card, grants access to a
            secret shop.</span
          >
        </p>
      </div>
      <div>
        <h3>Chapter 18</h3>
        <p><u>Number of Recruitable Characters:</u> 1</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Est (Enemy, Minerva must be recruited and still alive, let her
              initiate Talk with Marth)</span
            >
          </li>
        </ul>
        <p>
          <u>Notes:</u>
          <span class="spoiler" @click="removeSpoiler($event)">
            If you have Palla, Catria, and Est all recruited, alive, and
            deployed, they have a unique gameplay mechanic called Triangle
            Attack. If the three units are on the tiles surrounding an enemy,
            then Triangle Attack will trigger when one of the three attacks the
            enemy, causing guaranteed critical hits.</span
          >
        </p>
      </div>
      <div>
        <h3>Chapter 19</h3>
        <p><u>Number of Recruitable Characters:</u> 1</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> Bantu</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Tiki (Enemy, initiate Talk with Bantu)</span
            >
          </li>
        </ul>
        <p>
          <u>Notes:</u>
          <span class="spoiler" @click="removeSpoiler($event)">
            Placeholder. Write about the orbs</span
          >
        </p>
      </div>
      <div>
        <h3>Chapter 20</h3>
        <p><u>Number of Recruitable Characters:</u> 1</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> Caeda</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Lorenz (Enemy, initiate Talk with Caeda)</span
            >
          </li>
        </ul>
        <p>
          <u>Notes:</u>
          <span class="spoiler" @click="removeSpoiler($event)">
            Placeholder</span
          >
        </p>
      </div>
      <div>
        <h3>Chapter 21</h3>
        <p><u>Number of Recruitable Characters:</u> 0</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p>
          <u>Notes:</u>
          <span class="spoiler" @click="removeSpoiler($event)">
            In the upper right corner of the map, there is a forest tile
            surrounded by mountains. Going there with the VIP Card allows access
            to another secret shop.</span
          >
        </p>
      </div>
      <div>
        <h3>Chapter 22</h3>
        <p><u>Number of Recruitable Characters:</u> 0</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p>
          <u>Notes:</u>
          <span class="spoiler" @click="removeSpoiler($event)">
            Placeholder</span
          >
        </p>
      </div>
      <div>
        <h3>Chapter 23</h3>
        <p><u>Number of Recruitable Characters:</u> 0</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p>
          <u>Notes:</u>
          <span class="spoiler" @click="removeSpoiler($event)">
            Placeholder</span
          >
        </p>
      </div>
      <div>
        <h3>Chapter 24</h3>
        <p><u>Number of Recruitable Characters:</u> 1</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Elice (Automatically at beginning of Chapter)</span
            >
          </li>
        </ul>
        <p>
          <u>Notes:</u>
          <span class="spoiler" @click="removeSpoiler($event)">
            In the bottom left corner of the map, there is an empty field tile
            surrounded by mountains. Going there with the VIP Card allows access
            to another secret shop.</span
          >
        </p>
      </div>
      <div>
        <h3>Chapter 25</h3>
        <p><u>Number of Recruitable Characters:</u> 1</p>
        <p><u>Characters to Bring into Chapter for Full Rewards:</u> N/A</p>
        <p><u>Recruitable Characters:</u></p>
        <ul>
          <li>
            <span class="spoiler" @click="removeSpoiler($event)"
              >Gotoh (Automatically at beginning of Chapter)</span
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
#auto-splash {
  background-image: url("../../assets/splash/fe1.svg");
}
</style>

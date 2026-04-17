<script setup lang="ts">
import { inject, onMounted } from 'vue';

const splash = inject('splash') as any;

onMounted(() => {
    splash.value = document.querySelector('.splash-img');
})

function removeSpoiler(event) {
    event.currentTarget.classList.remove('spoiler');
}
</script>

<template>
    <div id="auto-splash" class="splash-img">
	<h1>NieR Automata <br />
	Spoiler-Sensitive Guide for 100% Completion</h1>
    </div>
    <section style="padding-bottom: 0;">
	<div class="set-ratio">
	    <h2>Platforms</h2>
	    <div class="chip-container">
		<a class="chip st" target="_blank" draggable="false" 
		    href="https://store.steampowered.com/app/524220/NieRAutomata/">Steam</a>
		<a class="chip xo" target="_blank" draggable="false" 
		    href="https://www.xbox.com/games/store/nierautomata-become-as-gods-edition/BPPZVT8BZ15N">Xbox One</a>
		<a class="chip p4" target="_blank" draggable="false" 
		    href="https://www.playstation.com/games/nier-automata/">PlayStation 4</a>
		<a class="chip ns" target="_blank" draggable="false"
		    href="https://www.nintendo.com/store/products/nier-automata-the-end-of-yorha-edition-switch/">Nintendo Switch</a>
	    </div>
	    <p><u>Developer(s):</u> PlatinumGames, Square Enix, QLOC</p>
	    <p><u>Publisher:</u> Square Enix</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">
	    <h2>Preface</h2>
	    <p>This guide will allow you to 100% complete NieR Automata
	    (Unlocking most things, getting all achievements, etc.) on your first playthrough without
	    being exposed to potential spoilers.</p>
	    <p class="important-txt">DON'T LOOK UP ANYTHING ABOUT THE GAME OUTSIDE OF THIS LIST UNTIL YOU HAVE COMPLETED ENDING E!</p>
	    <p class="important-txt">ALSO, DON'T LOOK AT THE ACHIEVEMENTS LIST! IT SPOILS A LOT!</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">
	    <h2>Setup/Configuration</h2>
	    <p><u>Recommendation:</u> It is recommended to have played NieR Replicant ver.1.22474487139...
	    before playing NieR Automata, but it is not strictly necessary. NieR Automata spoils some of
	    Replicant’s big reveals, but knowing the story of Replicant is not necessary for understanding
	    Automata’s.</p>
	    <p><u>Recommendation:</u> It is highly recommended that you play with a controller. On some
	    computers, the game also bugs out if you are not playing with a controller.</p>
	    <p><u>Recommendation:</u> If you are on PC, keep in mind that this is a Square Enix PC port,
	    so it has a few technical problems. However, a decent number of them were fixed in a 2021 patch a
	    few years after the game was released. The only major widespread problem is that the game’s
	    Anti-Aliasing (AA) causes major stuttering on many machines. It is recommended to start the
	    game with AA disabled, but you can experiment with the setting to see if it causes issues on
	    your machine.</p>
	    <p><u>Recommendation:</u> Play on Normal or Hard difficulty. Normal will be pretty easy still,
	    so try Hard if you are looking for a bit more of a challenge. However, stick to Normal through
	    the tutorial, since there are no save points until after it, which means dying forces you to
	    start all the way over. Once you reach the first save point, you can change the difficulty to
	    whatever you wish. Like NieR Replicant, the difficulty can be changed at any time with no penalty,
	    so feel free to experiment (Nothing is locked by difficulty).</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">
	    <h2>Completion Guide</h2>
	    <p>Go through each section of the guide sequentially, 
	    not looking ahead at the next section until the current one has been completed in game. Once a new section is
	    reached, read through it before resuming play.</p>
	    <details>
		<summary>Ending A</summary>
		<div class="inner-pad">
		    <ul>
			<li>Welcome to Yoko Taro’s pain train (Part 2)!</li>
			<li>NieR Automata’s story is split up into five main Endings (Endings A, B, C, D, and E).
			    This will make more sense as you progress through the game.</li>
			<li>There are also “joke” endings F, G, H, ..., Y, Z, which offer little narrative, but
			    are necessary for an achievement, and some will cause a chuckle.</li>
			<li>There is also an additional ending for finishing the DLC.</li>
			<li>Unlike NieR Replicant, you can not get 100% quest completion in Ending A.</li>
			<li>NieR Automata has significantly less stuff that is permanently missable compared to NieR Replicant.
			    <ul>
				<li>However, there are a few things that can still be permanently missed.</li>
			    </ul>
			</li>
			<li>Compared to NieR Replicant, there are significantly more cutoff points where things become
			    inaccessible, but do not worry if you end up missing something. 
			    <ul>
				<li>Later in the game, you will be given tools that will allow you to do things that you have
				    missed or have become inaccessible due to story progression.</li>
				<li>There are a couple things that are still permanently missable, even with the tools you are
				    given later. Those will be the only things noted in this guide.</li>
				<li>In the end game, you will be able to purchase achievements (Yes, you read that right),
				    so that is a potential last resort option if you do manage to permanently miss something
				    even with using this guide.</li>
			    </ul>
			</li>
			<li>If you have played NieR Replicant: Rejoice! Boss speedrun achievements are not a thing in
			    this game! Yippie!</li>
			<li>For Ending A, just play through the game and enjoy yourself!</li>
		    </ul>
		</div>
	    </details>
	    <details>
		<summary>Ending B</summary>
		<div class="inner-pad">
		    <ul>
			<li>Load the save file that was created after completing Ending A.</li>
			<li>Fight through the final boss to get the Ending.</li>
			<li>For any of the endings, do NOT skip any cutscenes. </li>
			<li>At this point in the game, you have learned what Plug-in Chips are, and your inventory
			    might be getting full of them.
			    <ul>
				<li>The game only lets you carry a maximum of 200 Plug-in Chips, so you will need
				    to fuse/sell a bunch if you are going for 100% completion.</li>
				<li>Below is a chart for optimal fusing:</li>
				<li>This is where the image will go</li>
			    </ul>
			</li>
			<li>Just keep playing through the game and enjoy yourself!</li>
		    </ul>
		</div>
	    </details>
	    <details>
		<summary>Ending C/D</summary>
		<div class="inner-pad">
		    <ul>
			<li>Load the save file that was created after completing Ending B.</li>
			<li>Introduced in this Ending route is a side-quest that has a permanently
			    missable enemy intel entry. 
			    <ul>
				<li>The quest is given by Devola and Popola.</li>
				<li>It is titled “The Twin’s Request”</li>
				<li>Before accepting the quest, make sure to sell all of the Tree Sap
				    from your inventory, then you’ll be good to do it normally and get the intel.</li>
				<li>Basically, if you already have Tree Sap in your inventory when starting the
				    quest, you circumnavigate the whole side quest, skipping an exclusive enemy.</li>
			    </ul>
			</li>
			<li>Ending C/D operates a little differently from A and B.
			    <ul>
				<li>They are technically the same, but there is a choice at the Ending’s final boss
				    that dictates which you get.</li>
				<li>It does not matter which Ending you get first.</li>
				<li>Once both are gotten, the game will automatically advance to the route for
				    Ending E.</li>
				<li>Just play the game and enjoy yourself for this Ending, making sure to mind the
				    above note about the missable enemy intel entry!</li>
				<li>However, once you have finished one of either C or D, read the next section of
				    the guide, as that is the recommended point to go complete everything else.</li>
			    </ul>
			</li>
		    </ul>
		</div>
	    </details>
	    <details>
		<summary>Ending C/D Part 2</summary>
		<div class="inner-pad">
		    <ul>
			<li>Once you have reached either Ending C or D, it is recommended to go back and get
			    the game’s remaining collectibles.</li>
			<li>Getting one of the two Endings will unlock the Chapter Select option, which makes
			    it less tedious and much easier to go back and get things you missed (NieR Replicant
			    <i>really</i> could have used this. No, I’m <i>not</i> salty... *Incoherent grumbling*).</li>
			<li>Once Ending C and D are both reached, the game will automatically move onto the Ending E route
			    <ul>
				<li>It is incredibly easy to make several choices in Ending E that complicate 100%
				    completing the game afterwards, which is why it is recommended to do so now
				    before advancing to either C or D, depending on which you did first.</li>
				<li>I also feel that Ending E hits harder after doing the other completion stuff first. :)</li>
			    </ul>
			</li>
			<li>The remainder of this section has been split into further subcategories
			    <ul>
				<li>It is recommended to complete each of them before advancing to the next Ending</li>
				<li>The subcategories do not need to be completed in their listed order, unless stated 
				    otherwise, but they are presented in a logical ordering.</li>
			    </ul>
			</li>
		    </ul> 
		    <details>
			<summary>Catch All Fish</summary>
			<ul>
			    <li>Welcome to the worst part of the game!</li>
			    <li>It is HIGHLY recommended that you get something to watch on a second monitor 
				for this.</li>
			    <li>The game never really explains how fishing works, and it is not quite as intuitive
				as NieR Replicant’s system.</li>
			    <li>Essentially, once you have cast your bait, there are three different ways that a fish can bite:
				<ol>
				    <li>Dragging the Pod down
					<ul>
					    <li>Visual Cue: <span class="green">YES</span></li>
					    <li>Audio Cue: <span class="green">YES</span></li>
					    <li>Description: The bait Pod will be dragged underwater with a “plunk” sound,
						and the fish will start pulling it around. This is most similar to fishing
						catch indications in other video games.</li>
					</ul>
				    </li>
				    <li>Pod stops movement
					<ul>
					    <li>Visual Cue: <span class="green">YES</span></li>
					    <li>Audio Cue: <span class="red">NO</span></li>
					    <li>Description: The bait Pod will sometimes be drifting in a certain direction.
						If it abruptly stops moving, that is the indicator to begin reeling it in.</li>
					</ul>
				    </li>
				    <li>Pod switches directions
					<ul>
					    <li>Visual Cue: <span class="green">YES</span></li>
					    <li>Audio Cue: <span class="red">NO</span></li>
					    <li>Description: The bait Pod will sometimes be drifting in a certain direction.
						If it abruptly changes directions, that is the indicator to begin reeling
						it in.</li>
					</ul>
				    </li>
				</ol>
			    </li>
			    <li>Corrections to Common Misconceptions:
				<ul>
				    <li>Different locations in a “zone” do not offer different catch chances.</li>
				    <li>Plug-in Chips that alter item drop rate do not affect fishing.</li>
				    <li>The fish biting method does not determine what fish is caught (e.g. a Carp can be caught
					when the bait is dragged down, Pod stops moving, or the Pod switches directions).</li>
				</ul>
			    </li>
			    <li>Each catch is just a simple percent chance. Not much more beyond that. So this could
				take you hours or just a few tries per fish depending on your real-world luck.</li>
			    <li>If you are playing the Steam version of the game, it is highly recommended to
				temporarily bind your reeling in button to be turbo, meaning you can just hold it
				down to reel in instead of having to mash it (your hands will thank you later).</li>
			</ul>
			<div class="table-wrapper">
			    <table>
				<caption>Table of Fishing</caption>
				<thead>
				    <tr>
					<th scope="row">Test</th>
					<th></th>
				    </tr>
				</thead>
				<tbody>
				    <tr>
					<th scope="row">Time After Planting</th>
					<td>24–42 Hours</td>
					<td>42–48 Hours</td>
					<td>&gt;48 Hours</td>
				    </tr>
				    <tr>
					<th scope="row">Harvested Items</th>
					<td>Item you planted</td>
					<td>More seeds</td>
					<td>Nothing (Plant dies)</td>
				    </tr>
				</tbody>
			    </table>
			</div>
		    </details>
		    <details>
			<summary>Get All Pod Programs</summary>
			<ul>
			    <li><a target="_blank" href="https://nierautomata.wiki.fextralife.com/Pod+Programs">
				List with locations</a></li>
			</ul>
		    </details>
		    <details>
			<summary>Plug-In Chips</summary>
			<ul>
			    <li><a target="_blank" 
				href="https://steamcommunity.com/sharedfiles/filedetails/?id=2486382617">
				Full List of Chips</a></li>
			    <li><u>Note:</u> These are not tracked anywhere in-game. It is just listed 
				here if you are looking for specific ones.</li>
			</ul>
		    </details> 
		    <details>
			<summary>Collect All Weapons and Pods</summary>
			<ul>
			    <li><a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=885348110">
				List of Weapons and Pods locations</a></li>
			    <li>By this point, you will likely have all of the pods, but their locations are listed here anyways
				in case.</li>
			    <li>At the bottom of the list, there are three weapons that are blocked out with spoiler 
				tags. <b><u><i>DO NOT LOOK AT THOSE!</i></u></b></li>
			    <li>Two of the weapons are Type-3 Fists and Angel’s Folly, which can both be bought from Emil’s
				store if you stop him right outside the Resistance Camp.</li>
			    <li>The third weapon is a bit more complex to get. If you have not collected it yet, then
				listed below is a spoiler guide on how to get it. There will be non-spoiler hints provided and
				explicit steps to follow if needed obscured by spoiler tags. 
				<ol>
				    <li>Hint: There is a side quest prerequisite. (<span class="spoiler" 
					@click="removeSpoiler($event)">Complete the Emil’s Memories side quest.</span>)</li>
				    <li>Hint: A nomad shopkeeper must be spoken to. Make sure they discuss their place
					of residence. (<span class="spoiler" @click="removeSpoiler($event)">Talk with 
					    Emil and make sure he says the line about where he lives deep underground.</span>)</li>
				    <li>Hint: Find their place of residence. (<span class="spoiler" @click="removeSpoiler($event)">
					Go to Emil’s house in the underground cavern.</span>)</li>
				    <li>Hint: Take the item. (<span class="spoiler" @click="removeSpoiler($event)">There is 
					an item called Emil Mask that must be taken from his house.</span>)</li>
				    <li>Hint: Speak to the shopkeeper again. (<span class="spoiler" @click="removeSpoiler($event)">
					Talk with Emil again. He should mention something about thieves raiding his home.</span>)</li>
				    <li>Hint: Return to their place of residence as 9S. (<span class="spoiler" 
					@click="removeSpoiler($event)">Return to Emil’s home as 9S because there will be a new 
					chest with a hack lock. Open it.</span>)</li>
				</ol>
			    </li>
			</ul>
		    </details>
		    <details>
			<summary>Achieve Max Level</summary>
			<ul>
			    <li>The maximum level is 99</li>
			    <li>Equip all of your Exp Up Plug-in Chips as 9S</li>
			    <li>Transport to the Amusement Park</li>
			    <li>Head to the Amusement Park main entrance</li>
			    <li>Awake and hack the bunny</li>
			    <li>Reload the area (I.E. By fast travelling away and back) and repeat until
				level is maxed out</li>
			</ul>
		    </details>
		    <details>
			<summary>Finish All Side Quests</summary>
			<ul>
			    <li><a target="_blank" 
				href="https://www.reddit.com/r/nier/comments/5wsvix/spoiler_full_quest_list_in_all_quests_order/">
				Full Quest List</a> (Comments may contain spoilers!)</li>
			    <li>Note: There is a very easily missable (Missable as in the game does not tell you about it but
				is never permanently inaccessible) secret boss when doing the Flooded City Colosseum that
				is highly recommended to experience. After completing the S Rank match, go into the spectator
				stands, and near the top left of the entrance, there is a NPC named “Resistance Secretary.”
				Just keep talking with them. There is no in-game indication that this exists, and all external
				resources completely spoil what it is, so I thought it best to mention it here.</li>
			    <li>There is one “joke” Ending (Ending Y) that is permanently missable tied to a side quest that
				unlocks once you have obtained all weapons and they are all upgraded to level 4.</li>
			    <li>In the aforementioned side quest, there will be a boss fight where you must let it do its
				super move as indicated by a timer. You need to let the timer run out for the Ending to
				activate. Make sure you save in two slots before starting this side quest just in case!</li>
			    <li>Once you have completed all of the side quests, you are free to look at the achievements
				list, including the hidden ones.</li>
			</ul>
		    </details>
		    <details>
			<summary>Get All Endings</summary>
			<p class="important-txt">Do not look at the Endings list or go for the “joke” Endings until you have 100% quest 
			    completion!</p>
			<ul>
			    <li>Use <a target="_blank"
				href="https://steamcommunity.com/sharedfiles/filedetails/?l=german&id=885311665">this guide</a></li>
			    <li>This lists all of the Endings, including C, D, and E! Obviously do not look at the entries
				of those due to spoilers, but this list is mainly used for finding the “joke” Endings. </li>
			</ul>
		    </details>
		    <details>
			<summary>Collect All Intel Entries</summary>
			<p class="important-txt">Do not look at the Enemy Intel list until you have 100% quest completion!</p>
			<ul>
			    <li><a target="_blank" href="https://nierautomata.wiki.fextralife.com/Archives">
				Archives Tab</a></li>
			     <li><a target="_blank" href="https://gamefaqs.gamespot.com/boards/168677-nier-automata/75100125">
				Tutorials Tab</a></li>
			    <li><a target="_blank" href="https://nierautomata.wiki.fextralife.com/Enemies">
				Enemy Intel Tab</a></li>
			</ul>
		    </details>
		    <ul>
			<li>Once you are satisfied with all you want to do of the above, use Chapter Select to go back and do
			    the other character’s Ending for either Ending C or D.
			    <ul>
				<li>Before doing this however, make sure that you have the Network Connection option enabled
				    and working if you do not have already.</li>
			    </ul>
			</li>
		    </ul>
		</div>
	    </details>
	    <details>
		<summary>Ending E</summary>
		<div class="inner-pad">
		    <ul>
			<li>Make sure that you have done the setup for this Ending as listed at the end of the Ending C/D Part 2 section.</li>
			<li>Just keep playing through the game and enjoy the feels.</li>
			<li>The choice is yours and yours alone.</li>
			<li>For the Glory of Mankind.</li>
		    </ul>
		</div>
	    </details>
	    <details>
		<summary>Post Game</summary>
		<div class="inner-pad">
		    <p class="important-txt">Congratulations! You have played through NieR Automata!
		    You are free to look up anything at this point!</p>
		</div>
	    </details>
	</div>
    </section>
</template>

<style scoped>
#auto-splash {
    background-image: url("../../assets/splash/na.svg");
}
</style>

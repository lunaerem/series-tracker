<script setup lang="ts">
import { inject, onMounted } from 'vue';

const splash = inject('splash') as any;

onMounted(() => {
    splash.value = document.querySelector('.splash-img');
})
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
		    href="">Steam</a>
		<a class="chip xo" target="_blank" draggable="false" 
		    href="">Xbox One</a>
		<a class="chip p4" target="_blank" draggable="false" 
		    href="">PlayStation 4</a>
		<a class="chip ns" target="_blank" draggable="false" href="">Nintendo Switch</a>
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
		    </ul>
		    <div class="table-wrapper">
			<table>
			    <caption>Table of Farming</caption>
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
		    <details>
			<summary>Test</summary>
			<ul>
			    <li>Test</li>
			</ul>
		    </details>
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

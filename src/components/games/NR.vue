<script setup lang="ts">
import { inject, onMounted } from 'vue';

const splash = inject('splash') as any;

onMounted(() => {
    splash.value = document.querySelector('.splash-img');
})
</script>

<template>
    <div id="repli-splash" class="splash-img">
	<h1>NieR Replicant ver.1.22474487139... <br />
	Spoiler-Sensitive Guide for 100% Completion</h1>
    </div>
    <section style="padding-bottom: 0;">
	<div class="set-ratio">
	    <h2>Platforms</h2>
	    <div class="chip-container">
		<a class="chip st" target="_blank" draggable="false" 
		    href="https://store.steampowered.com/app/1113560/NieR_Replicant_ver122474487139/">Steam</a>
		<a class="chip xo" target="_blank" draggable="false" 
		    href="https://www.xbox.com/games/store/nier-replicant-ver122474487139/9nmbk4v30xjr">Xbox One</a>
		<a class="chip p4" target="_blank" draggable="false" 
		    href="https://store.playstation.com/product/UP0082-CUSA18774_00-0000000000000000">PlayStation 4</a>
	    </div>
	    <p><u>Developer(s):</u> Toylogic, Square Enix, Cavia (Original Game)</p>
	    <p><u>Publisher:</u> Square Enix</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">
	    <h2>Preface</h2>
	    <p>This guide will allow you to 100% complete NieR Replicant ver.1.22474487139...
	    (Unlocking most things, getting all achievements, etc.) on your first playthrough without
	    being exposed to potential spoilers.</p>
	    <p><u>Note:</u> This guide is intended for the remastered ver.1.22474487139 edition of the
	    game, and not the PlayStation 3 or Xbox 360 versions! Some aspects of the guide might still
	    be applicable, but several important things have been changed about the game in the remaster!</p>
	    <p class="important-txt">DON'T LOOK UP ANYTHING ABOUT THE GAME OUTSIDE OF THIS LIST UNTIL YOU HAVE COMPLETED ENDING E!</p>
	    <p class="important-txt">ALSO, DON'T LOOK AT THE ACHIEVEMENTS LIST! IT SPOILS A LOT!</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">
	    <h2>Setup/Configuration</h2>
	    <p><u>Recommendation:</u> Make sure you have the free DLC “purchased” and installed. It is titled "4 YoRHa."</p>
	    <p><u>Recommendation:</u> It is highly recommended that you play with a controller if you are on PC.</p>
	    <p><u>Recommendation:</u> If you are playing on PC, keep in mind that this is a Square Enix PC 
	    port, so it has a few technical problems, 
	    specifically regarding the frame rate. It is supposed to be capped to 60fps, but it is 
	    implemented poorly, resulting in a weird 57-58fps cap with horrible stuttering. 
	    Thankfully, this can easily be resolved by doing the following:</p>
	    <ol>
		<li>Boot the game to the main menu and save your game settings at least once
		(Go to settings and change something, there should be a saving icon that appears
		when you exit the menu).</li>
		<li>Close out of the game and go to the configuration files location listed
		    below and open <code>drawing_settings.ini</code>
		    <ul>
			<li>Windows: <code>%USERPROFILE%\Documents\My Games\NieR Replicant
			ver.1.22474487139\Steam\&lt;user-id&gt;\</code></li>
			<li>Linux: <code>&lt;SteamLibrary-folder&gt;/steamapps/compatdata/1113560/pfx/</code></li>
		    </ul>
		</li>
		<li>Set <code>FpsControlDisable = 1</code> and save the file</li>
		<li>Use an external frame limiter (I.E. NVidia Control Panel) to
		cap the frame rate to 60fps (Going above or below 60fps impacts
		the game’s simulation speed, so don’t do that)</li>
	    </ol>
	    <p><u>Recommendation:</u> Play on Normal or hard difficulty. Normal will still be pretty easy, so try
	    Hard if you are looking for a bit more of a challenge. The difficulty can be changed at any time from
	    the main menu with no penalty, so feel free to experiment (Nothing is locked by difficulty, but Hard
	    increases item drop rates).</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">
	    <h2>Completion Guide</h2>
	    <p>Go through each section of the guide sequentially, 
	    not looking ahead at the next section until the current one has been completed in game. Once a new section is
	    reached, read through it before resuming play.</p>
	    <details>
		<summary>Ending A Part 1</summary>
		<ul>
		    <li>Welcome to Yoko Taro’s pain train!</li>
		    <li>NieR Replicant’s story is split up into two parts and five Endings (Endings A, B, C, D, and E).
			This will make more sense as you progress through the game.</li>
		    <li>The vast majority of the missables come from Part 1 of Ending A.</li>
		    <li>Most of Part 1’s quests are effectively missable with an unmarked point of no return, which can
			make things tricky. However, there are no quests missable in Part 1 prior to that point.
			<ul>
			    <li>What that means is you can miss all of Part 1’s quests if you pass that point of no return,
				but all Part 1 quests are completeable once it is reached.</li>
			    <li>Basically, if you are asked to go investigate a mansion in the southern plains, 
				<b><u><i>DO NOT DO THAT</i></u></b> until you have finished everything you want to in Part 1.</li>
			    <li>Part 1 should be finished with 50% quest completion. Some guides will say 51%, but that is
				for the original PlayStation 3/Xbox 360 version. The remaster added an additional side quest
				in Part 2 to balance the percentage out between the two parts.</li>
			    <li>Here is a relatively spoiler-free quest list to look at once you have reached the point of no
				return (Just don’t look ahead at the Part 2 information): 
				<a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2469041194">
				    https://steamcommunity.com/sharedfiles/filedetails/?id=2469041194</a>.</li>
			</ul>	
		    </li>
		    <li>The only other truly missable things are Tutorials, Documents, and Words.</li>
		    <li>However, I would highly recommend NOT trying to 100% complete those, since they can be rather finicky,
			most are RNG dependent, and looking into how to get them will spoil a lot of things and ruin a lot of
			the game’s fun and pacing.
			<ul>
			    <li>There is an achievement for collecting 50% of the Words, but as long as you are fighting the
				occasional enemy, you will be fine. You’ll learn how to get Words by progressing the main story.</li>
			</ul>
		    </li>
		    <li>I would recommend waiting to upgrade the weapons until AFTER finishing the whole game (Ending E) or you
			are going to be in for a LONG grind.
			<ul>
			    <li>You can upgrade weapons as you wish, but I would not recommend going for ALL of them until after Ending E.</li>
			</ul>
		    </li>
		</ul>
		<p><u>Farming Information:</u></p>
		<ul>
		    <li>Most of the farming will happen in Part 2, but since you can start doing it in Part 1, I
			decided to include the information here.</li>
		    <li>Farming occurs in real time in NieR Replicant, which means that you can either do it
			legitimately or mess with your system's clock.</li>
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
		<ul>
		    <li>Some plants require cross breeding to get. This is done by planting two or more things next to each 
			other in your field.</li>
		    <li>Don’t worry about cross breeding until Part 2 though, since it is not required in Part 1, unless you
			want to really get ahead or know what you are doing.</li>
		    <li>Video about the useful cross breeding patterns <b><u><i>(CONTAINS PART 2 SPOILERS! DO NOT LOOK AT
			UNTIL PART 2 IS REACHED!):</i></u></b> 
			<a target="_blank" href="https://www.youtube.com/watch?v=7-rGmiEsoVA">
			    https://www.youtube.com/watch?v=7-rGmiEsoVA</a></li>
		    <li><a target="_blank" 
			href="https://www.reddit.com/r/nier/comments/n87evr/there_wasnt_much_information_on_moonflower/?rdt=35056">
			Full Cross breeding table if interested</a></li>
		</ul>
		<p><u>Fishing Information:</u></p>
		<ul>
		    <li>This section will mostly be useful later, since the fishing in Part 1 is pretty straightforward, but
			here it is for future reference.</li>
		    <li>Good fishing table <b><u><i>(NOT RECOMMENDED TO LOOK AT UNTIL THE POINT OF NO RETURN IN PART 1 IS REACHED!):</i></u></b>
			<a target="_blank" href="https://www.reddit.com/r/nier/comments/n2i67j/nier_replicant_handy_fishing_table/?rdt=64449">
			    https://www.reddit.com/r/nier/comments/n2i67j/nier_replicant_handy_fishing_table/?rdt=64449</a></li>
		</ul>
		<p><b><u>TLDR:</u></b> My recommendation is to play casually until the point of no return described 
		in the quest section of Part 1 before looking into the provided guides and going for 50% quest completion.</p>
	    </details>
	    <details>
		<summary>Ending A Part 2</summary>
		<ul>
		    <li>This is the point where I recommend going for 100% Quest Completion.</li>
		    <li>There will be a defined point of no return this time, unlike Part 1, with an 
			explicit confirmation box and save point right next to it.
			<ul>
			    <li>Use the same quest guide as listed in Ending A Part 1 to find quests
				you are still missing once you reach it.</li>
			</ul>
		    </li>
		    <li>However, there is one missable quest during this part! 
			<ul>
			    <li>There will be a pretty apparent mode of transportation that is unlocked
				during Part 2, and the operator of it has a quest to give.</li>
			    <li>Once you unlock the mode of transportation and the operator’s quest,
				<b><u><i>DO IT IMMEDIATELY</i></u></b> without progressing the main story!</li>
			    <li>If you progress the main story past a certain point, that quest is no longer obtainable!</li>
			    <li>For reference, it is titled “The Promised Gift”</li>
			    <li>While the quest is easily gotten in the other Endings, it must be done now
				if you are going for 100% quest completion in Ending A, and it is just nice
				to get a permanently missable thing out of the way.</li>
			</ul>
		    </li>
		</ul>
	    </details>
	    <details>
		<summary>Ending B</summary>
		<ul>
		    <li>Load the save file that was created after completing Ending A.</li>
		    <li>Fight through the final boss to get the Ending.</li>
		    <li>For any of the endings, do <b><u><i>NOT</i></u></b> skip any cutscenes
			(Unless noted below when achievement hunting for the boss speedruns).</li>
		    <li>At this point, it is pretty safe to look at the achievements list with
			the exception of the hidden ones.</li>
		    <li>Also during this Ending, I would recommend to start going after the boss
			speedrun achievements where you have to defeat the boss in a certain amount of time.
			<ul>
			    <li>For the boss speedrun achievements, I would recommend making a save
				before a boss, playing through it, saving after the boss in a different
				slot, exiting to the main menu, switching the difficulty to Easy, 
				loading the save before the boss, and then going for the speedrun 
				(Just don’t forget to switch the difficulty back when done if applicable 
				before reloading your post-boss save).</li>
			    <li><u>Note:</u> Dialog and cutscenes count toward a boss's time, which is 
				why I recommend playing through it normally once so you can skip 
				them when going for an attempt.</li>
			</ul>
		    </li>
		</ul>
	    </details>
	    <details>
		<summary>Ending C</summary>
		<ul>
		    <li>Fight the final boss using a save file created by finishing Ending B.</li>
		    <li><u>Note:</u> All weapons must be acquired for this Ending to trigger.
			<ul>
			    <li>If you reach the Ending’s point of no return without all of the weapons, 
				consult <a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2469268862">
				this guide</a> for locations.</li>
			    <li>Any weapons missed from Ending A Part 1 can be purchased at The Aerie in Part 2.</li>
			</ul>
		    </li>
		    <li>There will be a dialog option that appears at the end.
			<ul>
			    <li>The dialog prompt will be labeled as “What should I do?”</li>
			    <li>Select the top option for Ending C.</li>
			    <li>The bottom option leads to Ending D.</li>
			    <li>Do Ending C first.</li>
			    <li><u>Note:</u> the Ending D option will give you about seventy 
				million confirmation boxes before it is selected, so if those 
				appear, you have selected the wrong option.</li>
			</ul>
		    </li>
		    <li><u>Note:</u> The Louise boss speedrun achievement is now available during this 
			Ending (Time: 5 minutes) It is considered a hidden achievement, so I 
			am putting the time down here to not spoil the other hidden achievements.</li>
		</ul>
	    </details>
	    <details>
		<summary>Ending D</summary>
		<ul>
		    <li>Fight the final boss using a save file created by finishing Ending C.</li>
		    <li><u>Note:</u> All weapons must be acquired for this Ending to trigger.</li>
		    <li>Make sure you have saved before the point of no return before doing Ending D.</li>
		    <li>Once you defeat the final boss, select the bottom option in the dialog 
			selection described in the Ending C section instead of the top one.</li>
		    <li>Other than that, just trust the process when the confirmation comes up.</li>
		</ul>
	    </details>
	    <details>
		<summary>Ending E</summary>
		<ul>
		    <li>Keep playing the game.</li>
		    <li>Trust the process.</li>
		    <li><u>Reminder:</u> don’t skip any cutscenes.</li>
		</ul>
	    </details>
	    <details>
		<summary>Post Game</summary>
		<p class="important-txt">Congratulations! You have played through NieR Replicant!
		    It is now time to go back and get the remaining achievements,
		    upgrade weapons, and you are free to look up anything at this
		    point (Careful with NieR Automata spoilers though, since it is a sequel)!</p>
		<p>Feel free to look at the achievements at this point, including the hidden ones,
		    since you will likely have a few stragglers.</p>
		<u>Weapon Upgrade Information:</u>
		<ul>
		    <li>Great Tool for tracking it: <a target="_blank" href="https://avisari.github.io/NierReplicant-rmwc/">
			https://avisari.github.io/NierReplicant-rmwc/</a></li>
		    <li>Because there are DLC weapons in the game, you can skip upgrading
			five weapons while still getting the achievement for upgrading all
			of the weapons. This allows you to skip ones that require rare
			resources and potentially trim down hours of material grinding
			if you so desire.</li>
		    <li>I recommend skipping Phoenix Sword, Iron Pipe, Sunrise, Phoenix
			Dagger, and Phoenix Spear, but this depends on your luck with
			what is in your inventory at the time.</li>
		</ul>
	    </details>
	</div>
    </section>
</template>

<style scoped>
#repli-splash {
    background-image: url("../../assets/splash/nr.svg");
}
</style>

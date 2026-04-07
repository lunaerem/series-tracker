<script setup lang="ts">
import { inject, onMounted } from 'vue';

const splash = inject('splash');

onMounted(() => {
    splash.value = document.querySelector('.splash-img');
})
</script>

<template>
    <div id="about-splash" class="splash-img">
	<h1>About</h1>
    </div>
    <section>
	<div class="set-ratio">
	    <h2>Expanded Description</h2>
	    <p>Over the years of playing a large variety of video games, I have amassed quite a collection
	    of documents that I have created and used for 100% completing each game, and I wanted to share 
	    some of them since there seems to be a lack of completion documentation that allows someone to
	    attain 100% completion in one playthrough with minimal spoilers. As someone who loves 100% completing 
	    games, whether that be getting all achievements, getting all upgrades, unlocking everything, etc. I also
	    have a passion for collecting, compiling, and organising information about some of my favourite series.
	    Therefore, I have also decided to use this website for hosting several lists I have created that detail 
	    the recommended play order, platform availability, and version differences of several franchises for anyone 
	    that does not want the hassle of trying to piecing together that information by themselves so they can just 
	    get to playing and enjoying the experiences.</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">
	    <h2>Disclaimers</h2>
	    <p>As stated previously, this unofficial fan-made website is exclusively for hosting and 
		providing information that I have compiled or created for the 
		video games that I enjoy. Furthermore, no money is made from the operations of this 
		website nor is it affiliated with the games' developers or publishers. 
		<b>This website does not and will never host game data, ROMs, cracks, etc.</b>
		All information and content is created/provided adhering to a game's or publisher's content
		policy, if one is provided. For questions, clarifications, or requests, please reach out using 
		one of the following methods:</p>
	    <ul>
		<li><a target="_blank" href="">GitHub Repository Issues</a></li>
		<li>Feedback Form (Coming Soon)</li>
	    </ul>
	</div>
    </section>
    <section>
	<div class="set-ratio">
	    <h2>Attributions/Licensing</h2>
	    <ul>
		<li>Website created by Andrew (<a target="_blank" class="hyperlink" href="https://github.com/lunaerem">lunaerem</a>), source code available 
		<a target="_blank" class="hyperlink" href="https://github.com/lunaerem/series-tracker">here</a></li>
		<li>As this is a fan-made website, all trademarks and copyrights of games belong to their respecitve owners
		    and is not affiliated with the games' developers or publishers.</li>
		<li>Expect when otherwise stated, all information written by me (Lunaerem) for this website is licensed under the </li>
		<li>Hosted using <a target="_blank" class="hyperlink" href="https://docs.github.com/en/pages">GitHub Pages</a></li>
		<li><a target="_blank" class="hyperlink" href="https://vite.dev/">Vite</a>,
		included under the <a target="_blank" class="hyperlink" href="https://opensource.org/license/MIT">MIT License</a></li>
		<li><a target="_blank" class="hyperlink" href="https://vuejs.org/">Vue</a>,
		included under the <a target="_blank" class="hyperlink" href="https://opensource.org/license/MIT">MIT License</a></li>
		<li><a target="_blank" class="hyperlink" href="https://router.vuejs.org/">Vue Router</a>,
		included under the <a target="_blank" class="hyperlink" href="https://opensource.org/license/MIT">MIT License</a></li>
	    </ul>	
	</div>
    </section>
</template>

<style scoped>
#about-splash {
    background-image: url("../assets/Background.svg");
}
</style>

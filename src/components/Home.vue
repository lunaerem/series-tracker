<script setup lang="ts">
import { inject, onMounted } from 'vue';

const splash = inject('splash');

onMounted(() => {
    splash.value = document.querySelector('.splash-img');
})
</script>

<template>
    <div id="home-splash" class="splash-img">
	<h1>Series Tracker (Working Title)</h1>
    </div>
    <section>
	<div class="set-ratio">
	    <h2>About</h2>
	    <p>Do you love 100% completing them or playing through 
	    a full game series in order? If so, then you have come to the right place! This fan-made website hosts
	    two different content types:</p>
	    <div id="about-wrapper">
		<div id="guide-box">
		    <h3>100% Completion Guides</h3>
		    <p>These try to keep things as spoiler-free as possible 
		    so that you can play through the game for the first time with the peace of mind that you are not 
		    missing anything permanently missable.</p>
		</div>
		<div id="timeline-box">
		    <h3>Game Series Timelines</h3>
		    <p>These are full lists of what games are in a franchise, what their preferred
		    play order is, what platforms they are available on, what versions are preferred,
		    and which games are mainline or spin-offs.</p>
		</div>
	    </div>
	    <div id="games-temp-link">
		<RouterLink to="/Games/" class="button">Check them out</RouterLink>
	    </div>
	</div>
    </section>
    <section style="background: linear-gradient(to right, #7f4ca5, #b57edc)">
	<div class="set-ratio">
	    <h2>Reaching Out</h2>
	    <p>When browsing the contents of the site, if you notice any errors 
		with the provided information (I.E. Dead links, factually incorrect data, etc.)
		or the operations of the website itself, feel free to reach out to 
		me so it can be corrected. Currently, the primary way
		to do so is by opening an <a target="_blank" href="https://github.com/lunaerem/series-tracker">Issue in the
		GitHub Repository</a>, but I am considering making a feedback form
		later on. Also, feel free to reach out if you have any comments, 
		suggestions, or other ideas.</p>
	</div>
    </section>
    <section>
	<div class="set-ratio">	
	    <h2>Disclaimers</h2>
	    <p>This is an unofficial fan website about some of the video 
		games I enjoy that hosts documents created by me to aid others 
		who are trying to 100% complete the game or describing the 
		best play order for a series. <b>This website does not and will 
		    never host game data, ROMs, cracks, etc.</b> For more information,
		see the dedicated "Disclaimers" section of the <RouterLink to="/About">
		    About Page.</RouterLink></p>
	</div>
    </section>
</template>

<style scoped>
#home-splash {
    background-image: url("../assets/Background.svg");
}

#about-wrapper {
    display: flex;
    gap: 30px;

    div {
	text-align: center;
	border: 1px solid white;
	border-radius: 10px;
	transition: all 0.5s ease;	
	background-position: left top;
	background-repeat: no-repeat;

	&:hover {
	    box-shadow: 0px 0px 52px -8px #CF96FF;
	}
    }
}

#guide-box {
    background-image: url('../assets/background1.svg'), 
	linear-gradient(to bottom right, #7338A0, #0F0529);
}

#timeline-box {
    background-image: url('../assets/background2.svg'), 
	linear-gradient(to bottom right, #7338A0, #0F0529);
}

#games-temp-link {
    display: flex;
    margin-top: 1rem;
    justify-content: center;
}
</style>

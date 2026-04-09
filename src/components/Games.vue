<script setup lang="ts">
import { inject, onMounted } from 'vue';

const splash = inject('splash') as any;

onMounted(() => {
    splash.value = document.querySelector('.splash-img');
})
</script>

<template>
    <div id="games-splash" class="splash-img">
	<h1>Games List</h1>
    </div>
    <section>
	<div class="set-ratio">
	    <h2>Completion Guides/Documents</h2>
	    <p>I am a bit of a completionist when it comes to playing video games (Ok, a
	     bit <i>might</i> be an understatement...), so over the years, I have created
	     quite a few documents and compiled a lot of information about certain games,
	     which I have decided to share below for anyone else looking to finish everything
	     in a game or get all of its achievements.</p>
	    <div class="game-grid">
		<RouterLink class="game active-live" to="/games/NieR-Replicant" draggable="false" id="nr">
		    NieR Replicant ver.1.22474487139...
		</RouterLink>
		<div class="game" draggable="false" id="na">
		    NieR: Automata <br /> 
		    Coming Soon...
		</div>
		<div class="game" draggable="false" id="bt">
		    Blossom Tales: The Sleeping King <br /> 
		    Coming Soon...
		</div>
		<div class="game" draggable="false" id="xde">
		    Xenoblade: Definitive Edition <br />
		    Coming Soon...
		</div>   	
		<div class="game" draggable="false" id="x2">
		    Xenoblade 2 <br />
		    Coming Soon...
		</div>
		<div class="game" draggable="false" id="ls">
		    The Last Story <br />
		    Coming Soon...
		</div>
		<div class="game" draggable="false" id="tesv">
		    The Elder Scrolls V: Skyrim <br />
		    Coming Soon...
		</div>
	    </div>
	</div>
    </section>
    <section style="margin-bottom: 1rem;">
	<div class="set-ratio">
	    <h2> Full Game Series Timelines</h2>
	    <p>Have you ever wanted to play a game series from start to finish,
	    but are not quite sure what order to play them in? Then this is the
	    section you are looking for! Below are full timeline breakdowns of
	    some of my favourite series, including the recommended order to play
	    them, the preferred editions for each game, and the platforms that
	    offer the best experience. Some series can be quite confusing to find
	    a good order to play through, so this is here for anyone looking to
	    skip the hassle.</p>
	    <div class="game-grid">
		<div class="game" draggable="false" id="kh">
		    Kingdom Hearts <br />
		    Coming Soon...
		</div>	
		<div class="game" draggable="false" id="lad">
		    Like a Dragon/Yakuza <br />
		    Coming Soon...
		</div>
		<div class="game" draggable="false" id="vu">
		    Valve Universe <br />
		    Coming Soon...
		</div>
	    </div>
	</div>
    </section>
</template>

<style scoped>
#games-splash {
    background-image: url("../assets/splash/main.svg");
}

.game-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}

.game {
    text-decoration: none;
    border: 1px solid white;
    border-radius: 10px;
    aspect-ratio: 1 / 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: grey;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
    font-weight: 1000;
    word-break: break-all;
    filter: grayscale(90%);
    transition: all 0.5s;
    user-select: none;
    -webkit-user-select: none;

    &.active-live {
	filter: grayscale(25%);
    }

    &.active-live:hover {
	color: #dbb6ee;
	filter: grayscale(0%);
    }
}

#nr {
    background-image: url("../assets/splash/nr.svg");
}

#na {
    background-image: url("../assets/splash/na.svg"); 
    background-position: 55%;
}

#bt {
    background-image: url("../assets/splash/bt.svg");
    background-position: 85%;
}

#xde {
    background-image: url("../assets/splash/xde.svg");
}

#x2 {
    background-image: url("../assets/splash/x2.svg");
}

#ls {
    background-image: url("../assets/splash/ls.svg");
}

#tesv {
    background-image: url("../assets/splash/tesv.svg");
    background-position: 20%;
}

#kh {
    background-image: url("../assets/splash/kh.svg");
}

#lad {
    background-image: url("../assets/splash/lad.svg");
}

#vu {
    background-image: url("../assets/splash/vu.svg");
}
</style>

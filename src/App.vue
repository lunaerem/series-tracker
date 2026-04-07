<script setup lang="ts">
import { ref, provide, onMounted } from 'vue';

const dialogTitle = ref(null);
let header = null;
const splash = ref(null);

onMounted(() => {
    header = document.getElementById('nav-header');
})

function toggleModal(title?) {
    const modal = document.getElementById("modal");

    if(modal.open) {
	modal.close();
    } else {
	dialogTitle.value = title;
	modal.showModal();
    }
}

provide('toggle', toggleModal);
provide('splash', splash);

const handleWindowScroll = () => {
    if(window.scrollY > (splash.value.offsetTop + splash.value.offsetHeight)) {
	header.classList.add('transparent');
    } else {
	header.classList.remove('transparent');
    }
    
};

window.addEventListener('scroll', handleWindowScroll);
</script>

<template>
    <header id="nav-header"> 
	<div id="nav-inner" class="set-ratio">
	    <RouterLink to="/home/" id="logo">Logo</RouterLink>
	    <nav>
		<ul>
		    <li>
			<RouterLink to="/home">Home</RouterLink>
		    </li>
		    <li>
			<RouterLink to="/about">About</RouterLink>
		    </li>
		    <li id="dropdown-li">
			<div id="dropdown-wrapper">
			  <RouterLink to="/games">Games</RouterLink>
			  <div id="dropdown-content">
			    <RouterLink to="/games/game1">Completion Template</RouterLink>
			    <RouterLink to="/games/game2">Timeline Template</RouterLink>
			  </div>
			</div>
		    </li>
		</ul>
	    </nav>
	</div>
    </header>
    <main>
	<RouterView />
    </main>
    <footer>
	<div id="main-footer" class="set-ratio">	
	    <a target="_blank" href="https://lunaerem.github.io/personal-website/">© Lunaerem</a>
	    <a id="src-btn" class="button" href="https://github.com/lunaerem/series-tracker" target="_blank">Website Source</a>
	</div>
    </footer> 
    <dialog id="modal" closedby="any">
	<div style="display: flex; flex-direction: column; height: 100%">	
	    <button @click="toggleModal()" id="close-btn">
		<svg width="24" height="24" viewBox="0 0 24 24" focusable="true" stroke="white" stroke-width="2px">
		    <path d="M 4 4 L 20 20 M 20 4 L 4 20" stroke-linecap="round" />
		</svg>
	    </button>
	    <div id="dialog-splash">
		<h2>{{ dialogTitle }}</h2>
	    </div>
	    <div id="dialog-content">
		<p style="margin: 0;">Here's some text about the game</p>
		<div style="margin-top: auto">
		    <h3 style="border-bottom: 1px solid white;">Platforms</h3>
		    <div id="chip-container">
			<div class="chip">
			    Test
			</div>
			<div class="chip">
			    Test2
			</div>
		    </div>
		</div>
	    </div>
	</div>
    </dialog>
</template>

<style scoped>
#nav-header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(75, 28, 113, 0);
    z-index: 1;
    transition: all 0.5s
}

#nav-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: stretch;
}

.transparent {
    background-color: rgba(75, 28, 113, 0.75) !important; 

    a {
	color: #dbb6ee !important;

	&:hover {
	    color: #ffffff !important;
	}
    }
}

nav {

    ul {
	list-style: none;
	display: flex;
	gap: 1rem;
	min-height: 2lh;

	li {
	    position: relative;  
	    display: flex;
	    align-items: center;

	    a {
		text-decoration: none;
		display: flex;
		align-items: center;
		color: #fff0ff;
		height: 100%;
		transition: color 0.25s ease;
	    }

	    a:hover {
		color: #4b1c71;
	    }
	}

	li::after {
	    content: '';
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    height: 2px;
	    width: 100%;
	    transform: scaleX(0);
	    background-color: #fff0ff;
	    transition: transform 0.5s ease;
	}

	li:hover::after {
	    transform: scaleX(1);
	}
    }
}

#logo {
    
}

#main-footer {
    border-top: solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

#src-btn {
    margin-top: 1em;
    margin-bottom: 1em;
}

#dropdown-wrapper {
    position: relative;
    display: inline-block;
    height: 100%;
}

#dropdown-li:hover #dropdown-content {
    display: block;
}

#dropdown-content {
    background-color: white;
    display: none;
    position: absolute;
    min-width: 10rem;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.9);
    z-index: 1;

    a {
	color: black;
	padding: 1rem 1rem;
	display: block;
    }

    a:hover {
	background-color: #ddd;
    }
}
</style>

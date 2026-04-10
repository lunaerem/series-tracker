<script setup lang="ts">
import { ref, provide, onMounted } from 'vue';

const dialogTitle = ref(null);
let header: HTMLElement | null = null;
const splash: any = ref(null);

onMounted(() => {
    header = document.getElementById('nav-header');
})

function toggleModal(title?: any) {
    const modal = document.getElementById("modal") as HTMLDialogElement;

    if(modal != null) {
	if(modal.open) {
	    modal.close();
	} else {
	    dialogTitle.value = title;
	    modal.showModal();
	}
    }
}

provide('toggle', toggleModal);
provide('splash', splash);

const handleWindowScroll = () => {
    if(header != null && splash.value != null) {
	if(window.scrollY > (splash.value.offsetTop + splash.value.offsetHeight)) {
	    header.classList.add('transparent');
	} else {
	    header.classList.remove('transparent');
	}
    }
};

window.addEventListener('scroll', handleWindowScroll);
</script>

<template>
    <header id="nav-header"> 
	<div id="nav-inner" class="set-ratio"> 
	    <div id="logo-wrapper">
		<RouterLink to="/home/" id="logo-btn" draggable="false" />
	    </div>
	    <nav>
		<ul>
		    <li>
			<RouterLink to="/home" draggable="false">Home</RouterLink>
		    </li>
		    <li>
			<RouterLink to="/about" draggable="false">About</RouterLink>
		    </li>
		    <li id="dropdown-li">
			<div id="dropdown-wrapper">
			  <RouterLink to="/games" draggable="false">Games</RouterLink>
			  <!--<div id="dropdown-content">
			    <RouterLink to="/games/game1">Completion Template</RouterLink>
			    <RouterLink to="/games/game2">Timeline Template</RouterLink>
</div>-->
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
	    <a id="src-btn" class="button" href="https://github.com/lunaerem/series-tracker"
		target="_blank" draggable="false">Website Source</a>
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
		    <div class="chip-container">
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
    padding-left: 1rem;
    padding-right: 1rem;
}

.transparent {
    background-color: rgba(75, 28, 113, 0.75) !important; 
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
		user-select: none;
		-webkit-user-select: none;
	    }

	    a:hover {
		color: #dbb6ee;
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

#logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("./assets/logos/website.svg");
    background-repeat: no-repeat;
    background-position: center;
    min-width: 120px;
}

#logo-btn {
    width: 100%;
    height: 100%;
}

#main-footer {
    border-top: solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
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

<script setup lang="ts">
import { ref, provide } from 'vue';

const dialogTitle = ref(null);

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
</script>

<template>
    <header id="nav-header"> 
	<div id="nav-inner" class="set-ratio">
	    <img alt="Logo" />
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
			    <RouterLink to="/games/game1">Test Game 1</RouterLink>
			    <RouterLink to="/games/game2">Test Game 2</RouterLink>
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
	    <p>© lunaerem</p>
	    <button id="src-btn" onclick="window.open('https://github.com/lunaerem/series-tracker', '_blank')">Website Source</button>
	</div>
    </footer> 
    <dialog id="modal" closedby="any">
	<h2>{{ dialogTitle }}</h2>
	<button @click="toggleModal()">Close</button>
    </dialog>
</template>

<style scoped>
#nav-header {
    position: fixed;
    width: 100%;
    background-color: green;
}

#nav-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
}

nav {

    ul {
	list-style: none;
	display: flex;
	gap: 1rem;
	min-height: 2lh;

	li {
	    position: relative;
	    transition: color 0.5s ease;
	    display: flex;
	    align-items: center;

	    a {
		text-decoration: none;
		display: flex;
		align-items: center;
		color: white;
		height: 100%;
	    }

	    a:hover {
		color: blue;
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
	    background-color: blue;
	    transition: transform 0.5s ease;
	}

	li:hover::after {
	    transform: scaleX(1);
	}
    }
}

#main-footer {
    border-top: solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

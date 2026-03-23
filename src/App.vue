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
			<RouterLink to="/">Home</RouterLink>
		    </li>
		    <li>
			<RouterLink to="/about">About</RouterLink>
		    </li>
		    <li>
			<RouterLink to="/games">Games</RouterLink>
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
	gap: 0.5em;
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

</style>

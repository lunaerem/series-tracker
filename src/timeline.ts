export async function loadJSON(timeline: HTMLElement, filepath: String) {
  fetch(filepath)
    .then((response) => response.json())
    .then((data) => {
      data.games.forEach((element) => {
        let game = document.createElement("div");
        game.appendChild(document.createTextNode(element.title));
        game.classList.add("timeline-entry");
        game.style.right = "0";
        timeline.appendChild(game);
      });
    })
    .catch(console.error);
}

export function moveLeft() {
  console.log("Left");
}

export function moveRight() {
  console.log("Right");
}

let left = null;
let center = null;
let right = null;
let games = null;
let i = 0;

export async function loadJSON(filepath: String) {
  fetch(filepath)
    .then((response) => response.json())
    .then((data) => {
      constructNode(data.games[0], "center");
      constructNode(data.games[1], "right");

      i = 0;
      games = data.games;
    })
    .catch(console.error);
}

function constructNode(entry: Object, direction: String) {
  const timeline = document.querySelector(".timeline-inner");
  let game = document.createElement("div");
  game.appendChild(document.createTextNode(entry.title));
  game.classList.add("timeline-entry");

  switch (direction) {
    case "left":
      game.style.left = "0";
      left = game;
      break;
    case "center":
      game.style.left = "50%";
      center = game;
      break;
    case "right":
      game.style.right = "0";
      right = game;
      break;
    default:
      break;
  }

  timeline.appendChild(game);
}

export function moveRight() {
  if (i + 1 < games.length) {
    if (left != null || left != undefined) {
      left.remove();
    }
    left = center;
    left.style.left = "0";
    center = right;
    center.style.left = "50%";
    center.style.removeProperty("right");

    if (i + 2 < games.length) {
      constructNode(games[i + 2], "right");
    } else {
      right = null;
    }

    i++;
  }
}

export function moveLeft() {
  if (i) {
    if (right != null || right != undefined) {
      right.remove();
    }
    right = center;
    right.style.right = "0";
    right.style.removeProperty("left");
    center = left;
    center.style.left = "50%";

    if (i == 1) {
      left = null;
    } else {
      constructNode(games[i - 2], "left");
    }

    i--;
  }
}

export function removeSpoiler(event: any) {
  event.currentTarget.classList.remove("spoiler");
}

export function revealAllSpoilers(event: any) {
  let spoilers = Array.from(document.getElementsByClassName("spoiler"));

  spoilers.forEach((element) => {
    element.classList.remove("spoiler");
  });
}

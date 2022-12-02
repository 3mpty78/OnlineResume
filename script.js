const lastName = document.querySelector(".last");
const firstName = document.querySelector(".first");
const border = document.querySelector(".border");
const loader = document.querySelector(".loaderContainer");
const game = document.querySelector(".gameContainer");

// Load event for name & border

window.addEventListener("load", () => {
  lastName.style.marginTop = "5rem";
  firstName.style.marginTop = "0";
  border.style.width = "75%";
});

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
});

// Click events

game.addEventListener("click", () => {
  window.open("https://3mpty78.github.io");
});

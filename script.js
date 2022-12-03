const lastName = document.querySelector(".last");
const firstName = document.querySelector(".first");
const border = document.querySelector(".border");
const loader = document.querySelector(".loaderContainer");
const game = document.querySelector(".gameContainer");

// Timeline animation

const ratio = 0.6;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};
const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll(".reveal").forEach(function (appear) {
  observer.observe(appear);
});

// Load event for name & border

window.addEventListener("load", () => {
  lastName.style.marginLeft = "5rem";
  firstName.style.marginLeft = "15%";
  border.style.width = "75%";
});

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
});

// Click events

game.addEventListener("click", () => {
  window.open("https://3mpty78.github.io");
});

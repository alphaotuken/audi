// Targeting DOM Elements

let menuCover = document.querySelector(".menuCover"),
menuOpener = document.querySelector("#menu-opener"),
menuCloser = document.querySelector(".closeBtn");


// Event Listeners

menuOpener.addEventListener("click", () => {
    menuCover.classList.add("menuCover-visible");
});

menuCloser.addEventListener("click", () => {
    menuCover.classList.remove("menuCover-visible")
})
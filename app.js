// Targeting DOM Elements

let menuCover = document.querySelector(".menuCover"),
menuOpener = document.querySelector("#menu-opener"),
menuCloser = document.querySelector(".closeBtn"),
carVideo = document.querySelector("video");


// Event Listeners

menuOpener.addEventListener("click", () => {
    menuCover.classList.add("menuCover-visible");
});

menuCloser.addEventListener("click", () => {
    menuCover.classList.remove("menuCover-visible");
});

window.addEventListener("wheel", e => {
    if(e.deltaY > 0){
        carVideo.play();
        setTimeout(() => {
            carVideo.pause();
        },1000);
    } else {
        carVideo.currentTime -= 1;
    }
});

document.addEventListener("contextmenu", (event) => event.preventDefault());
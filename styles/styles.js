//Hero img
const screenWidth = window.screen.width <= 640;

screenWidth ?
    document.getElementById("hero").src = "images/image-hero-mobile.png" :
    document.getElementById("hero").src = "images/image-hero-desktop.png";

//CSS Drop
const btnDropCSS = document.querySelectorAll(".btn-drop-CSS");
const dropCSS = document.querySelectorAll(".drop-CSS");
const liCSS = document.querySelectorAll(".li-drop");

btnDropCSS.forEach(e => {
    e.classList.add("flex", "items-center", "text-center", "gap-2", "hover:text-[#141414]");
});

dropCSS.forEach(e => {
    e.classList.add("flex", "flex-col", "gap-[20px]", "hidden", "mt-[35px]", "ml-[20px]");
});

liCSS.forEach(e => {
    e.classList.add("flex", "items-center", "text-center", "gap-[15px]", "hover:text-[#141414]");
});

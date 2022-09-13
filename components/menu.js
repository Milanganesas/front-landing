const menuBtn = document.getElementById("menu-btn");
const menuCloseBtn = document.getElementById("menu-close-btn");
const menuContent = document.getElementById("menu-content");
let menuOpen = false;

const open = () => {
    if(!menuOpen) {
        document.body.classList.toggle("backdrop-brightness-50");
        menuContent.classList.remove("hidden");
        menuContent.classList.replace("translate-x-full", "translate-x-0");
        menuOpen = true;
        
    } else {
        document.body.classList.toggle("backdrop-brightness-50");
        menuContent.classList.add("hidden");
        menuContent.classList.replace("translate-x-0", "translate-x-full");
        menuOpen = false;
    }; 
};

menuBtn.addEventListener("click", open);
menuCloseBtn.addEventListener("click", open)
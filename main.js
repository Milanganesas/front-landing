//Variables
const screenWidth = window.screen.width <= 640;

//Menu
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

//Feature && Company
const btnFeatures = document.getElementById("features-arrow");
const btnCompany = document.getElementById("company-arrow");
const arrowFeatures = btnFeatures.children[0];
const arrowCompany = btnCompany.children[0];
const dropFeatures = document.getElementById("features-drop") 
const dropCompany = document.getElementById("company-drop")
let featuresOpen = false;
let companyOpen = false;

arrowFeatures.src = "images/icon-arrow-down.svg";
arrowCompany.src = "images/icon-arrow-down.svg";

const arrowOpen = (e) => {
    const btn = e.target.id;
    
    if(btn === "features-arrow") { 
        if(!featuresOpen) {
            arrowFeatures.src = "images/icon-arrow-up.svg";
            dropFeatures.classList.add("lg:absolute", "lg:left-0", "lg:bg-[#FAFAFA]", "lg:drop-shadow-2xl", "lg:rounded-2xl", "lg:p-5");
            dropFeatures.classList.remove("hidden");
            featuresOpen = true;
        } else {
            arrowFeatures.src = "images/icon-arrow-down.svg";
            dropFeatures.classList.remove("lg:absolute", "lg:left-0", "lg:bg-[#FAFAFA]", "lg:drop-shadow-2xl", "lg:rounded-2xl", "lg:p-5");
            dropFeatures.classList.add("hidden");
            featuresOpen = false;
        }
    } else {
        if(!companyOpen) {
            arrowCompany.src = "images/icon-arrow-up.svg";
            dropCompany.classList.add("lg:absolute", "lg:bg-[#FAFAFA]", "lg:drop-shadow-2xl", "lg:rounded-2xl", "lg:p-5");
            dropCompany.classList.remove("hidden");
            companyOpen = true;
        } else {
            arrowCompany.src = "images/icon-arrow-down.svg";
            dropCompany.classList.remove("lg:absolute", "lg:bg-[#FAFAFA]", "lg:drop-shadow-2xl", "lg:rounded-2xl", "lg:p-5");
            dropCompany.classList.add("hidden");
            companyOpen = false;
        }
    }
};

btnFeatures.addEventListener("click", (e) => arrowOpen(e));
btnCompany.addEventListener("click", (e) => arrowOpen(e));


// Hero image
screenWidth ?
    document.getElementById("hero").src = "images/image-hero-mobile.png" :
    document.getElementById("hero").src = "images/image-hero-desktop.png";

// CSS
const btnDropCSS = document.querySelectorAll(".btn-drop-CSS");
const dropCSS = document.querySelectorAll(".drop-CSS");
const liCSS = document.querySelectorAll(".li-drop");

btnDropCSS.forEach(e => {
    e.classList.add("flex", "items-center", "text-center", "gap-2", "hover:text-[#141414]")
});

dropCSS.forEach(e => {
    e.classList.add("flex", "flex-col", "gap-[20px]", "hidden", "mt-[35px]", "ml-[20px]")
});

liCSS.forEach(e => {
    e.classList.add("flex", "items-center", "text-center", "gap-[15px]", "hover:text-[#141414]")
})




const btnFeatures = document.getElementById("features-arrow");
const btnCompany = document.getElementById("company-arrow");
const arrowFeatures = btnFeatures.children[0];
const arrowCompany = btnCompany.children[0];
const dropFeatures = document.getElementById("features-drop"); 
const dropCompany = document.getElementById("company-drop");
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
            dropFeatures.classList.replace("opacity-0", "opacity-100");
            featuresOpen = true;
        } else {
            arrowFeatures.src = "images/icon-arrow-down.svg";
            dropFeatures.classList.remove("lg:absolute", "lg:left-0", "lg:bg-[#FAFAFA]", "lg:drop-shadow-2xl", "lg:rounded-2xl", "lg:p-5");
            dropFeatures.classList.replace("opacity-100", "opacity-0");
            featuresOpen = false;
        }
    } else {
        if(!companyOpen) {
            arrowCompany.src = "images/icon-arrow-up.svg";
            dropCompany.classList.add("lg:absolute", "lg:bg-[#FAFAFA]", "lg:drop-shadow-2xl", "lg:rounded-2xl", "lg:p-5");
            dropCompany.classList.replace("opacity-0", "opacity-100");
            companyOpen = true;
        } else {
            arrowCompany.src = "images/icon-arrow-down.svg";
            dropCompany.classList.remove("lg:absolute", "lg:bg-[#FAFAFA]", "lg:drop-shadow-2xl", "lg:rounded-2xl", "lg:p-5");
            dropCompany.classList.replace("opacity-100", "opacity-0");
            companyOpen = false;
        }
    }
};

btnFeatures.addEventListener("click", (e) => arrowOpen(e));
btnCompany.addEventListener("click", (e) => arrowOpen(e));
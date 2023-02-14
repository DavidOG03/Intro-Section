const featuresDsk = document.querySelector(".desktopNav .features a");
const featuresMob = document.querySelector(".mobHead .mobNav .features a");
const feature = document.querySelector(".desktopNav .features ul");
const mobFeature = document.querySelector(".mobHead .mobNav .features ul");
const companyDsk = document.querySelector(".desktopNav .company a");
const companyMob = document.querySelector(".mobHead .mobNav .company a");
const company = document.querySelector(".desktopNav .company ul");
const mobCompany = document.querySelector(".mobHead .mobNav .company ul");
const arrow1 = document.querySelector(" .desktopNav .features .fa-chevron-down")
const arrowMob1 = document.querySelector(".mobHead .mobNav .features .fa-chevron-down")
const arrow2 = document.querySelector(".desktopNav .company .fa-chevron-down")
const arrowMob2 = document.querySelector(".mobHead .mobNav .company .fa-chevron-down")
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const navBar = document.querySelector(".mobNav");

featuresDsk.addEventListener("click", () => {
    feature.classList.toggle("show");
    document.querySelector(".desktopNav .features a").classList.toggle("active");
    arrow1.classList.toggle("active");
});

featuresMob.addEventListener("click", () => {
    mobFeature.classList.toggle("reveal");
    document.querySelector(".mobNav .features a").classList.toggle("active");
    arrowMob1.classList.toggle("active");
});


companyDsk.addEventListener("click", () => {
    company.classList.toggle("show");
    document.querySelector(".desktopNav .company a").classList.toggle("active");
    arrow2.classList.toggle("active");

});

companyMob.addEventListener("click", () => {
    mobCompany.classList.toggle("reveal");
    document.querySelector(".mobNav .company a").classList.toggle("active");
    arrowMob2.classList.toggle("active");
});

menuBtn.addEventListener("click", () => {
    navBar.classList.add("show");
    document.querySelector("body").style.background = "rgba(0,0,0,0.5)";
    document.querySelector("#mobileImg").style.filter = "brightness(50%)";
    document.querySelector("body").style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
    navBar.classList.remove("show");
    arrowMob1.classList.remove("active");
    arrowMob2.classList.remove("active");
    mobFeature.classList.remove("reveal");
    mobCompany.classList.remove("reveal");
    document.querySelector("body").style.background = "transparent";
    document.querySelector("#mobileImg").style.filter = "brightness(100%)";
    document.querySelector("body").style.overflow = "scroll";
})


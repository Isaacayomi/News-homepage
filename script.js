const openMenu = document.querySelector(".open__icon");
const closeMenu = document.querySelector(".close__menu");
// const links = 
const navLinks = document.querySelector(".nav__links");
const navLink = document.querySelectorAll(".nav__link");
const bodyElement = document.querySelector("body");
const mainElement = document.querySelector("main");

const openNav = () => {
  if (navLinks.classList.contains("hide")) {
    navLinks.classList.remove("hide");
    bodyElement.style.overflow = "hidden";
    mainElement.style.opacity = "0.5";
  }
};

const closeNav = () => {
  if (!navLinks.classList.contains("hide")) {
    navLinks.classList.add("hide");
    mainElement.style.opacity = "1";
  }
};



openMenu.addEventListener("click", openNav);
closeMenu.addEventListener("click", closeNav);
mainElement.addEventListener("click", closeNav);

const openMenu = document.querySelector(".open__icon");
const closeMenu = document.querySelector(".close__menu");
const navLinks = document.querySelector(".nav__links");
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

// Scrolling through the nav links start
document.querySelector(".links").addEventListener("click", function (e) {
  e.preventDefault();

  console.log(e.target);
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }

  bodyElement.style.overflow = "scroll";
  navLinks.classList.add("hide");
  mainElement.style.opacity = "1";
});
//Scrolling through the nav links end

openMenu.addEventListener("click", openNav);
closeMenu.addEventListener("click", closeNav);
mainElement.addEventListener("click", closeNav);

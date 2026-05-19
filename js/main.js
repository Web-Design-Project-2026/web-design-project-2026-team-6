// Javascript that is used on all pages

//ELEMENT PATH
const menuButton = document.getElementById("hamburger-menu-button");
const menuIcon = document.querySelector(".hamburger-icon");
const navLinks = document.getElementById("nav-links");

//ASSET PATH
const hamburgerOpen = "assets/hamburger-closed.svg";
const hamburgerClosed = "assets/hamburger.svg";

//VARIABLES
let open = false;

menuButton.addEventListener("click", openCloseHamburgerMenu);

function openCloseHamburgerMenu() {
  if (open === false) {
    navLinks.style.display = "flex";
    menuIcon.src = hamburgerOpen;
    open = true;
  } else {
    navLinks.style.display = "none";
    menuIcon.src = hamburgerClosed;
    open = false;
  }
}

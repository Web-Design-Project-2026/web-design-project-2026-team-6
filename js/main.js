// Javascript that is used on all pages

//ELEMENT PATH
const menuButton = document.getElementById("hamburger-menu-button");
const navLinks = document.getElementById("nav-links");

//VARIABLES
let open = false;

menuButton.addEventListener("click", openCloseHamburgerMenu);

function openCloseHamburgerMenu() {
  if (open === false) {
    navLinks.style.display = "flex";
    open = true;
  } else {
    navLinks.style.display = "none";
    open = false;
  }
}

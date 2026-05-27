// Javascript that is used on all pages

//ELEMENT PATH
const header = document.querySelector(".site-nav");
const footer = document.querySelector(".footer");
const menuButton = document.getElementById("hamburger-menu-button");
const menuIcon = document.querySelector(".hamburger-icon");
const navLinks = document.getElementById("nav-links");

//ASSET PATH
const hamburgerOpen = "assets/hamburger-closed.svg";
const hamburgerClosed = "assets/hamburger.svg";

//VARIABLES
let open = false;
let turn = 0;

//hamburger menu
menuButton.addEventListener("click", openCloseHamburgerMenu);

function openCloseHamburgerMenu() {
  if (open === false) {
    navLinks.style.display = "flex";
    menuIcon.style.transform = "rotate(360deg)";
    menuIcon.src = hamburgerOpen;
    open = true;
  } else {
    navLinks.style.display = "none";
    menuIcon.style.transform = "rotate(0deg)";
    menuIcon.src = hamburgerClosed;
    open = false;
  }
}

//MAP
var map = L.map("map").setView([57.782633, 14.169606], 18);
var marker = L.marker([57.782633, 14.16955]).addTo(map);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const hamburgerButton = document.querySelector(".hamburger");
const menu = document.querySelector(".nav");
let navOpen = false;
hamburgerButton.addEventListener("click", toggleNav);

function toggleNav() {
  if (navOpen == false) {
    menu.style.display = "inline";
    navOpen = true;
  } else {
    menu.style.display = "none"
    navOpen = false;
  }
}

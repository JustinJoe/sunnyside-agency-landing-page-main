const menu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");
console.dir(nav);

function displayHandler() {
  nav.classList.toggle("show");
}

menu.addEventListener("click", displayHandler);

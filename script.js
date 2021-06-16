const menu = document.querySelector(".hamburger-menu");
const welcome = document.querySelector(".welcome");
const nav = document.querySelector(".nav");
console.dir(nav);

function displayHandler() {
  nav.classList.toggle("visible");
  welcome.classList.toggle("invisible");
}

menu.addEventListener("click", displayHandler);

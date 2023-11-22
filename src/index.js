import renderNavbar from "./navbar.js"
import renderHomePageElements from "./home.js"
import renderMenuPageElements from "./menu.js"
import renderContactPageElements from "./contact.js"
import './style.css';

renderNavbar();
renderHomePageElements();

const conatianer = document.querySelector("#content");
const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

homeBtn.addEventListener("click", () => {
    conatianer.textContent = "";
    renderHomePageElements();
})

menuBtn.addEventListener("click", () => {
    conatianer.textContent = "";
    renderMenuPageElements();
})

contactBtn.addEventListener("click", () => {
    conatianer.textContent = "";
    renderContactPageElements();
})
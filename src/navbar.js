export default function createNavbar() {
    const conatianer = document.querySelector("#content");
    const body = document.querySelector("body");

    const navbar = document.createElement("nav");
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

    homeBtn.className = "homeBtn";
    homeBtn.textContent = "Home";

    menuBtn.className = "menuBtn";
    menuBtn.textContent = "Menu";

    contactBtn.className = "contactBtn";
    contactBtn.textContent = "Contact";

    navbar.className = "navbar";
    navbar.append(homeBtn);
    navbar.append(menuBtn);
    navbar.append(contactBtn);

    body.insertBefore(navbar, conatianer);

}
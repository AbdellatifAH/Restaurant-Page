export default function createMenuPageElements() {
    const container = document.querySelector("#content");

    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.textContent = `food ${i + 1} ### $`;
        ul.append(li);
    }

    h1.textContent = "Menu";

    container.append(h1);
    container.append(ul);

}
import restaurantImage from './Restaurant.jpg';

const conatianer = document.querySelector("#content");

export default function createPageElements() {
    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h1.textContent = "Restaurant Name";
    img.src = restaurantImage;
    img.alt = "Restaurant Image";
    h2.textContent = "Great Restaurant";
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis vel molestiae error! Quisquam, et. Animi, error cum, corporis debitis rem dicta aliquid natus dolor aspernatur labore ipsum, possimus tempore."

    conatianer.append(h1);
    conatianer.append(img);
    conatianer.append(h2);
    conatianer.append(p);

}
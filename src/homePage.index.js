import imgBurger from './burger.png';
import './homePage.css';

const content = document.querySelector("#content");

const burgerImg = document.createElement("img");
const homeH2 = document.createElement("h2");
const homePara = document.createElement("p");
const homeButton = document.createElement("button");

burgerImg.src = imgBurger;
burgerImg.alt = 'Burger Image';
burgerImg.id = 'burger';

homeH2.textContent = 'Welcome To Burger Bliss!';

homePara.id = 'homePara';
homePara.textContent = `
                Enjoy burgers crafted with the freshest
                ingredients, from premium meats to farm-fresh veggies. Our cozy,
                family-friendly atmosphere is perfect for savoring classic and
                gourmet creations.`;

homeButton.classList.add("exploreBtn");
homeButton.id = 'menuBtn';
homeButton.textContent = 'Explore Our Menu';

export default function displayHome(){
    content.innerHTML = '';

    content.appendChild(burgerImg);
    content.appendChild(homeH2);
    content.appendChild(homePara);
    content.appendChild(homeButton);

}
import './style.css';
import home from './homePage.index.js';
import menu from './menuPage.index.js';
import about from './aboutPage.index.js';

const homeButton = document.querySelector("#homeBtn");
const menuButton = document.querySelector("#menuBtn");
const aboutButton = document.querySelector("#aboutBtn");

home();
homeButton.style.color = 'red';

homeButton.addEventListener('click', () => {
    home();

    homeButton.style.color = 'red';
    menuButton.style.color = '';
    aboutButton.style.color = '';
})

menuButton.addEventListener('click', () => {
    menu();

    homeButton.style.color = '';
    menuButton.style.color = 'red';
    aboutButton.style.color = '';
})

aboutButton.addEventListener('click', () => {
    about();

    homeButton.style.color = '';
    menuButton.style.color = '';
    aboutButton.style.color = 'red';
})

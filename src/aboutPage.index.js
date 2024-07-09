import './aboutPage.css';

const content = document.querySelector("#content");



export default function displayAbout(){
    content.innerHTML = `
                <div class="aboutUS">
                <p>About Us</p>
                <span>Blah Blah Blah...</span>
            </div>`;
}

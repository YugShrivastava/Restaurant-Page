import "../styles/menuPage.css";

const content = document.querySelector("#content");
const contentBox = document.createElement("div");
contentBox.classList.add("contentBox");

for (let i = 0; i < 9; i++) {
    const card = document.createElement("div");
    const heading = document.createElement("h3");
    const para = document.createElement("p");

    heading.textContent = "Some random ass Burger";
    para.textContent = "$400";

    card.appendChild(heading);
    card.appendChild(para);

    card.classList.add("orderCards");

    contentBox.appendChild(card);
}

export default function displayMenu() {
    content.innerHTML = "";
    content.appendChild(contentBox);
}

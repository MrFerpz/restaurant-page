import "./style.css";
import Background from "./images/yogbackground.png";
import Black from "./images/black.png";

const body = document.querySelector("body");

const header = document.querySelector("header");
header.setAttribute("class", "header");

const navBar = document.querySelector("nav");
navBar.setAttribute("class", "nav-bar");

const backgroundContainer = document.createElement("div");
backgroundContainer.setAttribute("class", "background-container")

const titleContainer = document.createElement("div");
titleContainer.setAttribute("class", "title-container");

const title = document.createElement("h1");
title.setAttribute("id", "title");
title.innerHTML = "Mo's Yoghurt";
titleContainer.appendChild(title);
body.appendChild(titleContainer);

const blackImage = new Image();
blackImage.src = Black;
blackImage.setAttribute("id", "black-background")
backgroundContainer.appendChild(blackImage);

const myBackground = new Image();
myBackground.src = Background;
myBackground.setAttribute("id", "background");
backgroundContainer.appendChild(myBackground);

body.insertBefore(backgroundContainer, header);

const textContainer = document.createElement("div");
textContainer.setAttribute("class", "text-container");

const yogRev = document.createElement("div");
yogRev.setAttribute("class", "yogrev");
yogRev.innerHTML = "One day, yoghurt is going to rule the world. Join us in the yoghurt revolution. Be on the right side of history.";
textContainer.appendChild(yogRev);

body.appendChild(textContainer);


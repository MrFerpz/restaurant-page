import "./style.css";
import Background from "./images/yogbackground.png";

const body = document.querySelector("body");

const title = document.createElement("h1");
title.setAttribute("id", "title");
title.innerHTML = "Mo's Yoghurt";
body.appendChild(title);

const myBackground = new Image();
myBackground.src = Background;
myBackground.setAttribute("id", "background");
body.appendChild(myBackground);

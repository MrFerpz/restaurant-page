function openMenu() {
    // const backdrop = document.createElement("div");
    // const textContainerRef = document.querySelector(".text-container");
    // backdrop.setAttribute("id", "menu-backdrop");
    // backdrop.innerHTML = "Yeh boi";
    // textContainerRef.appendChild(backdrop);
    let boxAccess = document.querySelector(".yogrev");
    boxAccess.innerHTML = "Here are your options: <br> Strawberry Yoghurt <br> Chocolate Yoghurt <br> Raspberry Yoghurt"
}

function openContact() {
    let boxAccess = document.querySelector(".yogrev");
    boxAccess.innerHTML = "Contact us at: <br> 0128091-YOG"
}

function openHome() {
    let boxAccess = document.querySelector(".yogrev");
    boxAccess.innerHTML = "Welcome to YOGZ, your one-stop-shop for yogs!"
}

export { openMenu };
export { openContact };
export { openHome };
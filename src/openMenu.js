function openMenu() {
    const backdrop = document.createElement("div");
    const textContainerRef = document.querySelector(".text-container");
    backdrop.setAttribute("id", "menu-backdrop");
    backdrop.innerHTML = "Yeh boi";
    textContainerRef.appendChild(backdrop);
}

export { openMenu };
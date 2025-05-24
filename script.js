const aboutBtn = document.getElementById("about-btn");
const aboutDesc = document.getElementById("about");
let fadeTimeout;
let clearTextTimeout;

aboutBtn.addEventListener("click", () => {
    clearTimeout(fadeTimeout);
    clearTimeout(clearTextTimeout);

    aboutDesc.innerHTML = "I'm a frontend developer who enjoys building websites and learning new things along the way. I'm always exploring new tools and techniques to improve my craft.";
    aboutDesc.classList.remove("hidden");

    fadeTimeout = setTimeout(() => {
        aboutDesc.classList.add("hidden");

        clearTextTimeout = setTimeout(() => {
            aboutDesc.innerHTML = "";
        }, 1000);
    }, 7000);
});

window.addEventListener('load', () => {
    const heroContainer = document.querySelector(".hero-container");
    heroContainer.classList.add("loaded");
})

const iconHam = document.querySelectorAll(".header__nav--ham");
const menuOpen = document.querySelector(".header__nav--ul");

iconHam.forEach((ham) => {
    ham.addEventListener("click", openMenu);
});

function openMenu() {
    iconHam.forEach((icon) => {
        icon.classList.toggle("header__nav--inactivate");
    })
    menuOpen.classList.toggle("header__nav--inactivate");
}
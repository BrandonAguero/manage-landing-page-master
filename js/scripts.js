const iconHamburger = document.querySelector(".header__nav--hamburger");
const iconHamburgerClose = document.querySelector(".header__nav--hamclose");
const openCard = document.querySelectorAll(".header__inactivate");

iconHamburger.addEventListener("click", openMenuOptions);
iconHamburgerClose.addEventListener("click", openMenuOptions);

function openMenuOptions() {
    openCard.forEach(item => {
        item.classList.toggle("header__inactivate");
    })
    iconHamburger.classList.toggle("header__inactivate");
}
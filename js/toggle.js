const btn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const link = document.querySelector(".navbar__link");

function menubarToggle() {
    menu.classList.toggle("active");
    link.classList.toggle("active");
    if (menu.classList.contains("active")) {
        btn.style.color = "var(--second-font-color)";
    } else {
        btn.style.color = "var(--primary-font-color)";
    }
}

btn.addEventListener("click", menubarToggle);

// Закрытие поля с доставкой -------------------------------------------------------------
let shipping = document.querySelector(".shipping");
let shippingClose = document.querySelector(".shipping__close");
let header = document.querySelector(".header");

const closeShipping = () => {
    shipping.classList.add("shipping_closed");
    header.classList.add("header_top");
};

shippingClose.addEventListener("click", closeShipping);

if (window.matchMedia("(max-width: 991px)").matches) {
    closeShipping();
}
// Закрытие поля с доставкой -------------------------------------------------------------

// Открытие меню----------------------------------------------------------------------------
let toggleSidebar = document.querySelector(".header__toggle-sidebar");
let sidebar = document.querySelector(".header-nav ");
let body = document.querySelector("body");
let headerNavItem = document.querySelectorAll(".header-nav__item");

toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("header-nav_active");
    headerNavItem.forEach((element) => {
        element.classList.toggle("animate__animated");
        element.classList.toggle("animate__backInDown");
    });

    // body.classList.toggle("lock-scroll");
});

if (sidebar.clientHeight > "58") {
    // sidebar.style.bottom = "-118px";
}
console.log(sidebar.offsetHeight);

// Открытие меню----------------------------------------------------------------------------

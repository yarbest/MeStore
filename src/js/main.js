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

toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("header-nav_active");
    // body.classList.toggle("lock-scroll");
});
// Открытие меню----------------------------------------------------------------------------

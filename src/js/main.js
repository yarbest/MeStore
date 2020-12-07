// Закрытие поля с доставкой -------------------------------------------------------------
let shipping = document.querySelector(".shipping");
let shippingClose = document.querySelector(".shipping__close");
let header = document.querySelector(".header");

const closeShipping = () => {
    shipping.classList.add("shipping_closed");
    header.classList.add("header_top");
};

shippingClose.addEventListener("click", closeShipping);

if (window.matchMedia("(max-width: 1199px)").matches) {
    closeShipping();
}
// /Закрытие поля с доставкой -------------------------------------------------------------

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
// /Открытие меню----------------------------------------------------------------------------

$(document).ready(function () {
    //preloader------------------------------------------------------------------
    // $("#cube-loader").fadeOut();
    ///preloader------------------------------------------------------------------

    //slider------------------------------------------------------------------
    $(".featured-slider").slick({
        prevArrow: $(".slider-arrows__prev"), //назначаем кастомные стрелки на роль переключателей слайдера
        nextArrow: $(".slider-arrows__next"),
        infinite: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    // /slider------------------------------------------------------------------
});

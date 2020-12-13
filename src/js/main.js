// Закрытие поля с доставкой -------------------------------------------------------------
let shipping = document.querySelector(".shipping");
let shippingClose = document.querySelector(".shipping__close");
let header = document.querySelector(".header");

const closeShipping = () => {
    shipping.classList.add("shipping_closed");
    header.classList.add("header_top");
};

const closeShippingOnPhone = () => {
    shipping.classList.add("shipping_d-none");
    header.classList.add("header_top");
};

shippingClose.addEventListener("click", closeShipping);

if (window.matchMedia("(max-width: 1199px)").matches) {
    closeShippingOnPhone();
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

// /Открытие меню----------------------------------------------------------------------------

//Функция для поддержки webp в css -------------------------------------------------------
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector("body").classList.add("webp");
    } else {
        document.querySelector("body").classList.add("no-webp");
    }
});
//Функция для поддержки webp в css -------------------------------------------------------

$(document).ready(function () {
    //preloader------------------------------------------------------------------
    $("#cube-loader").fadeOut();
    //preloader------------------------------------------------------------------

    // TILT --------------------------------------------------------------------------
    if (window.matchMedia("(min-width: 1200px)").matches) {
        $(".hero__title").tilt({
            speed: 6000,
            transition: true,
        });

        $(".featured-slide__image-wrap").tilt({
            speed: 6000,
            transition: true,
        });

        $(".news-item").tilt({
            maxTilt: 10,
            speed: 6000,
            transition: true,
        });

        $(".banner").tilt({
            maxTilt: 10,
            speed: 6000,
            transition: true,
        });
    }
    // TILT --------------------------------------------------------------------------

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
                    slidesToScroll: 1,
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

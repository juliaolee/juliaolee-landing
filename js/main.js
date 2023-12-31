
$(document).ready(function () {
    $('.portfolio__slider').slick({
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: false,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    });
});
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
});

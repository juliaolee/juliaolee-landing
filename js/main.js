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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});
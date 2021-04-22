$(document).ready(function() {

var projectSlider = new Swiper('.projects__slider', {
        loop: false,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        navigation: {
            nextEl: '.projects__button--next',
            prevEl: '.projects__button--prev',
        },
        pagination: {
        el: '.projects__pagination',
        clickable: true,
        dynamicBullets: true,
        },
        slidesPerView: 3,
        spaceBetween: 50,
        direction: 'horizontal'
    });
});
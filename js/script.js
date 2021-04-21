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
        slidesPerView: 'auto',
        direction: 'horizontal'
    });
});
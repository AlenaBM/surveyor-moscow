$(document).ready(function() {
  
var projectSlider = new Swiper('.project-slider', {
        loop: false,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        navigation: {
            nextEl: '.project__button--next',
            prevEl: '.project__button--prev',
        },
        slidesPerView: 'auto',
        breakpoints: {
        // when window width is >= "N"px
        568: {
        slidesPerView: 'auto',
        direction: 'horizontal',
        },
        319: {
        slidesPerView: 4,
        direction: 'vertical',
        },
        } 
    });
});
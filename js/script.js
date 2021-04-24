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
        direction: 'horizontal',
        speed: 800,
    });
    $("#aboutskills").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#portfolio").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#contacts").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#arrow-down").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    // $("#sticky").on("click","a", function (event) {
    //     event.preventDefault();
    //     var id  = $(this).attr('href'),
    //         top = $(id).offset().top;
    //     $('body,html').animate({scrollTop: top}, 1000);
    // });
    var menuButton = $(".experience__item__SRM");
    menuButton.on("click", function() {
        $(".experience__hiddenlist").toggleClass("experience__hiddenlist__open")
        $(".experience__arrow__first").toggleClass("experience__arrow__move")
    });
    $("#address").suggestions({
          token: "19ecb0b4e6bf221c10c44a16cf56866e36da5189",
          type: "ADDRESS",
          /* Вызывается, когда пользователь выбирает одну из подсказок */
          onSelect: function (suggestion) {
            console.log(suggestion);
          },
        });
    var modalButton = $("[data-toggle=modal]");
    var closeModalButton = $(".modal__close");
    var closeModalOverlay = $(".modal__overlay");
    modalButton.on('click', openModal);
    closeModalButton.on('click', closeModal);
    closeModalOverlay.on('click', closeModal);

    function openModal() {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__request");
        modalOverlay.addClass("modal__overlay--visible");
        modalDialog.addClass("modal__request--visible")
    }

    function closeModal(event) {
        event.preventDefault();
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__request");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__request--visible")
    }
 
    $(window).scroll(function(){
    if ($(this).scrollTop() > 1700) {
    $('.arrow-sticky').fadeIn();
    } else {
    $('.arrow-sticky').fadeOut();
    }
    });
    
    $('.arrow-sticky').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
    });
    
});
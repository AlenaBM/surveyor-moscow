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
        direction: 'horizontal',
        speed: 800,
        breakpoints: {
            // when window width is >= Npx
            320: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30
            },
            // when window width is >= Npx
            370: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 100
            },
            // when window width is >= Npx
            768: {
            slidesPerView: 2,
            spaceBetween: 40
            },
            // when window width is >= Npx
            992: {
            slidesPerView: 3,
            spaceBetween: 30
            },
            // when window width is >= Npx
            1200: {
            slidesPerView: 3,
            spaceBetween: 40
            },
            // when window width is >= Npx
            1277: {
            slidesPerView: 3,
            spaceBetween: 50,
            }
        }
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
    $("#service").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#portf").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#cont").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
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
        var modalBody = $(".body");
        modalOverlay.addClass("modal__overlay--visible");
        modalDialog.addClass("modal__request--visible");
        modalBody.addClass("body__opened-modal");
    }

    function closeModal(event) {
        event.preventDefault();
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__request");
        var modalThanks = $(".modal-thanks");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__request--visible");
        modalThanks.removeClass("modal-thanks__active");
        var modalBody = $(".body");
        modalBody.removeClass("body__opened-modal");
    }
 
    $(window).scroll(function(e){
    if ($(this).scrollTop() > 1700) {
    $('.arrow-sticky').fadeIn();
    } else {
    $('.arrow-sticky').fadeOut();
    }
    });
    $(window).resize(function() {
    if (document.body.clientWidth < 994) {
    $('.arrow-sticky').remove();
    }
    });
    
    $('.arrow-sticky').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
    });
    $(document).ready(function() {
        $(".modal__input__num").mask('+7 (000) 000-00-00')
    });
    $(document).keydown(function(event) {
        if (event.keyCode == 27) {
            var modalOverlayEsc = $(".modal__overlay");
            var modalDialogEsc = $(".modal__request");
            modalOverlayEsc.removeClass("modal__overlay--visible");
            modalDialogEsc.removeClass("modal__request--visible")
        }
    });
    $('.form').each(function() {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Введите имя",
                    minlength: "Имя не должно быть короче двух букв",
                },
                email: {
                    required: "Введите email адрес",
                    email: "Email адрес должен быть подобного формата: name@domain.com",
                },
                phone: {
                    required: "Введите номер телефона",
                    minlength: "Пожалуйста, введите полный номер телефона",
                },
            },
        })
    });
});
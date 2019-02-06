"use strict";

// preloader
setInterval(function () {
    var p = $(".preloader");
    p.css("opacity", 0);
    setInterval(function () {
        p.remove();
    }, 1000);
}, 400);

// scroll
$("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 600);
});

// hamgurger;
var hamburger = $(".hamburger");
hamburger.click(function () {
    hamburger.toggleClass("is-active");
    $(".menu").fadeToggle(200);

    // disable scrolling when the menu is active
    if (hamburger.hasClass("is-active")) {

        var winScrollTop = $(window).scrollTop();
        $(window).bind("scroll", function () {
            $(window).scrollTop(winScrollTop);
        });
    } else {
        $(window).off("scroll");
    }
});

$(".menu__link").click(function () {
    $(window).off("scroll");
    hamburger.toggleClass("is-active");
    $(".menu").fadeToggle(200);
});

// Menu position fixed


// Ajax
$('#form').submit(function (event) {
    event.preventDefault();

    $.ajax({
        url: $(this).attr('action'),
        type: $(this).attr('method'),
        contentType: false,
        cache: false,
        dataType: "json",
        data: $(this).serialize(),
        success: function () {
            $('#form').trigger('reset');
            $(".popup").fadeIn();
            $(".popup__success").fadeIn();
        },
        error: function () {
            $(".popup__error").fadeIn();
            $(".popup").fadeIn();
        }
    })
});

$(".popup p::after").click(function() {
    $(".popup").fadeOut();
    $(".popup p").fadeOut();
});

$(".popup").click(function() {
    $(".popup").fadeOut();
    $(".popup p").fadeOut();
});
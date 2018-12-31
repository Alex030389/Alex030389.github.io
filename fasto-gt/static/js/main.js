"use strict";

$(".lang").click(function () {
    $(".lang__switch").toggleClass("lang__switch_rus");
    $(".lang__span").toggleClass("lang__span_selected");
});

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
    // $(".menu").fadeToggle();
    $(".menu").toggleClass("menu_active");

    // disable scrolling when the menu is active
    if (hamburger.hasClass("is-active")) {

        var winScrollTop = $(window).scrollTop();
        $(window).bind("scroll", function () {
            $(window).scrollTop(winScrollTop);
        });
    } else {
        $(window).off("scroll");
    }
})

$(".menu__link").click(function () {
    $(window).off("scroll");
    hamburger.toggleClass("is-active");
    $(".menu").toggleClass("menu_active");
})

// slick slaider
$('.testimonial').slick({
    infinite: true,
    fade: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'></button>"
});

// open and close project
var projects = $(".projects__btn");
projects.click(function () {
    console.log(1);
    if (projects.text() == "All projects") {
        projects.text("close");
    } else {
        projects.text("All projects");
    }
    $(".projects__link:nth-child(n+4)").fadeToggle("200");
});
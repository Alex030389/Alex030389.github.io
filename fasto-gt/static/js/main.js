"use strict";

$(".lang").click(function() {
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

// slick slaider
$('.testimonial').slick({
    infinite: true,
    fade: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'></button>"
});
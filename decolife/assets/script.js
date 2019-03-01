// hamgurger;
var hamburger = $(".hamburger");
hamburger.click(function () {
  hamburger.toggleClass("is-active");
  $(".hamburger-nav-wrap").toggleClass("hamburger-nav-wrap_active");
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

// banner-slider
$('.banner-slider').slick({});

$('.banner-content__control-left').click(function () {
  $('.banner-slider').slick('slickPrev');
});

$('.banner-content__control-right').click(function () {
  $('.banner-slider').slick('slickNext');
});

$('.slick-arrow').remove();

// type-item__slider
$('.type-item__slider').slick({});

$('.slick-prev').remove();
$('.slick-next').text('');

// products prices slider
$('#products').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button class="slick-prev slick-arrow" style=""></button>',
  nextArrow: '<button class="slick-next slick-arrow" style=""></button>',
  responsive: [{
      breakpoint: 1470,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1010,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 755,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1
      }
    },
  ]
});

$('#prices').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-prev slick-arrow" style=""></button>',
  nextArrow: '<button class="slick-next slick-arrow" style=""></button>',
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
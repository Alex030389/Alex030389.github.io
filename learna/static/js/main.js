// высота скролла
var scroll = 80;

// window size
var sizeXl = 1200,
    sizeLg = 992,
    sizeMd = 768,
    sizeSm = 576;

// по скроллу задать главному меню position: fixed
$(document).scroll(function () {
  if ($(document).scrollTop() >= scroll && $(window).width() > sizeMd) {
    $('.js-header').addClass('header_medium');
  } else if ($(document).scrollTop() < scroll) {
    $('.js-header').removeClass('header_medium');
  }
});

// убрать класс из js-lang-header при разрешении меньше sizeMd
$(window).resize(function() {
  removeThemeLang();
});

removeThemeLang();

function removeThemeLang() {
  if($('.js-lang-header') && $(window).outerWidth() <= sizeMd) {
    $('.js-lang-header').removeClass('header_theme_lang');
  } else {
    $('.js-lang-header').addClass('header_theme_lang');
  }
}

// главная навигация с формой поиска
$(window).resize(function() {
  if($(window).width() <= sizeMd) {
    $('.js-header-logo').removeClass('hidden');
    $('.js-nav-box').removeClass('hidden');
    $('.header-search-btn').removeClass('hidden');
    $('.js-header-form-box').removeClass('visible-flex');
    $('.hamburger').removeClass('hidden');
  };
});

$('.header-search-btn').click(function () {
  $('.js-header-logo').addClass('hidden');
  // $('.js-nav-box').addClass('hidden');
  
  if($(window).width() > sizeMd ) {    
    $('.header-search-btn').addClass('hidden');
    $('.js-header-form-box').addClass('visible-flex');
    $('.js-nav-box').addClass('hidden');
    $('.js-header-form__input').focus();
  };

  if($(window).width() <= sizeMd && ($('.hamburger').css('display') == 'block')) {
    $('.hamburger').addClass('hidden');
    $('.js-header-form-box').addClass('visible-flex');
    $('.js-header-form__input').focus();
    console.log(111111);
  } else if($(window).width() <= sizeMd) {
    $('.hamburger').removeClass('hidden');
    $('.js-header-logo').removeClass('hidden');
    $('.js-header-form-box').removeClass('visible-flex');
    console.log(2222);
  };

});
// закрытие формы на десктопе
$('.header-form-box__btn-close').click(function () {
  $('.js-header-logo').removeClass('hidden'); 
  $('.js-nav-box').removeClass('hidden');
  $('.js-header-form-box').removeClass('visible-flex');
  $('.header-search-btn').removeClass('hidden');  
});


// hamburger
$(window).resize(function() {
  $('.overlay').removeClass('overlay_active');
  $('.nav-box').removeClass('nav-box_mobile-active');
  $('body').css('overflow-y', 'scroll');
});

$('.hamburger').click(function() {
  $('.overlay').addClass('overlay_active');
  $('.nav-box').addClass('nav-box_mobile-active');
  $('body').css('overflow-y', 'hidden');
});

$('.nav-box__mobile-hamburger').click(function() {
  $('.overlay').removeClass('overlay_active');
  $('.nav-box').removeClass('nav-box_mobile-active');
  $('body').css('overflow-y', 'scroll');
});

$('.overlay').click(function() {
  $('.overlay').removeClass('overlay_active');
  $('.nav-box').removeClass('nav-box_mobile-active');
  $('body').css('overflow-y', 'scroll');
});


// события при наведении
// $('.blog-list__title-h3').mouseenter(function() {
//   $('.blog-list__img-overlay').css('opacity', '.2');
// });

// $('.blog-list__title-h3').mouseleave(function() {
//   $('.blog-list__img-overlay').css('opacity', '0');
// });


// popup
$('.banner-content__btn').click(function () {
  $('.popup-overlay').fadeToggle(200);
  $('body').css('overflow', 'hidden');
});

$('.popup__btn').click(function () {
  $('.popup-overlay').fadeToggle(200);
  $('body').css('overflow', 'visible');
});


// кнопка наверх
$('.js-footer-top__btn').click(function () {
  $('body,html').animate({
    scrollTop: '0'
  }, 600);
});

//slick
$('.blog-list').slick({
  slidesToShow: 4,
  accessibility: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  arrows: false,
  // centerPadding: '30px',
  responsive: [{
      breakpoint: 992,
      settings: {
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});


// =============================== конвертер таблиц
// words
/* $('.lang-words table').replaceWith( $('table').html()
   .replace(/<tbody/gi, "<ul class='words-list-link'")
  //  .replace(/<tr/gi, "<div")
  //  .replace(/<\/tr>/gi, "</div>")
   .replace(/<td/gi, "<li")
   .replace(/<\/td>/gi, "</li>")
   .replace(/<\/tbody/gi, "<\/ul")
); */

// // phrases
/* $('.lang-phrases table').replaceWith( $('table').html()
.replace(/<tbody/gi, "<ul class='phrases-list-link'")
//  .replace(/<tr/gi, "<div")
//  .replace(/<\/tr>/gi, "</div>")
 .replace(/<td/gi, "<li")
 .replace(/<\/td>/gi, "</li>")
 .replace(/<\/tbody/gi, "<\/ul")
); */
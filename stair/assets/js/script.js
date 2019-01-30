$(document).ready(function () {

	document.addEventListener('scroll', upper);

	function upper() {
		if ($(window).scrollTop() >= 800) {
			$('.up').slideDown();
		} else {
			$('.up').slideUp();
		}
	}
	$('.up').click(function () {
		$('body,html').animate({
			scrollTop: '0'
		}, 1000);
	});

	var link = $('.menu-link-b');
	var link_active = $('.menu-link-b_active');
	var menu = $('.menu-b');
	var nav_link = $('.menu-b a')
	link.click(function () {
		link.toggleClass('menu-link-b_active');
		menu.toggleClass('menu-b_active');
	});
	nav_link.click(function () {
		link.toggleClass('menu-link-b_active')
		menu.toggleClass('menu-b_active')
	})
});
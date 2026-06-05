/**
*	Fichero javascript que contiene la mayoría del código JS de la web.
*/

/*   SWIPER
==========================================================================================
*/
$(document).ready(function() {
    const swiper = new Swiper('#swiper-gallery', {
        autoplay: {
            delay: 3000,
        },
        speed: 1000,
        loop: true,              
        mousewheel: {
            invert: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
            hideOnClick: true
        },
		/*
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		*/
        slidesPerView: 1,
        spaceBetween: 0
    });
});
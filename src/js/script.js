$(document).ready(function () {
	$('.carousel__inner').slick({
		speed: 1200,
		slidesToShow: 1,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png" alt="slick"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png" alt="slick"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: true
				}
			}
		]
	});
});
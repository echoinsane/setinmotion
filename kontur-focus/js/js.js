$(function(){
	serviceAnima();
	var w = $(window).width();
	if (w <= 679)

	{
		$(".reviews").jCarouselLite({
			btnNext: ".next",
			btnPrev: ".prev",
			visible: 1
		});
	} else if (w < 1023) {

		$(".reviews").jCarouselLite({
			btnNext: ".next",
			btnPrev: ".prev",
			visible: 2
		});


	} else {

		$(".reviews").jCarouselLite({
			btnNext: ".next",
			btnPrev: ".prev",
			visible: 3
		});
	}
	
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target),
		d = $target.offset().top - 55;


		$('html, body').stop().animate({
			'scrollTop': d
		}, 900, 'swing', function () {
			// window.location.hash = target;
		});
	});

	$(window).scroll(function(){
		var d = $(window).scrollTop();
		if (d != 0)
		{
			$('.main-wrap .main ul.menu').addClass('active');
		}
		else 
		{
			$('.main-wrap .main ul.menu').removeClass('active');
		}
	});

});

function serviceAnima () {
	$('.service .block').mouseenter(function(){
		$(this).addClass('active');
		setTimeout(function(){
			$('.service .block.active').removeClass('active');
		},300);
	});
}
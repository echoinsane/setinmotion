
$(document).ready(function(){
	
	var mainLink = $('.main-link-wrap');
	var ww = $(window).width();
	var sub = $('.pt.sub');
	var subLi = $('.pt.sub .submenu li');
	var pt = $('.pt');
	var paginator = $('.paginator');
	var it1 = $('.item-type-1');
	var basketBtn = $('.basket');


	$('.submenu-wrap .lenta').width(ww/2+158);
	paginator.css('margin-left',-paginator.width()/2);
	
	mainLink.mouseover(function(){
		$(this).children('.submenu').show();
		$(this).children('.main-link').addClass('active');
	})
	.mouseout(function(){
		$(this).children('.submenu').hide();
		$(this).children('.main-link').removeClass('active');
	});

	sub.mouseover(function(){
		$(this).children('.sub-img').attr('src','img/service/filtr-arrow-light.png');
		$(this).addClass('active');
		var submenuH = $(this).children('.submenu').height();
		$(this).children('.submenu').css('left',submenuH*0.25).show();
	})
	.mouseout(function(){
		$(this).children('.sub-img').attr('src','img/service/filtr-arrow-dark.png');
		$(this).removeClass('active');
		$(this).children('.submenu').hide();
	});
	

	subLi.click(function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		}
		else {
			$(this).addClass('active');
		}
	});
	

	it1.mouseenter(function(){
		$(this).children('.main-table').stop().fadeIn(100);
		$(this).children('.main-img').css('opacity',0.4);
		
	})
	.mouseleave(function(){
		$(this).children('.main-table').stop().fadeOut(100);
		$(this).children('.main-img').css('opacity',1);
	});


	$('.sort .spisok-type a.type-first').click(function(){
		event.preventDefault();
		$('.sort .spisok-type a.active').removeClass('active');
		$(this).addClass('active');
		$('.item-type-2').hide();
		$('.item-type-1').show();
	});
	$('.sort .spisok-type a.type-second').click(function(){
		event.preventDefault();
		$('.sort .spisok-type a.active').removeClass('active');
		$(this).addClass('active');
		$('.item-type-1').hide();
		$('.item-type-2').show();
	});


	basketBtn.click(function(){
		if ($(this).hasClass('active')) {
			$('.basket-wrap').fadeOut();
			$(this).removeClass('active');
		}
		else {
			$(this).addClass('active');
			$('.basket-wrap').fadeIn();
		}
	});


	$('.more').click(function(){
		var brandsH = $('.brands-window').height();
		$('.brands-window').css('margin-top',-brandsH/2);
		$('.brands-window').fadeIn();
		$('.dark').fadeIn();
	});


		$('.brands-window .close').click(function(){
			$('.brands-window').fadeOut();
			$('.dark').fadeOut();
		});


	$('.top-menu .wrap .float-wrap div.enter').click(function(){
		var enterH = $('.enter-window').height();
		$('.enter-window').css('margin-top',-enterH/2);
		$('.enter-window').fadeIn();
		$('.dark').fadeIn();
	});

		$('.enter-window .close').click(function(){
			$('.enter-window').fadeOut();
			$('.dark').fadeOut();
		});

	$('.enter-window a.recover').click(function(){
		$('.enter-window').fadeOut();
		var recoverH = $('.recover-window').height();
		$('.recover-window').css('margin-top',-recoverH/2);
		$('.recover-window').fadeIn();
		$('.dark').fadeIn();
	});

		$('.recover-window .close').click(function(){
			$('.recover-window').fadeOut();
			$('.dark').fadeOut();
		});

	$('.enter-window a.registration').click(function(){
		$('.enter-window').fadeOut();
		var registrationH = $('.registration-window').height();
		$('.registration-window').css('margin-top',-registrationH/2);
		$('.registration-window').fadeIn();
		$('.dark').fadeIn();
	});

		$('.registration-window .close').click(function(){
			$('.registration-window').fadeOut();
			$('.dark').fadeOut();
		});








	$('.detail-wrap .img-side img.small-img').click(function() {
		if ($(this).hasClass('active')) {

		}
		else {
			$('.detail-wrap .img-side img.small-img.active').removeClass('active');
			$(this).addClass('active');
			var src = $(this).attr('src');
			$('.detail-wrap .img-side img.main-img').attr('src',src);
		}
	});

	$('.detail-wrap .text-side a.full').click(function(){
		event.preventDefault();
		$('.detail-wrap .text-side p.hidden').show();
		$(this).remove();
	});






	$('.detail-wrap .table-side .tabs .tab').click(function(){
		if ($(this).hasClass('active')) {

		}

		else {
			$('.detail-wrap .table-side .tabs .tab.active').removeClass('active');
			$(this).addClass('active');
			var data = $(this).attr('data-number');
			$('.detail-wrap .table-side .content').hide();
			$('.detail-wrap .table-side .content[data-number='+data+']').show();
		}
	});











	$('.dark').click(function(){
		$('.brands-window').fadeOut();
		$('.enter-window').fadeOut();
		$('.recover-window').fadeOut();
		$('.registration-window').fadeOut();
		$(this).fadeOut();
	});
});
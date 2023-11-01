

$(document).ready(function(){
	var ww = $(window).width();

	$('.b-reviews__item-wrapper').slick({
		prevArrow: '.prev-arrow',
		nextArrow: '.next-arrow',
  		adaptiveHeight: true
	});


		

	if (ww<698) {
		mob();
	} else {
		scrollToId();

		var close = $('.b-modal__close'),
			modal = $('.b-modal');

		close.click(function(){
			modal.removeClass('b-modal_active');
			setTimeout(function() {
				modal.hide();
				removeCloseEvent();				
			}, 300);
		});

		var links = $('a.modal-link');
		links.click(function(){
			var src = $(this).attr('data-src');
			openModal(src);
		});

		$('.b-docs__item').fancybox({
			openSpeed: '400',
			closeSpeed: '400'
		});



	}
});







function openModal(e) {
	console.log(e);
	event.preventDefault();
	var modal = $('.b-modal'),
		contentModal = $('.b-modal__left');

	contentModal.load(e);
		
	modal.show();
	setTimeout(function() {
		modal.addClass('b-modal_active');
	}, 100);

	addCloseEvent();
}


function addCloseEvent() {

	$(document).on('mouseup',function (e) {
	    var modal = $(".b-modal");
	    if (modal.has(e.target).length === 0){
	        modal.removeClass('b-modal_active');
			setTimeout(function() {
				modal.hide();	
				removeCloseEvent();		
			}, 300);

	    }
	});
}

function removeCloseEvent() {
	$(document).unbind('mouseup');
}

function scrollToId() {
	$('a.scroll[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target),
		d = $target.offset().top;


		$('html, body').stop().animate({
			'scrollTop': d
		}, 900, 'swing', function () {
			// window.location.hash = target;
		});
	});
}

function mob() {
	$('.b-docs__item-wrapper').slick({
		prevArrow: '.prev-arrow-docs',
		nextArrow: '.next-arrow-docs'
	});
}




var map;
var mapCoordinates = new google.maps.LatLng(55.746276, 37.654746);

function initialize()
{
	

	var mapOptions = {
	    zoom: 17,
	    center: mapCoordinates,
	    scrollwheel: false,
	    navigationControl: false,
	    disableDefaultUI: false,
	    mapTypeId: google.maps.MapTypeId.TERRAIN,
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var marker = new google.maps.Marker({
	    position: mapCoordinates,
	    map: map
	});
}
google.maps.event.addDomListener(window, 'load', initialize);

$(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.b-footer__nav_top').addClass('b-footer__nav_top_active');
      } else {
          $('.b-footer__nav_top').removeClass('b-footer__nav_top_active');
      }
});
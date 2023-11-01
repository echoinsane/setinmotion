$(document).ready(function(){
	var ww = $(window).width();
	var wh = $(window).height();
	var videoPath = $('#video-path');
	pagesHeight(ww,wh);
	hashchanged();


	$('.menu-btn').click(menu);

	// $('.block').click(fade);

	$('.wrap .menu ul li span').click(advancedMenu);


		$('.wrap .wrap-pages .item').mouseenter(function(){
			// $(this).children('.light').stop().fadeIn(200);
			// $(this).children('.name,.type,.desc').stop().animate({top:'20px', opacity:'1'},300);
			
		})
		.mouseleave(function(){
			// $(this).children('.light').stop().fadeOut(200);
			// $(this).children('.name,.type,.desc').stop().animate({top:'0px', opacity:'0'},100);
		});



});

$(window).on('hashchange', function() {
  hashchanged();
});

window.onresize = function(event) {
	var ww = $(window).width();
	var wh = $(window).height();
   	pagesHeight(ww,wh);
};

$(window).load(function(){
	$('.wrap .wrap-pages').animate({opacity: 1},300);
	$('.wrap .wrap-pages').removeClass('appear');
	$('.preloader').fadeOut();
	
});

function pagesHeight (ww,wh) {
	if (ww > 759 && ww < 1262) {
		$('.wrap .wrap-pages .pages-flex').css('min-height',wh-88);
	}
	else {
		$('.wrap .wrap-pages .pages-flex').css('min-height',wh-58);
	}

	if (ww > 1262) {
		var wh = $(window).height()-120;
		if (wh >= 648) {
			$('.wrap .menu').height(wh-120);
			$('.wrap .wrap-pages .pages-flex').css('min-height',wh-88);
		}
		else {
			$('.wrap .block').height(wh-120);
			$('.wrap .menu').height(648-120);
		}
		$('.menu').css('left',ww/2-630);
		$('.menu-btn').css('left',ww/2-610);
	}
	else if (ww < 1262 && ww > 569)	{
		var wh = $(window).height();
		$('.wrap .menu').height(wh);

		$('.menu').css('left',0);
		$('.menu-btn').css('left',20);

		// setTimeout(function(){
		// 	var bottomMargin = $('.wrap-pages .item:first-of-type').css('margin-right');
		// 	bottomMargin = parseInt(bottomMargin);
		// 	$('.wrap-pages .item').css('margin-bottom',bottomMargin);
		// },500);
	}
	else if (ww < 569)	{
		var wh = $(window).height();
		$('.wrap .menu').height(wh+70);
	}

	
}

function menu () {
	
	if ($(this).hasClass('active'))
	{
		$(this).removeClass('active');
		$('.wrap-pages').removeClass('menu-on');
		$('.menu').fadeOut();
	}
	else 
	{
		
		$('.wrap-pages').addClass('menu-on');
		$('.menu').fadeIn();
		$(this).addClass('active');
		var webPath = document.querySelector('#web-path');
		var photoPath = document.querySelector('#photo-path');
		var videoPath = document.querySelector('#video-path');
		simulatePathDrawing(webPath);
		simulatePathDrawing(photoPath);
		simulatePathDrawing(videoPath);
	}

	setTimeout(function(){
		var ww = $(window).width();
		if (ww < 1279 && ww > 569) {
			var bottomMargin = $('.wrap-pages .item:first-of-type').css('margin-right');
			bottomMargin = parseInt(bottomMargin);
			$('.wrap-pages .item').css('margin-bottom',bottomMargin);
		};
	},500);
	
	
}

function advancedMenu() {
	if ($(this).hasClass('active'))
	{
		$(this).removeClass('active');
	}
	else 
	{
		$(this).addClass('active');
	}
}


function fade () {
	$('.menu-btn').removeClass('active');
	$('.block').addClass('hide').fadeOut(500);
	$('.menu').fadeOut(500);

}

function hashchanged() {
	var hash = window.location.hash;
	  if (hash == '#own') 
		  {
		  	$('.wrap .wrap-pages .item[data-type="own"]').css('display','block');
		  	$('.wrap .wrap-pages .item[data-type="commercial"]').css('display','none');
		  }
	  else if (hash == '#commercial')
		  {
		  	$('.wrap .wrap-pages .item[data-type="commercial"]').css('display','block');
		  	$('.wrap .wrap-pages .item[data-type="own"]').css('display','none');
		  }
	  else 
	  	{
	  		$('.wrap .wrap-pages .item').css('display','block');
	  	}
}

function simulatePathDrawing(path) {
  // var path = document.querySelector('path');
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition =
  'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition =
  'stroke-dashoffset 3.5s ease-in-out';
  path.style.strokeDashoffset = '1';
  path.style.strokeWidth = '1.2px';
  path.style.fill = 'rgba(255, 255, 255, 0)';
  setTimeout(function(){
  	path.style.fill = 'rgba(255, 255, 255, 1)';
  },1200);
}



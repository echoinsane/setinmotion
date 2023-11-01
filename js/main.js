$(document).ready(function(){
	var ww = $(window).width();
	blockHeight(ww);
	var videoPath = $('#video-path');
	
	
	$('.after-link').click(beforeLink);

	$('.menu-btn').click(menu);

	$('.block').click(fade);

	$('.wrap .menu ul li span').click(advancedMenu);

});


window.onresize = function(event) {
	var ww = $(window).width();
   	blockHeight(ww);
};

$(window).load(function(){
	setTimeout(function(){
		$('.preloader').fadeOut();
		$('#fon img').fadeIn(600);
		setTimeout(function(){
			$('#fon img').fadeOut(600);
			setTimeout(function(){
				$('.wrap .block').fadeIn();
				$('.wrap .block').removeClass('appear');

			},700);
		},2000);
	},1500);
	
	
});

function blockHeight (ww) {
	if (ww > 1279) {
		var wh = $(window).height()-120;
		if (wh >= 648) {
			$('.wrap .block').css('min-height',wh);
			$('.wrap .menu').height(wh-120);
		}
		else {
			$('.wrap .block').css('min-height',648);
			$('.wrap .menu').height(648-120);
		}
	}
	else if (ww < 1279 && ww > 569)	{
		var wh = $(window).height();
		$('.wrap .block').css('min-height',wh);
		$('.wrap .menu').height(wh);
	}
	else if (ww < 569)	{
		var wh = $(window).height();
		$('.wrap .block').css('min-height',wh);
		$('.wrap .menu').height(wh+70);
	}

	
}

function menu () {
	
	if ($(this).hasClass('active'))
	{
		$(this).removeClass('active');
		$('.block').removeClass('menu-on');
		$('.menu').fadeOut();
	}
	else 
	{
		
		$('.block').addClass('menu-on');
		$('.menu').fadeIn();
		$(this).addClass('active');
		var webPath = document.querySelector('#web-path');
		var photoPath = document.querySelector('#photo-path');
		var videoPath = document.querySelector('#video-path');
		simulatePathDrawing(webPath);
		simulatePathDrawing(photoPath);
		simulatePathDrawing(videoPath);
	}
	
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

function beforeLink() {
	fade();
	var url = $(this).attr('href');console.log(url);
	setTimeout(function(){
		window.location.href = url;
		
	},500);
	return false
		
}


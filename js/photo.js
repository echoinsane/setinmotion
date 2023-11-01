$(document).ready(function(){
	var ww = $(window).width(),
		wh = $(window).height(),
		videoPath = $('#video-path');
		
	pagesHeight(ww,wh);
	

	$('.menu-btn').click(menu);
	$('.add').click(addPhotos);

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

// var resizeTimer = null;
window.onresize = function(event) {
	var ww = $(window).width();
	var wh = $(window).height();
   	pagesHeight(ww,wh);

   	// reCollage();
};

$(window).load(function(){
	$('.wrap .wrap-pages').animate({opacity: 1},300);
	$('.wrap .wrap-pages').removeClass('appear');
	$('.preloader').fadeOut();
	var element = $('.grid-item').length;
	

	$('.grid').masonry({
	  // options
	  columnWidth: '.grid-sizer',
	  gutter: 15,
	  itemSelector: '.grid-item',
	  // percentPosition: true
	});

	addPhotos(element);
	
	
});





function pagesHeight (ww,wh) {
	

	if (ww > 1279) {
		var wh = $(window).height()-120;
		if (wh >= 648) {
			$('.wrap .menu').height(wh-120);
		}
		else {
			$('.wrap .block').height(wh-120);
			$('.wrap .menu').height(648-120);
		}
		$('.menu').css('left',ww/2-630);
		$('.menu-btn').css('left',ww/2-610);
	}
	else if (ww < 1279 && ww > 569)	{
		var wh = $(window).height();
		$('.wrap .menu').height(wh);

		$('.menu').css('left',0);
		$('.menu-btn').css('left',20);

		setTimeout(function(){
			var bottomMargin = $('.wrap-pages .item:first-of-type').css('margin-right');
			bottomMargin = parseInt(bottomMargin);
			$('.wrap-pages .item').css('margin-bottom',bottomMargin*2);
		},500);
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

		setTimeout(function(){
			$('.grid').masonry({
			  // options
			  columnWidth: '.grid-sizer',
			  gutter: 15,
			  itemSelector: '.grid-item',
			  // percentPosition: true
			});

		},500);
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

		setTimeout(function(){
			$('.grid').masonry({
			  // options
			  columnWidth: '.grid-sizer',
			  gutter: 15,
			  itemSelector: '.grid-item',
			  // percentPosition: true
			});

		},500);
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


function addPhotos(element) {
	if (element == 0) {
		$.ajax({
		  url: '../json/photo-array.json',
		  type: 'get',
		  dataType: 'json',
		  complete: function(data) {
		  	for (var i = 0; i < 10; i++) {
			    $items = $('<a class="grid-item '+data.responseJSON.photo[i].photoNumber+'" href="'+data.responseJSON.photo[i].href+'" rel="'+data.responseJSON.photo[i].rel+'"><img class="thumb"  src="'+data.responseJSON.photo[i].href+'"/></a>');
				 	$items.hide();
				    // append to container
				    $('.grid').append( $items );
				    $items.imagesLoaded().progress( function( imgLoad, image ) {
				      // get item
				      // image is imagesLoaded class, not <img>, <img> is image.img
				      var $item = $( image.img ).parents('.grid-item');
				      // un-hide item
				      $item.show();
				      // masonry does its thing
				      $('.grid').masonry( 'appended', $item );
				    });
			}
			
		  }
		});
	} else {
		$.ajax({
		  url: '../json/photo-array.json',
		  type: 'get',
		  dataType: 'json',
		  complete: function(data) {
		  	var i = $('.grid-item').length,
		  		j = i +10;
		  	for (;i < j; i++) {
			    $items = $('<a class="grid-item '+data.responseJSON.photo[i].photoNumber+'" href="'+data.responseJSON.photo[i].href+'" rel="'+data.responseJSON.photo[i].rel+'"><img class="thumb"  src="'+data.responseJSON.photo[i].href+'"/></a>');
				$items.hide();
				    // append to container
				    $('.grid').append( $items );
				    $items.imagesLoaded().progress( function( imgLoad, image ) {
				      // get item
				      // image is imagesLoaded class, not <img>, <img> is image.img
				      var $item = $( image.img ).parents('.grid-item');
				      // un-hide item
				      $item.show();
				      // masonry does its thing
				      $('.grid').masonry( 'appended', $item );
				    });

				var allElements = data.responseJSON.photo.length;
				console.log('i = ',i);console.log('all = ', allElements);
				if ((i+1) == allElements) {
					$('.add-wrapper .add').addClass('loaded');
					$('.add-wrapper span').html('All images are loaded');
				}
				
			}

		  }
		});
	}
	

}
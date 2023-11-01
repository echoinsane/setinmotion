
$(function(){
	findStorage();
	hashchanged();
	

	var star = $('.main-wrap .main-content a div.star');

	star.click(checkStar);
});



$(window).on('hashchange', function() {
  hashchanged();
});

function hashchanged() {
	var hash = window.location.hash;
	  if (hash == '#/html') 
		  	{
		  		$('.main-content a[type="#/html"]').css('display','block');
		  		$('.main-content a[type="#/css"],.main-content a[type="#/js"],.main-content a[type="#/jQuery"],.main-content a[type="#/design"]').css('display','none');
		  		$('.main-wrap .menu ul a.active').removeClass('active');
		  		$('.main-wrap .menu ul a[href="#/html"]').addClass('active');
		  	}
	  else if (hash == '#/css')
		  	{
		  		$('.main-content a[type="#/css"]').css('display','block');
		  		$('.main-content a[type="#/html"],.main-content a[type="#/js"],.main-content a[type="#/jQuery"],.main-content a[type="#/design"]').css('display','none');
		  		$('.main-wrap .menu ul a.active').removeClass('active');
		  		$('.main-wrap .menu ul a[href="#/css"]').addClass('active');
		  	}
	  else if (hash == '#/js') 
		  	{
		  		$('.main-content a[type="#/js"]').css('display','block');
		  		$('.main-content a[type="#/css"],.main-content a[type="#/html"],.main-content a[type="#/jQuery"],.main-content a[type="#/design"]').css('display','none');
		  		$('.main-wrap .menu ul a.active').removeClass('active');
		  		$('.main-wrap .menu ul a[href="#/js"]').addClass('active');
		  	}
	  else if (hash == '#/jQuery') 
		  	{
		  		$('.main-content a[type="#/jQuery"]').css('display','block');
		  		$('.main-content a[type="#/css"],.main-content a[type="#/js"],.main-content a[type="#/html"],.main-content a[type="#/design"]').css('display','none');
		  		$('.main-wrap .menu ul a.active').removeClass('active');
		  		$('.main-wrap .menu ul a[href="#/jQuery"]').addClass('active');
		  	}
	  else if (hash == '#/design') 
		  	{
		  		$('.main-content a[type="#/design"]').css('display','block');
		  		$('.main-content a[type="#/css"],.main-content a[type="#/js"],.main-content a[type="#/jQuery"],.main-content a[type="#/html"]').css('display','none');
		  		$('.main-wrap .menu ul a.active').removeClass('active');
		  		$('.main-wrap .menu ul a[href="#/design"]').addClass('active');
		  	}
	  else if (hash == '#/favorites') 
		  	{
		  		$('.main-content a').css('display','none');
		  		$('.main-content a[star="true"]').css('display','block');
		  		$('.main-wrap .menu ul a.active').removeClass('active');
		  		$('.main-wrap .menu ul a[href="#/favorites"]').addClass('active');
		  	}
	  else if (hash == '#/') 
		  	{
		  		$('.main-content a').css('display','block');
		  		$('.main-wrap .menu ul a.active').removeClass('active');
		  		$('.main-wrap .menu ul a[href="#/"]').addClass('active');
		  	}
}

function findStorage() {
	if(typeof(Storage) !== "undefined") {
	    for (var i = 0;i < localStorage.length;i++)
	    	{
	    		var key = localStorage.key(i);
    			var value = localStorage[key];

    			if (key.indexOf('setinmotion' +1)) {
    				$('#'+key+' .star').addClass('active').closest('a').attr('star','true');
    			}
	    	}
	} else {
	    console.log('Sorry! No Web Storage support..');
	}
}

function checkStar(star) {
	var id = $(this).closest('a').attr('id');
	if ($(this).hasClass('active')) {

		$(this).removeClass('active').closest('a').attr('star','false');
		localStorage.removeItem(id);
	} else {

		$(this).addClass('active').closest('a').attr('star','true');
		localStorage.setItem(id, "true");
	}
	
	return false
}

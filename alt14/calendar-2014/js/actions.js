$(document).ready(function(){
	var hashArray = [" ","#dp","#65daysofstatic","#caliban","#wodb","#kse","#morcheeba","#wcar","#bfmv","#ymas","#apocalyptica","#30stm","#aaa","#hybridminds","#bonobo","#dba","#bs3","#twa","#korn","#bc","#dt","#lp","#bmth","#blessthefall","#parklive","#architects"];
	var lastScrollTop = 0;
	var st;
	var flagTop = 0;
	var flagSc = 0;
	var back;
	var arrowRight = $('.arrow_right');
	var arrowLeft = $('.arrow_left');
	var loc = window.location.href;
	var top = $('.top');
	var curData = 1;
	var sl = $('#slides');
	var des = $('.description');
	var white = $('.white_fon');
	var l;

	heightFix();
	var max = $('.show').length;
	if (localStorage.getItem('counter') == null){
            localStorage.setItem('counter','0');
    }



    var readyOrNot = setInterval(function(){
		l = $('.slidesjs-pagination-item a').length;
	    if (l > 0) {
			difference();
			clearInterval(readyOrNot);
	    };

    },100);
    

	

	$(window).scroll(function(event){
	   st = $(this).scrollTop();
	    if (st > lastScrollTop && st > 100 && flagTop == 0)
		   {
				$('.month_desc').fadeOut(200);
				$('.month_number').fadeOut(200);
				$('.month_bar a').animate({width: '40px',height: '40px', lineHeight: '39px'},200).css('font-weight','bold');
				$('.month_bar').css('background','url("../images/black.png")')
				flagTop = 1;
		   }
		else if (st < lastScrollTop && st < 100 && flagTop == 1)
		   {
				$('.month_desc').fadeIn(200);
				$('.month_number').fadeIn(200);
				$('.month_bar a').animate({width: '58px',height: '58px', lineHeight: '56px'},200).css('font-weight','normal');;
				$('.month_bar').css('background','none')
				flagTop = 0;
		   }
	   lastScrollTop = st;
	});
	
	function goNext (){
		if (curData < max && flagSc == 0)
			{
				flagSc=1;
				$('.slidesjs-next').click();
				back = $('.fon[data="'+curData+'"]').fadeOut(500);
				curData++;
				location.hash = hashArray[curData];
				back = $('.fon[data="'+curData+'"]').fadeIn(500);
				heightFix();
				toTop();
				setTimeout(function(){
					flagSc=0;
				},1000);
			}
		else if (flagSc == 0)
			{
				flagSc=1;
				$('.slidesjs-next').click();
				back = $('.fon[data="'+curData+'"]').fadeOut(500);
				curData = 1;
				location.hash = hashArray[curData];
				back = $('.fon[data="'+curData+'"]').fadeIn(500);
				heightFix();
				toTop();
				setTimeout(function(){
					flagSc=0;
				},1000);
			}
	}

	function goPrev () {
		if (curData == 1 && flagSc == 0)
			{
				flagSc=1;
				$('.slidesjs-previous').click();
				back = $('.fon[data="'+curData+'"]').fadeOut(500);
				curData = max;
				location.hash = hashArray[curData];
				back = $('.fon[data="'+curData+'"]').fadeIn(500);
				heightFix();
				toTop();
				setTimeout(function(){
					flagSc=0;
				},1000);
			}
		else if (flagSc == 0)
			{
				flagSc=1;
				$('.slidesjs-previous').click();
				back = $('.fon[data="'+curData+'"]').fadeOut(500);
				curData--;
				location.hash = hashArray[curData];
				back = $('.fon[data="'+curData+'"]').fadeIn(500);
				heightFix();
				toTop();
				setTimeout(function(){
					flagSc=0;
				},1000);
			}
	}
	
	$('.month_bar a').click(function(){
		var aData = $(this).attr('data');
		if (aData != 'none')
			{
				$('.month_bar a.active').removeClass('active');
				$(this).addClass('active');
				back = $('.fon[data="'+curData+'"]').fadeOut(500);
				curData = aData;
				location.hash = hashArray[curData];
				back = $('.fon[data="'+curData+'"]').fadeIn(500);
				heightFix();
				$('.slidesjs-pagination-item a[data-slidesjs-item="' + aData + '"]').click();
				toTop();
			}
		else 
			{
				alert('none');
			}
		
	});
	
	
	function heightFix () {
		activeMonth();
		if (curData == 1) 
			{
				sl.height(1900);
				des.height(1900);
				white.height(1590);
			}
		else if (curData == 2)
		
			{
				sl.height(2950);
				des.height(2950);
				white.height(2640);
			}
	}
	function toTop () {
		setTimeout(function (){$("html, body").animate({ scrollTop: "0px" },300);},800);
	}
	$(document).keyup(function(e){

		if (e.keyCode == 37)
		{
			goPrev();
		}
		if (e.keyCode == 39)
		{
			goNext();
		}
	});

	function activeMonth () {
		if (curData == 1) 
		{

			$('.month_bar a.active').removeClass('active');
			$('.month_bar a[data="1"]').addClass('active');
		}
		if (curData == 2 || curData == 3 || curData == 4 || curData == 5) 
		{
			$('.month_bar a.active').removeClass('active');	
			$('.month_bar a[data="2"]').addClass('active');
		}
		if (curData == 6|| curData == 7 || curData == 8 || curData == 9|| curData == 10 || curData == 11 || curData == 12 || curData == 13 || curData == 14 || curData == 15) 
		{
			$('.month_bar a.active').removeClass('active');
			$('.month_bar a[data="6"]').addClass('active');
		}

		if (curData == 16 || curData == 17) 
		{
			$('.month_bar a.active').removeClass('active');
			$('.month_bar a[data="16"]').addClass('active');
		}

		if (curData == 18 || curData == 19 || curData == 20) 
		{
			$('.month_bar a.active').removeClass('active');
			$('.month_bar a[data="18"]').addClass('active');
		}

		if (curData == 21 || curData == 22 || curData == 23 || curData == 24) 
		{
			$('.month_bar a.active').removeClass('active');
			$('.month_bar a[data="21"]').addClass('active');
		}

		if (curData == 25) 
		{
			$('.month_bar a.active').removeClass('active');
			$('.month_bar a[data="25"]').addClass('active');
		}
	}

	function difference () {
		for (var i = hashArray.length - 1; i > 0; i--) {
			if (hashArray[i] == location.hash) 
				{
					back = $('.fon[data="'+curData+'"]').fadeOut(500);
					curData = i;
					$('.slidesjs-pagination-item a[data-slidesjs-item="' + curData + '"]').click();
					back = $('.fon[data="'+curData+'"]').fadeIn(500);
					heightFix();

				};
		};
	}


	//MOBILE//

	var device = navigator.userAgent.toLowerCase();
	var ios = device.match(/(iphone|ipod|ipad)/);
	if (ios) {
     window.location.replace("http://setinmotion.ru/alt14/calendar-2014/mobile/");
     }
});
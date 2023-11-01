$(document).ready(function(){
	var hashArray = [" ","#dp","#65daysofstatic","#caliban","#wodb","#kse","#morcheeba","#wcar","#bfmv","#ymas","#apocalyptica","#30stm","#aaa","#hybridminds","#bonobo","#dba","#bs3","#twa","#korn","#bc","#dt","#lp","#bmth","#blessthefall","#parklive","#architects","#aa","#tes","#pd","#bos","#taa"];
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
	var hash;
	var step = 0;
	//MOBILE//
	//localStorage.clear();

	


	heightFix();
	var max = $('.show').length;
	if (localStorage.getItem('times') == null){
            localStorage.setItem('times','0');
    }

    if (localStorage.getItem('times') == 0){
    	guide();
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
				$('.month_bar').css('background','url("images/black.png")')
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
				$(this).append('<div class="none">В этом месяцe ещё нет информации о концертах</div>');

				$('.none').animate({bottom:'+=20px',opacity:'1'},500);
				setTimeout(function(){$('.none').animate({bottom:'-=20px',opacity:'0'},500,function(){
					$(this).remove();
				});},2000);
			}
		
	});
	
	
	function heightFix () {
		activeMonth();
		var h = $('.show[data="' + curData + '"]').attr('data-height');
		sl.height(h);
		des.height(h);
		white.height(h-310);
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

		if (curData == 26 || curData == 27 || curData == 28) 
		{
			$('.month_bar a.active').removeClass('active');
			$('.month_bar a[data="26"]').addClass('active');
		}

		if (curData == 29 || curData == 30) 
		{
			$('.month_bar a.active').removeClass('active');
			$('.month_bar a[data="29"]').addClass('active');
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
					hash = 1;

				}
			if (location.hash == '' )
				{
						hash = 0;
						var n = $('.nearest').attr('data');
						curData = n;
				}
		};
			if (hash == 0)
			{
				location.hash = hashArray[n];
				difference();
			}
	}


	function guide() {
		$('body').append('<div class="black_fon" data="guide" style="background:url(images/black-90.png);z-index:888888;opacity:1;"><p>Для вашего удобства, перемещение по сайту,<br>организованно стрелками на клавиатуре<br> влево &#8592; и вправо &#8594;.<a>Ясно</a></p></div>');
		$(document).on('click','.black_fon a',function(){
			if (step == 0) {
				$('.black_fon p').html('');
				$('.black_fon p').append('<img src="images/sample.jpg"/><br>У каждого события есть своя ссылка<br> состоящия из хэш-тега (#) и названия.<br>Вы можете сохранять их, и всегда сможете<br> быстро перейти на интересующие вас мероприятие.<a>Понятно</a>');
				$('.black_fon p').css('margin-top','-154px');
				step = 1;
			}
			else if (step == 1) {
				$('.black_fon p').html('');
				$('.black_fon p').append('И последнее!<br>Если вы заходите на сайт просто по ссылке <br><span style="text-decoration:underline;"> setinmotion.ru/calendar-2014</span><br>Вы автоматически перенаправляетесь<br> на ближайший концерт!<br>А теперь нажмите на лапку снизу!<a style="background:none;"><img src="images/footprint.png"/></a>');
				$('.black_fon p').css('margin-top','-225px');
				step = 2;
			}
			else if (step == 2) {
				$(this).closest('.black_fon').remove();
				localStorage.setItem('times','1');
			}
		});
	}

	
});
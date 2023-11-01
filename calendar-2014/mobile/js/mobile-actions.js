$(document).ready(function () {
	var curData = 1;
  	var max = $('.show').length;
  	var fl = 1;
  	//localStorage.clear();
  	if (localStorage.getItem('times-mobile') == null){
            localStorage.setItem('times-mobile','0');
    }

    if (localStorage.getItem('times-mobile') == 0){
    	$('.guide').css('display','block');
    }

  	$('.guide a').click(function(){
  		if (fl == 1) 
  			{
  				
  				$('.guide p').html('Для навигации по сайту, вам необходимо пальцем двигать(свайпать) текст мероприятий.');
  				$('.guide a').html('Ясно');
  				fl = 2;

  			}

  		else if (fl == 2) 
  			{
  				
  				$('.guide p').html('Так же, слева сверху есть кнопка для вызова меню с месяцами, для лучшей навигации.');
  				$('.guide a').html('Яснопонятно');
  				fl = 3;

  			}

  		else if (fl == 3) 
  			{
  				
  				$('.guide p').html('Надеюсь мой сайт принесет вам пользу!');
  				$('.guide a').html('Давайужепоказывайсвойсайт').css('font-size','15px');
  				fl = 4;

  			}
  		else if (fl == 4) 
  			{
  				
  				$('.guide').remove();
  				fl = 5;
  				localStorage.setItem('times-mobile','1');

  			}
  	});


	$('.menu div a').click(function(){
		curData = $(this).attr('data');
		if (curData != 'none')
		{
			$('.slidesjs-pagination-item a[data-slidesjs-item="' + curData + '"]').click();
		}
		else {
			alert('В этом месяцe ещё нет информации о концертах');
		}
		

	});


	$('.menu-bar').click(function(){
		if ($('.container').hasClass('active')) 
		{
			$('.container').animate({left:'0px'},300).removeClass('active');
			$('.opacity').css('display','none');
		}
		else 
		{
			$('.container').animate({left:'220px'},300).addClass('active');
			$('.opacity').css('display','block');
		}
	});
	$('.menu div a').click(function(){
		$('.container').animate({left:'0px'},300).removeClass('active');
		$('.opacity').css('display','none');
	});

	$('.opacity').click(function(){
		$('.container').animate({left:'0px'},300).removeClass('active');
		$(this).css('display','none');
	});


	function activeMonth () {
		if (curData == 1) 
		{

			$('.menu div a.active').removeClass('active');
			$('.month_bar a[data="1"]').addClass('active');
		}
		if (curData == 2 || curData == 3 || curData == 4 || curData == 5) 
		{
			$('.menu div a.active').removeClass('active');	
			$('.menu div a[data="2"]').addClass('active');
		}
		if (curData == 6|| curData == 7 || curData == 8 || curData == 9|| curData == 10 || curData == 11 || curData == 12 || curData == 13 || curData == 14 || curData == 15) 
		{
			$('.menu div a.active').removeClass('active');
			$('.menu div a[data="6"]').addClass('active');
		}

		if (curData == 16 || curData == 17) 
		{
			$('.menu div a.active').removeClass('active');
			$('.menu div a[data="16"]').addClass('active');
		}

		if (curData == 18 || curData == 19 || curData == 20) 
		{
			$('.menu div a.active').removeClass('active');
			$('.menu div a[data="18"]').addClass('active');
		}

		if (curData == 21 || curData == 22 || curData == 23 || curData == 24) 
		{
			$('.menu div a.active').removeClass('active');
			$('.menu div a[data="21"]').addClass('active');
		}

		if (curData == 25) 
		{
			$('.menu div a.active').removeClass('active');
			$('.menu div a[data="25"]').addClass('active');
		}
	}
});
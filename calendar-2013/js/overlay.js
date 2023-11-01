$(function(){
var zoom = $('.zoom');
var concert = $('.concert');
//var overlay = $('.black_fon');

	zoom.click(zoomClick_Handler);

		function zoomClick_Handler()
		{
			
			concert.css('z-index', '101');
			$('body').append("<div class='black_fon'></div>");
			var overlay = $('.black_fon');
			$(this).siblings(".concert").addClass("current_pop_up");
			$(".current_pop_up").show().animate({ opacity: 1, top: "+=20" }, 'slow');
				//overlay.css('z-index', '100');
				overlay.click(function(){
					$(this).remove();
					$(".current_pop_up").animate({ opacity: 0, top: "-=20" }, 'slow');
					$(".current_pop_up").hide(100);
					$(".concert").removeClass("current_pop_up");
				});
			
		}
		
		
		 $(".cross").click(function(){
			$(".current_pop_up").animate({ opacity: 0, top: "-=20" }, 'slow');
			$(".current_pop_up").hide(100);
			$(".concert").removeClass("current_pop_up");
			$('.black_fon').remove();
		 });
	// посещенные мероприятия	 
	$(".success img").mouseover(function(){
		$(this).siblings(".success div").addClass("current_success");
		$(".current_success").show().animate({ opacity: 1, top: "-=5" }, 'fast');
	 });
	
	$(".success img").mouseout(function(){
		$(".current_success").animate({ opacity: 0, top: "+=5" }, 'fast');
		$(".current_success").hide(100);
		$(".success div").removeClass("current_success");
	});
	// мероприятия не в нашем городе
	$(".car img").mouseover(function(){
		$(this).siblings(".car div").addClass("current_car");
		$(".current_car").show().animate({ opacity: 1, left: "-=5" }, 'fast');
	 });
	
	$(".car img").mouseout(function(){
		$(".current_car").animate({ opacity: 0, left: "+=5" }, 'fast');
		$(".current_car").hide(100);
		$(".car div").removeClass("current_car");
	});
	// кнопка архива
	$("a.archive").mouseover(function(){
		$("a.archive div").addClass("current_archive");
		$(".current_archive").show().animate({ opacity: 1, top: "-=5" }, 'fast');
	 });
	
	$(".archive").mouseout(function(){
		$(".current_archive").animate({ opacity: 0, top: "+=5" }, 'fast');
		$(".current_archive").hide(100);
		$("div").removeClass("current_archive");
	});
});
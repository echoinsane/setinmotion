var mark;
var model;
var job;
$(document).ready(function(){
	$('.toTop').click(function() {
		$("html, body").animate({scrollTop:'0px'});
	});

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if (top >= 100) 
		{
			$('.toTop').fadeIn(300);
		}
		else
		{
			$('.toTop').fadeOut(300);
		}
	});


	var mainLink = $('.main-link');
	
	
	mainLink.mouseover(function(){
		$(this).children('.submenu').show();
	})
	.mouseout(function(){
		$(this).children('.submenu').hide();
	});
	
	var sublink = $('.sublink');

	sublink.mouseover(function(){
		$(this).children('.subsubmenu').show();
	})
	.mouseout(function(){
		$(this).children('.subsubmenu').hide();
	});
	

	$('.calc-link').click(function() {
		$('.calc').stop().animate({top: '452px'},500);
	});




	// $('.calc').mouseleave(function() {
	// 	$(this).stop().animate({top: '200px'},500);
	// });


	$(".select-mark").selectOrDie({
		onChange: function() { 
			$(".select-model").selectOrDie("enable");
			$(".select-year").selectOrDie("disable");
			$(".select-job").selectOrDie("disable");
			mark = $(this).val();
				$.getJSON('model/json-model-'+mark+'.json', function(json){  // загрузку JSON данных из файла example.json   
		            $('.select-model').html('');
		                                                         // заполняем DOM элемент данными из JSON объекта
					for (var i = 0; i < json.model.length; i++) 
						{	
							$('.select-model').append('<option>'+ json.model[i].name +'</option>');
						};		                                                        
		            $('.select-model').selectOrDie("update").click();
		        });// загрузка списка моделей
		},
		placeholder: "Марка"
	});


	$(".select-model").selectOrDie({
		onChange: function() {
			$(".select-year").selectOrDie("enable");
			model = $(this).val();
				$.getJSON('year/json-year-'+model+'.json', function(json){  // загрузку JSON данных из файла example.json   
		            $('.select-year').html('');
		                                                         // заполняем DOM элемент данными из JSON объекта
					for (var i = 0; i < json.year.length; i++) 
						{	
							$('.select-year').append('<option>'+ json.year[i].name +'</option>');
						};		                                                        
		            $('.select-year').selectOrDie("update").click();
		        });// загрузка списка лет

		},
		placeholder: "Модель"
	}).selectOrDie("disable");



	$(".select-year").selectOrDie({
		onChange: function() {
			$(".select-job").selectOrDie("enable");
			year = $(this).val();
				$.getJSON('job/json-job-'+model+'-'+year+'.json', function(json){  // загрузку JSON данных из файла example.json   
		            $('.select-job').html('');
		                                                         // заполняем DOM элемент данными из JSON объекта
					for (var i = 0; i < json.job.length; i++) 
						{	
							$('.select-job').append('<option data-id="'+i+'" data-name="'+json.job[i].name+'">'+ json.job[i].name +'</option>');
						};		                                                        
		            $('.select-job').selectOrDie("update").click();
		        });// загрузка списка работ
		},
		placeholder: "Год"
	}).selectOrDie("disable");



	$(".select-job").selectOrDie({
		onChange: function() {
			job = $(this).val();
			var id = $('option[data-name="'+job+'"').attr('data-id');

			$.getJSON('job/json-job-'+model+'-'+year+'.json', function(json){ 
		            $('.third-calc-block .price span').html(json.job[id].price);
		            $('.third-calc-block .time span').html(json.job[id].time);                                            
					var price = $('.third-calc-block .price span').html();
					var time = $('.third-calc-block .time span').html();
					$('.third-calc-block .sum span').html(price*time);
				     
		        });
		},
		placeholder: "Вид работ"
	}).selectOrDie("disable");


	
	
});
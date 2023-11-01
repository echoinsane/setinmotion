$(document).ready(function(){
	
		$('.sliders').noUiSlider({
			start: [ 49, 483 ],
			connect: true,
			range: {
				'min': 49,
				'max': 700
			},
			format: wNumb({
				decimals: 0
			})
		});

		$('#slider-1').Link('lower').to($('#lower-1'));
		$('#slider-1').Link('upper').to($('#upper-1'));

		$('#slider-2').Link('lower').to($('#lower-2'));
		$('#slider-2').Link('upper').to($('#upper-2'));

		$('#slider-3').Link('lower').to($('#lower-3'));
		$('#slider-3').Link('upper').to($('#upper-3'));

		$('#slider-4').Link('lower').to($('#lower-4'));
		$('#slider-4').Link('upper').to($('#upper-4'));

		$('#slider-5').Link('lower').to($('#lower-5'));
		$('#slider-5').Link('upper').to($('#upper-5'));

		$('#slider-6').Link('lower').to($('#lower-6'));
		$('#slider-6').Link('upper').to($('#upper-6'));


		$('.reset').click(function(){
			$('#slider-1').val([49,483]);
			$('#slider-2').val([49,483]);
			$('#slider-3').val([49,483]);
			$('#slider-4').val([49,483]);
			$('#slider-5').val([49,483]);
			$('#slider-6').val([49,483]);
			$('.select-one').val('(все)');
		});





		








	$('.filtr-btn').click(function(){
		$('.sort').addClass('filtr-on');
		$('.goods').addClass('filtr-on');
		$('.goods .item-type-2').addClass('filtr-on');
	});

	$('.filtr .close').click(function(){
		$('.sort').removeClass('filtr-on');
		$('.goods').removeClass('filtr-on');
		$('.goods .item-type-2').removeClass('filtr-on');
	});


	$(".select-one").selectOrDie({
		onChange: function() { 
		}
	});

	$(".select-two").selectOrDie({
		onChange: function() { 
		}
	});
});
$(document).ready(function(){
	var cur = 1;
	$('.main-photo img[data='+cur+']').show();
	

	$('.small-photo img').click(function() {
		var data = $(this).attr('data');
		cur = data;
		$('.main-photo img').fadeOut(400);
		$('.main-photo img[data='+data+']').fadeIn(400);
	});

	$('.left-arrow').click(function() {
		if (cur == 1) {
			cur = 4;
		}
		else 
		{
			cur--;
		}
		$('.main-photo img').fadeOut(400);
		$('.main-photo img[data='+cur+']').fadeIn(400);
	});


	$('.right-arrow').click(function() {
		if (cur == 4) {
			cur = 1;
		}
		else 
		{
			cur++;
		}
		$('.main-photo img').fadeOut(400);
		$('.main-photo img[data='+cur+']').fadeIn(400);
	});
});
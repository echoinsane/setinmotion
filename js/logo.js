$(function(){
	startAnimate();
});


function startAnimate() {

	var head = $('.head'),
		leftEye = $('.left-eye'),
		rightEye = $('.right-eye');

	head.addClass('full');


	setTimeout(function(){
		leftEye.show();
		rightEye.show();
		setTimeout(function(){
			leftEye.addClass('full');
			rightEye.addClass('full');
		},100);
	},1000);
}
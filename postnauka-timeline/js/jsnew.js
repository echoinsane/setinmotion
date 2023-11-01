$(function(){
		videoSlider();
		smoothScroll();
		mouseClick();
	    //MAGIC
	    var controller = new ScrollMagic.Controller();
	

		//SCENES FOR ELEVEN - START
	    
		var scene = new ScrollMagic.Scene({
				triggerElement: ".one-wrapper .mouse"
			})
			.setTween("#animation-one", 0.5, {opacity: 1})
			.addTo(controller);

		var scene2 = new ScrollMagic.Scene({
				triggerElement: "#animation-one", duration: 50,
				offset: 100
			})
			.setPin("#animation-one")
			.addTo(controller);

		// var scene3 = new ScrollMagic.Scene({
		// 		triggerElement: "#scene-one", duration: 240,
		// 	})
		// 	.setPin("#scene-one")
		// 	.addTo(controller);

		var scene4 = new ScrollMagic.Scene({
				triggerElement: "#animation-one",
				offset: 100
			})
			.setTween("#animation-two", 0.5, {opacity: 1})
			.addTo(controller);

		var scene5 = new ScrollMagic.Scene({
				triggerElement: "#animation-two",
			})
			.addTo(controller)
			.on("enter", function (e) {
				odometer2.innerHTML = 4267117;
				odometer3.innerHTML = 31043236;
				odometer4.innerHTML = 59;
			});


		//SCENES FOR ELEVEN - END


		//SCENES FOR TWELVE - START

		var scene6 = new ScrollMagic.Scene({
				triggerElement: "#scene-two",triggerHook: 'onLeave', duration: 1950,
				offset: -10
			})
			.setPin("#scene-two")
			.addTo(controller);


		var scene7 = new ScrollMagic.Scene({
				triggerElement: ".youtube-wrapper .youtube"
			})
			.setTween("#animation-three", 0.5, {opacity: 1})
			.addTo(controller);

			var scene7_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-three", duration: 100,
					offset: 120
				})
				.setPin("#animation-three")
				.addTo(controller);


		var scene8 = new ScrollMagic.Scene({
				triggerElement: "#animation-three"
			})
			.setTween("#animation-four", 0.5, {opacity: 1})
			.addTo(controller);


		var scene9 = new ScrollMagic.Scene({
				triggerElement: "#animation-four"
			})
			.setTween("#animation-five", 0.5, {opacity: 1})
			.addTo(controller);

			var scene9_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-four", duration: 150,
					offset: 50
				})
				.setPin("#animation-four")
				.addTo(controller);


		var scene10 = new ScrollMagic.Scene({
				triggerElement: "#animation-five"
			})
			.setTween("#animation-six", 0.5, {opacity: 1})
			.addTo(controller)
			.on("enter", function (e) {
				odometer5.innerHTML = 1674;
			});

			var scene10_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-five", duration: 150,
					offset: 70
				})
				.setPin("#animation-five")
				.addTo(controller);


		var scene11 = new ScrollMagic.Scene({
				triggerElement: "#animation-six"
			})
			.setTween("#animation-seven", 0.5, {opacity: 1})
			.addTo(controller)
			.on("enter", function (e) {
				odometer6.innerHTML = 16;
			});

			var scene11_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-six", duration: 150,
					offset: 40
				})
				.setPin("#animation-six")
				.addTo(controller);


		var scene12 = new ScrollMagic.Scene({
				triggerElement: "#animation-seven"
			})
			.setTween("#animation-eight", 0.5, {opacity: 1})
			.addTo(controller);

			var scene12_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-seven", duration: 50,
					offset: 70
				})
				.setPin("#animation-seven")
				.addTo(controller);


		var scene13 = new ScrollMagic.Scene({
				triggerElement: "#animation-eight"
			})
			.setTween("#animation-nine", 0.5, {opacity: 1})
			.addTo(controller);

			var scene13_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-eight", duration: 50,
					offset: 70
				})
				.setPin("#animation-eight")
				.addTo(controller);

		var scene14 = new ScrollMagic.Scene({
				triggerElement: ".twelve-timeline-wrapper .mouse",
				offset: 50
			})
			// .addIndicators({name: "1 (duration: 0)"})
			.addTo(controller)
			.on("enter", function (e) {
				firstStatistic();
			});
		//SCENES FOR TWELVE - END


		//SCENES FOR THIRTEEN - START

		var scene15 = new ScrollMagic.Scene({
				triggerElement: "#scene-three",triggerHook: 'onLeave', duration: 3666,
				offset: -10
			})
			.setPin("#scene-three")
			// .addIndicators({name: "1 (duration: 3520)"})
			.addTo(controller);

		var scene16 = new ScrollMagic.Scene({
				triggerElement: ".thirteen-timeline-wrapper",
				offset: -150
			})
			.setTween("#animation-ten", 0.5, {opacity: 1})
			.addTo(controller); 

			var scene16_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-ten", duration: 150,
					offset: 100
				})
				.setPin("#animation-ten")
				.addTo(controller);


		var scene17 = new ScrollMagic.Scene({
				triggerElement: "#animation-ten",
				offset: 250
			})
			.setTween("#animation-eleven", 0.5, {opacity: 1})
			.addTo(controller); 

			var scene17_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-eleven", duration: 150
				})
				.setPin("#animation-eleven")
				.addTo(controller)
				.on("enter", function (e) {
					odometer7.innerHTML = 180;
				});


		var scene18 = new ScrollMagic.Scene({
				triggerElement: "#animation-eleven",
				offset: 100
			})
			.setTween("#animation-twelve", 0.5, {opacity: 1})
			.addTo(controller); 

			var scene18_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-twelve", duration: 250
				})
				.setPin("#animation-twelve")
				.addTo(controller)
				.on("enter", function (e) {
					odometer8.innerHTML = 10;
				});;

		var scene19 = new ScrollMagic.Scene({
				triggerElement: "#animation-twelve",
				offset: 100
			})
			.setTween("#animation-thirteen", 0.5, {opacity: 1})
			.addTo(controller); 

			var scene19_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-thirteen", duration: 250
				})
				.setPin("#animation-thirteen")
				.addTo(controller)
				.on("enter", function (e) {
					odometer9.innerHTML = 33;
				});;

		var scene20 = new ScrollMagic.Scene({
				triggerElement: "#animation-thirteen",
				offset: 100
			})
			.setTween("#animation-fourteen", 0.5, {opacity: 1})
			.addTo(controller); 

			var scene20_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-fourteen", duration: 250
				})
				.setPin("#animation-fourteen")
				.addTo(controller);


		var scene21 = new ScrollMagic.Scene({
				triggerElement: "#animation-fourteen",
				offset: 100
			})
			.setTween("#animation-fifteen", 0.5, {opacity: 1})
			.addTo(controller); 

			var scene21_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-fifteen", duration: 250
				})
				.setPin("#animation-fifteen")
				.addTo(controller);

		var scene22 = new ScrollMagic.Scene({
				triggerElement: "#animation-fifteen",
				offset: 100
			})
			.setTween("#animation-sixteen", 0.5, {opacity: 1})
			.addTo(controller);

			var scene22_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-sixteen", duration: 250
				})
				.setPin("#animation-sixteen")
				.addTo(controller)
				.on("enter", function (e) {
					odometer10.innerHTML = 68;
				});

		var scene23 = new ScrollMagic.Scene({
				triggerElement: "#animation-sixteen",
				offset: 100
			})
			.setTween("#animation-seventeen", 0.5, {opacity: 1})
			.addTo(controller);
			

		var scene24 = new ScrollMagic.Scene({
				triggerElement: "#animation-seventeen",
				offset: 100
			})
			.setTween("#animation-eighteen", 0.5, {opacity: 1})
			.addTo(controller)
			.on("enter", function (e) {
				odometer11.innerHTML = 111;
				odometer12.innerHTML = 4;
			});

		var scene25 = new ScrollMagic.Scene({
				triggerElement: ".statistic-two-wrapper .statistic-two",
				offset: 100
			})
			.addTo(controller)
			.on("enter", function (e) {
				secondStatistic();
				odometer13.innerHTML = 5424677;
				odometer14.innerHTML = 26546001;
			});
		//SCENES FOR THIRTEEN - END


		//SCENES FOR FOURTEEN - START

		var scene26 = new ScrollMagic.Scene({
				triggerElement: "#scene-four",triggerHook: 'onLeave', duration: 2240,
				offset: -10
			})
			.setPin("#scene-four")
			// .addIndicators({name: "1 (duration: 2240)"})
			.addTo(controller);

		var scene27 = new ScrollMagic.Scene({
				triggerElement: "#scene-four",
				offset: 50
			})
			.setTween("#animation-nineteen", 0.5, {opacity: 1})
			.addTo(controller);

			var scene27_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-nineteen", duration: 250,
					offset: 100
				})
				.setPin("#animation-nineteen")
				.addTo(controller)
				.on("enter", function (e) {
					odometer15.innerHTML = 2;
				});

		var scene28 = new ScrollMagic.Scene({
				triggerElement: "#animation-nineteen",
				offset: 250
			})
			.setTween("#animation-twenty", 0.5, {opacity: 1})
			.addTo(controller);

			var scene28_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-twenty", duration: 250,
					offset: 50
				})
				.setPin("#animation-twenty")
				.addTo(controller);

		var scene29 = new ScrollMagic.Scene({
				triggerElement: "#animation-twenty",
				offset: 250
			})
			.setTween("#animation-twenty-one", 0.5, {opacity: 1})
			.addTo(controller);

			var scene29_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-twenty-one", duration: 250,
					offset: 50
				})
				.setPin("#animation-twenty-one")
				.addTo(controller);

		var scene30 = new ScrollMagic.Scene({
				triggerElement: "#animation-twenty-one",
				offset: 250
			})
			.setTween("#animation-twenty-two", 0.5, {opacity: 1})
			.addTo(controller);

			var scene30_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-twenty-two", duration: 250,
					offset: 50
				})
				.setPin("#animation-twenty-two")
				.addTo(controller)
				.on("enter", function (e) {
					odometer16.innerHTML = 32;
				});


		var scene31 = new ScrollMagic.Scene({
				triggerElement: "#animation-twenty-two",
				offset: 250
			})
			.setTween("#animation-twenty-three", 0.5, {opacity: 1})
			.addTo(controller);

		var scene32 = new ScrollMagic.Scene({
				triggerElement: "#animation-twenty-three",
				offset: 250
			})
			.setTween("#animation-twenty-four", 0.5, {opacity: 1})
			.addTo(controller);



		var scene32 = new ScrollMagic.Scene({
				triggerElement: ".statistic-three-wrapper .statistic-three .donuts-wrapper"
			})
			.addTo(controller)
			.on("enter", function (e) {
				thirdStatistic();
			});

		//SCENES FOR FOURTEEN - END


		//SCENES FOR FIFTEEN - START

		var scene33 = new ScrollMagic.Scene({
				triggerElement: "#scene-five",triggerHook: 'onLeave', duration: 1440,
				offset: -10
			})
			.setPin("#scene-five")
			.addTo(controller);

		var scene34 = new ScrollMagic.Scene({
				triggerElement: ".fifteen-timeline-wrapper",
				offset: 50
			})
			.setTween("#animation-twenty-five", 0.5, {opacity: 1})
			.addTo(controller);

			var scene34_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-twenty-five", duration: 250,
					offset: 50
				})
				.setPin("#animation-twenty-five")
				.addTo(controller);


		var scene35 = new ScrollMagic.Scene({
				triggerElement: "#animation-twenty-five",
				offset: 150
			})
			.setTween("#animation-twenty-six", 0.5, {opacity: 1})
			.addTo(controller);


			var scene35_1 = new ScrollMagic.Scene({
					triggerElement: "#animation-twenty-six", duration: 250,
					offset: 50
				})
				.setPin("#animation-twenty-six")
				.addTo(controller);

		var scene36 = new ScrollMagic.Scene({
				triggerElement: "#animation-twenty-six",
				offset: 150
			})
			.setTween("#animation-twenty-seven", 0.5, {opacity: 1})
			.addTo(controller);


		//SCENES FOR FIFTEEN - END
});

$(window).load(function(){
	odometer1.innerHTML = 1095;
});

function smoothScroll () {
	var $window = $(window);
	var scrollTime = 0.7;
	var scrollDistance = 170;

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();	

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5							
			});

	});
}

function firstStatistic () {
	CanvasJS.addColorSet("first-pie",
        [
        "#f6f6f6",
        "#eaaa7f",
        "#fb8d66",
        "#f8622e",
        "#000000",
        "#d64e1e",
        "#e6ac6b"
        ]);

	CanvasJS.addColorSet("second-pie",
        [
        "#f6f6f6",
        "#f8622e"
        ]);

	CanvasJS.addColorSet("third-pie",
        [
        "#f8622e",
        "#eaaa7f",
        "#f6f6f6"
        ]);


    var chart1 = new CanvasJS.Chart("first-pie", {

      animationEnabled: true,
      interactivityEnabled: false,
      backgroundColor: null,
      colorSet: 'first-pie',
      toolTip:{
        enabled: false
      },
      data: [//array of dataSeries              
        { //dataSeries object
         indexLabelPlacement: "inside",
       	 startAngle:-90,
       	 lineThickness: 50,
         type: "doughnut",
         dataPoints: [
         { label: null, y: 1530 },
         { label: null, y: 148 },                                    
         { label: null, y: 177 },
         { label: null, y: 538 },
         { label: null, y: 27 },
         { label: null, y: 227 }
         ]
       }
       ]
     });

    chart1.render();

    var chart2 = new CanvasJS.Chart("second-pie", {

      animationEnabled: true,
      interactivityEnabled: false,
      backgroundColor: null,
      colorSet: 'second-pie',
      toolTip:{
        enabled: false
      },
      data: [//array of dataSeries              
        { //dataSeries object
         indexLabelPlacement: "inside",
       	 startAngle:-90,
       	 lineThickness: 50,
         type: "doughnut",
         dataPoints: [
         { label: null, y: 12426 },
         { label: null, y: 12571 }
         ]
       }
       ]
     });

    chart2.render();

    var chart3 = new CanvasJS.Chart("third-pie", {

      animationEnabled: true,
      interactivityEnabled: false,
      backgroundColor: null,
      colorSet: 'third-pie',
      toolTip:{
        enabled: false
      },
      data: [//array of dataSeries              
        { //dataSeries object
         indexLabelPlacement: "inside",
       	 startAngle:-90,
       	 lineThickness: 50,
         type: "doughnut",
         dataPoints: [
         { label: null, y: 176632 },
         { label: null, y: 48156 },
         { label: null, y: 9071 }
         ]
       }
       ]
     });

    chart3.render();
}


function videoSlider() {
	var cur = 1;
	var size = $('.video-slider .video-block').size();
	$('.video-block[data='+cur+']').show();
	

	$('.paginator li').click(function() {
		$('.paginator li.active').removeClass('active');
		$(this).addClass('active');

		var data = $(this).attr('data');
		cur = data;
		$('.current-number').html(cur).fadeIn(400);
		$('.video-block').fadeOut(400);
		$('.video-block[data='+data+']').fadeIn(400);
		$('.current-number').fadeOut(400);
	});

	$('.video-slider .left-arrow').click(function() {
		if (cur == 1) {
			cur = size;
		}
		else 
		{
			cur--;
		}
		$('.paginator li.active').removeClass('active');
		$('.paginator li[data='+cur+']').addClass('active');

		$('.current-number').html(cur).fadeIn(400);
		$('.video-block').fadeOut(400);
		$('.video-block[data='+cur+']').fadeIn(400);
		$('.current-number').fadeOut(400);
	});


	$('.video-slider .right-arrow').click(function() {
		if (cur == size) {
			cur = 1;
		}
		else 
		{
			cur++;
		}
		$('.paginator li.active').removeClass('active');
		$('.paginator li[data='+cur+']').addClass('active');

		$('.current-number').html(cur).fadeIn(400);
		$('.video-block').fadeOut(400);
		$('.video-block[data='+cur+']').fadeIn(400);
		$('.current-number').fadeOut(400);
	});
}


function secondStatistic () {
	CanvasJS.addColorSet("first-pie",
        [
        "#f6f6f6",
        "#eaaa7f",
        "#fb8d66",
        "#f8622e",
        "#000000",
        "#d64e1e",
        "#e6ac6b"
        ]);

	CanvasJS.addColorSet("second-pie",
        [
        "#f6f6f6",
        "#f8622e"
        ]);

	CanvasJS.addColorSet("third-pie",
        [
        "#f8622e",
        "#f8622e",
        "#f8622e"
        ]);

	CanvasJS.addColorSet("four-pie",
        [
        "#f6f6f6",
        "#eaaa7f",
        "#f8622e"
        ]);

	CanvasJS.addColorSet("five-pie",
        [
        "#eaaa7f",
        "#f8622e"
        ]);




    var chart4 = new CanvasJS.Chart("four-pie", {

      animationEnabled: true,
      interactivityEnabled: false,
      backgroundColor: null,
      colorSet: 'four-pie',
      toolTip:{
        enabled: false
      },
      data: [//array of dataSeries              
        { //dataSeries object
         indexLabelPlacement: "inside",
       	 startAngle:-90,
       	 lineThickness: 50,
         type: "doughnut",
         dataPoints: [
         { label: null, y: 44 },
         { label: null, y: 31 },
         { label: null, y: 25 }
         ]
       }
       ]
     });

    chart4.render();

    var chart5 = new CanvasJS.Chart("five-pie", {

      animationEnabled: true,
      interactivityEnabled: false,
      backgroundColor: null,
      colorSet: 'five-pie',
      toolTip:{
        enabled: false
      },
      data: [//array of dataSeries              
        { //dataSeries object
         indexLabelPlacement: "inside",
       	 startAngle:-90,
       	 lineThickness: 50,
         type: "doughnut",
         dataPoints: [
         { label: null, y: 148 },
         { label: null, y: 460 }
         ]
       }
       ]
     });

    chart5.render();
}

function thirdStatistic () {
	CanvasJS.addColorSet("six-pie",
        [
        "#f8622e",
        "#eaaa7f",
        "#252525",
        "#d64e1e",
        "#f6f6f6"
        ]);

	CanvasJS.addColorSet("seven-pie",
        [
        "#eaaa7f",
        "#f8622e"
        ]);

	CanvasJS.addColorSet("eight-pie",
        [
        "#f6f6f6",
        "#f8622e",
        "#fb8d66",
        "#f8622e",
        "#000000",
        "#d64e1e"
        ]);


    var chart6 = new CanvasJS.Chart("six-pie", {

      animationEnabled: true,
      interactivityEnabled: false,
      backgroundColor: null,
      colorSet: 'six-pie',
      toolTip:{
        enabled: false
      },
      data: [//array of dataSeries              
        { //dataSeries object
         indexLabelPlacement: "inside",
       	 startAngle:-90,
         type: "doughnut",
         dataPoints: [
         { label: null, y: 73 },
         { label: null, y: 10 },                                    
         { label: null, y: 3 },
         { label: null, y: 2 },
         { label: null, y: 2 }
         ]
       }
       ]
     });

    chart6.render();

    var chart7 = new CanvasJS.Chart("seven-pie", {

      animationEnabled: true,
      interactivityEnabled: false,
      backgroundColor: null,
      colorSet: 'seven-pie',
      toolTip:{
        enabled: false
      },
      data: [//array of dataSeries              
        { //dataSeries object
         indexLabelPlacement: "inside",
       	 startAngle:-90,
       	 lineThickness: 50,
         type: "doughnut",
         dataPoints: [
         { label: null, y: 57 },
         { label: null, y: 43 }
         ]
       }
       ]
     });

    chart7.render();

    var chart8 = new CanvasJS.Chart("eight-pie", {

      animationEnabled: true,
      interactivityEnabled: false,
      backgroundColor: null,
      colorSet: 'eight-pie',
      toolTip:{
        enabled: false
      },
      data: [//array of dataSeries              
        { //dataSeries object
         indexLabelPlacement: "inside",
       	 startAngle:-90,
       	 lineThickness: 50,
         type: "doughnut",
         dataPoints: [
         { label: null, y: 18 },
         { label: null, y: 33 },
         { label: null, y: 20 },
         { label: null, y: 16 },
         { label: null, y: 7 },
         { label: null, y: 6 }
         ]
       }
       ]
     });

    chart8.render();
}

function mouseClick() {
	$('a.mouse[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target),
		d = $target.offset().top;


		$('html, body').stop().animate({
			'scrollTop': d
		}, 900, 'swing', function () {
			// window.location.hash = target;
		});
	});
}
$(function(){
	$(".xuanze span").click(function(){
		$(".warn").toggle();
		$(".tishi").toggle();
		$(this).toggleClass("xuanze-ionc")
	})
})
$(function(){
	$('#dowebok').fullpage({
		// sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		"scrollOverflow": true,
		'navigation': true,
		afterLoad: function(anchorLink, index){
			if(index == 2){
				$('.screen2').fadeTo(2000,1);
					$(".screen2-title").fadeTo(1000,1,function(){
						$(".screen2-warn").delay(500).fadeTo(1000,1,function(){
							$(".screen2-pic-bc").fadeTo(500,1,function(){
								$(".screen2-person-txt").fadeTo(500,1);
								$(".screen2-car-txt").fadeTo(500,1);
								$(".screen2-pic-gift").fadeTo(500,1).animate({"width":"120","height":"120",left:170,top:135},1000);
								$(".screen2-equity-icon").fadeTo(500,1).animate({top:23},1000);
								$(".screen2-car-icon").fadeTo(500,1).animate({left:100,bottom:130},1000);
								$(".screen2-person-icon").fadeTo(500,1).animate({right:100,bottom:130},1000);
								
							})
						})
					}).animate({top: '0',}, 1000)	
			}
			if(index == 3){
				$('.screen3').fadeTo(2000,1).delay(500);
				$(".screen3-main-top-title").fadeTo(500,1,function(){
					$(".screen3-main-top-prompt").delay(500).fadeTo(500,1,function(){
						$(".screen3-main-body").delay(500).fadeTo(500,1).animate({top:"0"},1000);
					}).animate({top:"0"},1000);
				}).animate({top:"0"},1000);
			}
			if(index == 4){
				$('.screen4').fadeTo(2000,1)
				$(".screen4-main-top-title").fadeTo(500,1,function(){
					$(".screen4-main-top-prompt").delay(500).fadeTo(500,1,function(){
						$(".item1").delay(500).fadeTo(500,1,function(){
							$(".item2").delay(500).fadeTo(500,1,function(){
								$(".item3").delay(500).fadeTo(500,1).animate({top:"0"},500);
							}).animate({top:"0"},500);
						}).animate({top:"0"},500);
					}).animate({top:"0"},1000);
				}).animate({top:"0"},1000);
			}
			// if(index == 5){
			// 	$('.section5').;
			// }
			// if(index == 6){
			// 	$('.section6').;
			// }
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.screen2').css({opacity:1})
			}
			if(index == '3'){
				$('.screen3').css({opacity:1})
			}
			if(index == '4'){
				$('.screen4').css({opacity:1})
			}
			// if(index == '5'){
			// 	$('.screen4').find('p').fadeOut(2000);
			// }
			// if(index == '6'){
			// 	$('.screen4').find('p').fadeOut(2000);
			// }
		}
	});
});
$(function(){
	$(".side").mouseenter(function(){
		$(".weixin .r-weixin").css("background-image","none");
		$(".weixin .r-weixin i").css("visibility","visible")
		$(".l-weixin").css("display","block")
	}).mouseleave(function(){
		$(".weixin .r-weixin").css("background-image","url(images/za_weixin_ico_0817.png)");
		$(".weixin .r-weixin i").css("visibility","hidden")
		$(".l-weixin").css("display","none")
	})
})
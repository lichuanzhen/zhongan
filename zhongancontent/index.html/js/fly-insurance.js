$(function(){
	$(".ensure-plan-body ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var $money = $(this).find(".model-money").html();
		$(".money").html($money)
		//console.log($money);
	});
	// 飞行器select 的点击事件
	var arr=["388元","588元","788元","1088元"]
	$(".fly-produce dl dd").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index = $(this).index();
		$(".money").html(arr[index-1]);
	})
	$(window).scroll(function(){
		var top = $(window).height();
		//console.log(top);
		if($(window).scrollTop() >= top){
			$(".toTop").fadeIn(500);
		}else{
			$(".toTop").fadeOut(500);
		}
	})

	$(".toTop").click(function(){
		$("body,html").animate({scrollTop:0},500)
	});
	// 固定定位
	var top = $('.fixed-outer').offset().top;
	//console.log(top);
	$(window).scroll(function(){
		if($(window).scrollTop() >= top){
			$('.fixed-outer').css({position:'fixed',top:'0px',borderBottom:"2px solid #ccc"});
		}else{
			$(".fixed-outer").css({position:"static",borderBottom:"none"})
		}
	})
	// 返回对应得位置
	var $li_top = $(".scrollFixed li");
	// 这个数组通过索引值和侧边栏一一对应
		var li_tops = [$('.produce-feature').offset().top, $('.ensure-plan').offset().top, $('.flow').offset().top, 
		$('.questions').offset().top] ;
		$li_top.click(function(event) {
			var index = $(this).index();
			$('html,body').animate({'scrollTop':li_tops[index]-110}, 1000);
		});
		//内容与侧栏相对应
		//console.log($li_top)
		$(window).scroll(function(){
			var $wst = $(window).scrollTop();
			if ($wst <= li_tops[1]-150){//第一屏
				index  = 0 ;
			}else if ($wst <= li_tops[2]-150){//第二屏
				index = 1
			}else if ($wst <= li_tops[3]-150){//第三屏
				index = 2
			}else{//第四屏
				index = 3
			};
			$li_top.eq(index).addClass('green').siblings().removeClass('green');
		})
}) 
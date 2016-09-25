// 
$(function(){
	//tab1 家政厨师；
	$('#tab1 ul li').mouseenter(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		//轮播 四波图片；
		$('#pic1>ul').eq(index).addClass('on4').siblings().removeClass('on4');
		//轮播 90元，150元；
		$('#tab2 ul li').eq(index-1).addClass('on2').siblings().removeClass('on2');
	})
	//tab2 50元起；
	$('#tab2 ul li').mouseenter(function(){
		$(this).addClass('on2').siblings().removeClass('on2');
		var index = $(this).index();
		$('#tac p').eq(index).addClass('out').siblings().removeClass('out');
	})
	// 一共四波 图片，添加 移除，透明度；
	$('#tab2 ul li:eq(0)').mouseenter(function(){
		//第一，透明度移除；
		$('#pic1 ul li:eq(2)>div').removeClass('box-opacity');
		//第一，透明度添加；
		$('#pic1 ul li:eq(2)>div').addClass('box-opacity');
		$('#pic1 ul li:eq(3)>div').addClass('box-opacity');
		$('#pic1 ul li:eq(4)>div').addClass('box-opacity');
		//第二波, 操作；
		$('#pic1 ul li:eq(7)>div').addClass('box-opacity'); //第二波；添加透明度
		$('#pic1 ul li:eq(8)>div').addClass('box-opacity'); //第二波；添加透明度
		//第三波, 操作；
		$('#pic1 ul li:eq(11)>div').addClass('box-opacity'); //第三波；90元时；添加
		$('#pic1 ul li:eq(12)>div').addClass('box-opacity'); //第三波150元时；移除
		$('#pic1 ul li:eq(13)>div').addClass('box-opacity'); //第三波；150元时；移除
		//第四波；操作
		$('#pic1 ul li:eq(16)>div').addClass('box-opacity'); //第四波；添加
		$('#pic1 ul li:eq(17)>div').addClass('box-opacity'); //第四波；添加
	})
	$('#tab2 ul li:eq(1)').mouseenter(function(){
		//透明度移除；
		$('#pic1 ul li:eq(2)>div').removeClass('box-opacity');
		$('#pic1 ul li:eq(7)>div').removeClass('box-opacity'); //第二波；移除
		$('#pic1 ul li:eq(11)>div').removeClass('box-opacity'); //第三波；90元时；移除
		//透明度添加；
		$('#pic1 ul li:eq(3)>div').addClass('box-opacity');
		$('#pic1 ul li:eq(4)>div').addClass('box-opacity');
		//第四波；操作
		$('#pic1 ul li:eq(17)>div').addClass('box-opacity'); //第四波；添加
		//第二波
		$('#pic1 ul li:eq(8)>div').addClass('box-opacity'); //第二波；添加透明度
		$('#pic1 ul li:eq(12)>div').addClass('box-opacity'); //第三波90元时；添加透明度
		$('#pic1 ul li:eq(13)>div').addClass('box-opacity'); //第三波；90元时；添加透明度
		//第四波；操作
		$('#pic1 ul li:eq(16)>div').removeClass('box-opacity'); //第四波；移除
	//	$('#pic1 ul li:eq(11)>div').removeClass('box-opacity'); //第四波；90元时；移除
	})
	$('#tab2 ul li:eq(2)').mouseenter(function(){
		//透明度移除；
		$('#pic1 ul li:eq(2)>div').removeClass('box-opacity');
		$('#pic1 ul li:eq(3)>div').removeClass('box-opacity');
		$('#pic1 ul li:eq(4)>div').removeClass('box-opacity');
		//第二波, 操作；
		$('#pic1 ul li:eq(7)>div').removeClass('box-opacity'); //第二波；移除
		$('#pic1 ul li:eq(8)>div').removeClass('box-opacity'); //第二波；150元；移除
		//第三波, 操作；
		$('#pic1 ul li:eq(11)>div').removeClass('box-opacity'); //第三波；150元时；移除
		$('#pic1 ul li:eq(12)>div').removeClass('box-opacity'); //第三波150元时；移除
		$('#pic1 ul li:eq(13)>div').removeClass('box-opacity'); //第三波；150元时；移除
		//第四波；操作
		$('#pic1 ul li:eq(16)>div').removeClass('box-opacity'); //第四波；移除
		$('#pic1 ul li:eq(17)>div').removeClass('box-opacity'); //第四波；90元时；移除
	})
	
	// 我的优势；
	$('#myAdvantage1>ul>li').on('mouseenter',function(){
		$(this).find('.Img').fadeOut(500);
		$(this).find(':last-child').removeClass('on');		
	}).on('mouseleave',function(){
		$(this).find('.Img').fadeIn(300)
		$(this).find(':last-child').addClass('on');
	})
	// //返回顶部
	$(window).scroll(function(){
		//当滑动一大屏时，广告淡入；
		var $st = $(window).scrollTop();
		var $height = $(window).height();
		if($st >= $height){
			$('#to-Top').fadeIn(500);
		}else{
			$('#to-Top').fadeOut(500);
		}
	});
	//当点击时返回顶部；
	$('#to-Top ').click(function(){
		$(' html body').animate({scrollTop : 0},600);
	})
	// 客服 点击消失；
	$('#cli i').on('click',function(){
		$(this).parent().hide();
	})




})
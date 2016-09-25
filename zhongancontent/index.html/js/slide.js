$(function(){
	var $slide1 = $('.slide1');
	var $slide1_ul =$('.slide1 ul') ;
	var $slide1_lis =$('.slide1 ol li') ;
	var $slide1_prev =$('.slide1 .prev') ;
	var $slide1_next =$('.slide1 .next') ;
	var index = 0;
	var t = null;
	//下一张
	$slide1_next.click(function(){
		// 函数截流
		if($slide1_ul.is(':animated')){
			return false;
		} 
		if (index < ($slide1_lis.length-1) ){
			index++;
			//角标
			$slide1_lis.eq(index).addClass('current').siblings().removeClass('current');
			//图片
			$slide1_ul.animate({left:'-'+(index+1)+'00%'},500);
		}else{//如果当前图片是最后一个
			//角标
			$slide1_lis.eq(0).addClass('current').siblings().removeClass('current');
			//图片
			index++;
			$slide1_ul.animate({left:'-'+(index+1)+'00%'},500,'swing',function(){
				$slide1_ul.css('left','-100%');
				index = 0;
			});
		}
	})
	//上一张
	$slide1_prev.click(function(){
		//函数截流
		if ($slide1_ul.is(':animated')){
			return false;
		}
		if (index > 0 ){
			index--;
			//角标
			$slide1_lis.eq(index).addClass('current').siblings().removeClass('current');
			//图片
			$slide1_ul.animate({left:'-'+(index+1)+'00%'},500);
		}else{//如果当前图片是第一个
			//角标
			$slide1_lis.eq($slide1_lis.length-1).addClass('current').siblings().removeClass('current');
			index--;
			//图片
			$slide1_ul.animate({left:'-'+(index+1)+'00%'},500,'swing',function(){
				$slide1_ul.css('left','-500%');
				index = $slide1_lis.length-1;
			});
		}
	});
	//自动播放
	clearInterval(t);
	t = setInterval(function(){
		$slide1_next.click()
	},3000);
	//鼠标悬停
	$slide1.mouseenter(function(){
		clearInterval(t);
		 // $slide1_prev.fadeTo(500,1)
		 // $slide1_next.fadeTo(500,1)
	}).mouseleave(function(){
		// $slide1_prev.fadeTo(500,0)
		//  $slide1_next.fadeTo(500,0)
		 clearInterval(t);
		t = setInterval(function(){
			$slide1_next.click()
		},3000);
	})
	//点击角标时
	$slide1_lis.click(function(){
		if (index== 0 && $(this).index()==( $slide1_lis.length-1)){//如果角标位于第一个但点击的是最后一个角标，那么相		当于点击prev那个按钮
			$slide1_prev.click();
		}else if (index== ( $slide1_lis.length-1) && $(this).index()==0){//如果角标位于第一个但点击的是最后一个角标，		那么相当于点击next那个按钮
			$slide1_next.click();
		}else{
			index = $(this).index();
			$slide1_lis.eq(index).addClass('current').siblings().removeClass('current');
			//图片
			$slide1_ul.animate({left:'-'+(index+1)+'00%'},500);
		}
	});

});
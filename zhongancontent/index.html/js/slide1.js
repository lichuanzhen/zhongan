$(function(){
	var $slide2 = $("#slide2")
	var $ul = $(".pic-partner ul");
	var $lis = $(".pic-partner ul li")
	var index = 0;
	var $left = $(".slide2 span.left");
	var $right = $(".slide2 span.right");
	var t = null;
	$left.click(function(){	
		if ($ul.is(':animated')){
			return false;
		}
		if (index > 0 ){
			index--;
			//图片
			$ul.animate({left:'-'+(index+1)+'00%'},500);
		}else{//如果当前图片是第一个
			index--;
			//图片
			$ul.animate({left:'-'+(index+1)+'00%'},500,'swing',function(){
				$ul.css('left','-200%');
				index = 1;
			});
		}
	})
	$right.click(function(){
		if($ul.is(':animated')){
			return false;
		} 
		if (index < 1 ){
			index++;
			//图片
			$ul.animate({left:'-'+(index+1)+'00%'},500);
		}else{//如果当前图片是最后一个
			//图片
			index++;
			$ul.animate({left:'-'+(index+1)+'00%'},500,'swing',function(){
				$ul.css('left','-100%');
				index = 0 ;
			});
		}
	})
	//自动播放
	clearInterval(t);
	t = setInterval(function(){
		$right.click()
	},3000);
	//鼠标悬停
	$slide2.mouseenter(function(){
		clearInterval(t);
	}).mouseleave(function(){
		 clearInterval(t);
		t = setInterval(function(){
			$right.click()
		},3000);
	})
	//console.log($ul);
	//window.Slide = Slide;
});
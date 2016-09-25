// //返回顶部
$(function(){
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
	













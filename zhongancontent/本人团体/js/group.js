//teb选项卡



$(function(){

	//打开页面，众安团体 产生动画；
	$(window).on('load',function(){
		$('#con .title').animate({"left":595,},300,function(){
			$(this).animate({'left':615},150)
		})
		$('#con .subtitle').animate({"left":635,},300,function(){
			$(this).animate({'left':615},150)
		});
		setTimeout(function(){
			$('#con .btn-join').fadeTo(200,.2)
			$('#con .btn-join').animate({"left":924,'opacity' : 1},500)
		},250);
		//闪现3次；
		setTimeout(function(){
			$('#con .light').fadeIn(50).delay(50).fadeOut(50).delay(50).fadeIn(50).delay(50).fadeOut(50).delay(50).fadeIn(50)		
		},1000)
		
	})
	//teb选项卡	
	$('#tab ul li ').mouseenter(function(){
		$(this).addClass('active').siblings().removeClass('active')
		var index = $(this).index();
		$('#tab>div>div').eq(index).addClass('cell-show').siblings().removeClass('cell-show')	
	})
	//box-tab2 选项卡
	$('#box-tab2 ul li').mouseenter(function(){
		$(this).addClass('on').siblings().removeClass('on')
		var index = $(this).index();
		$('#box-tab2>div>div').eq(index).addClass('cell').siblings().removeClass('cell')
	});

	//返回顶部
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

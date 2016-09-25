//图片切换效果
$(function(){
	var $lis = $('#lister .l-in li');
	var $imgs = $('#lister .l-img div');
	var index = 0;

	//$imgs.css("display","none");
	$lis.mouseenter(function(){
		var index=$(this).index();
		show(index);

	});
	function show(index){
	//角标切换
	$lis.eq(index).addClass('active').siblings().removeClass('active');
	//图片切换
	$imgs.eq(index).addClass('active').siblings().removeClass('active');
	}
	
});



$(function(){
	var $lis = $('#coop .l-in li');
	var $imgs = $('#coop .l-img .l-box');
	var $line = $('#coop .line span');
	var index = 0;
	$imgs.eq(0).addClass('active');
	$lis.mouseenter(function(){
		index=$(this).index();
		show();
	});
	function show(){

	left = (index * 250);
	$line.stop().animate({left:left},200);
	//图片切换
	$imgs.eq(index).addClass('active').siblings().removeClass('active');
	}
	
	
});

//侧导航
$(function(){
		var $aside_nav = $('#aside-nav');
		var $aside_nav_lis = $aside_nav.find('li');
		var $window    = $(window);
		var aside_nav_top = $('.haunt-box').offset().top;
		var window_height = $window.height();
		var $toTop        = $aside_nav.find('.toTop')

		$aside_nav_lis.hover(function() {
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');

		});

		// li_tops是侧边栏的li要滚动到的对应的div的文档坐标值的纵坐标
		// 这个数组通过索引值和侧边栏一一对应
		var li_tops = [$('.haunt-box').offset().top, $('.fashion-box').offset().top, $('.life-box').offset().top, $('.special-box').offset().top, $('.economical-box').offset().top];

		$aside_nav_lis.click(function(event) {
			//让用户点击的侧边栏加上active类，它的兄弟都去掉active类
			$(this).addClass('active').siblings().removeClass('active');

			var index = $(this).index();

			$('html,body').animate({'scrollTop':li_tops[index]}, 500);
		});


		$window.scroll(function(event) {
			var win_top = $window.scrollTop();
			var n_top = win_top - aside_nav_top;
			var timer;
			console.log(win_top);
			// 当侧边导航栏达到一定高度的时候，就处于固定定位状态
			if(win_top>=aside_nav_top){
				// $aside_nav.css({'position':'absolute', top:(n_top)}
				timer = setTimeout(function(){
					$aside_nav.css({'position':'absolute', top:(n_top)});
				},500);
			}

			// 如果网页文档滚出第一屏的时候，应该让返回顶部显示。否则就隐藏
			if(win_top>aside_nav_top){
				$aside_nav.show();
			}else {
				$aside_nav.hide();
			}

			// 让侧边导航栏跟随屏幕变化而变化
			var index = 0;  //侧边栏导航的li索引值
			if(win_top<=li_tops[1]-50){   //第一屏
				index = 0;
			}else if(win_top<=li_tops[2]-50){   //第二屏
				index = 1;
			}else if(win_top<=li_tops[3]-50){   //第三屏
				index = 2;
			}else if(win_top<=li_tops[4]-50){   //第四屏
				index = 3;
			}else {   							//第五屏
				index = 4;
			}

			$aside_nav_lis.eq(index).addClass('active').siblings().removeClass('active');
		});

	});

$(function(){
	var $close = $('#close');
	$close.click(function(){
		$(this).parent().parent().hide();
	})
})

//图片切换效果改进
// function Tab(tabId){
// 	this.tab = document.getElementById(tabId);
// 	//获取所有的li
// 	this.lis = this.tab.getElementsByTagName('li');
// 	//获取所有的img
// 	this.divs = this.tab.getElementsByTagName('div')[0];
// 	this.imgs = this.divs.getElementsByTagName('div');
// 	this.into();

// }
// Tab.prototype.into = function(){
// 	this.imgs[0].style.display = 'block';
// 	for(var i = 0; i<this.lis.length; i++){
// 		this.imgs[i].style.display = 'none';
// 		this.lis[i].index = i;
// 		var that = this;
// 		this.lis[i].onmouseenter = function(){
// 			index = this.index;
// 			that.show(index);
// 		}

// 	}
// 	this.lis[0].className = 'active';
// 	this.imgs[0].style.display = 'block';
	
	
// }
// Tab.prototype.show = function(index){
// 	for(var i = 0; i<this.lis.length; i++){
// 		this.lis[i].className = '';
// 		this.imgs[i].style.display = 'none';

// 	}
// 	this.lis[index].className = 'active';
// 	this.imgs[index].style.display = 'block';
// }






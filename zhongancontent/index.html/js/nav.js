//导航列表部分效果
//获取元素

// var inli= document.getElementById('in-li');
// var in_a = document.getElementById('in-a');
// var inul = document.getElementById('in-ul');
// var ul  = inul.getElementsByTagName("ul");
// // console.log(inli);
// // console.log(in_a);
// // console.log(inul);
// // console.log(ul);
// inli.onmouseover = function(){
// 	inul.style.display = "block";
// 	in_a.className = "on1";
// }
// inli.onmouseout = function(){
// 	inul.style.display = "none";
// 	in_a.className = "";
// }

$(function(){

	//排他思想完成teb选项
	//先把顶部hover 成功
	$("#in-li>li").mouseenter(function(){
		
		$(this).children('a').addClass("on1");
		var index = $(this).index();
		$(this).children('ul').show();
		
	})
	$("#in-li>li").mouseleave(function(){

		$(this).children('a').removeClass("on1");
		var index = $(this).index();
		$(this).children('ul').hide();
	})
	
})










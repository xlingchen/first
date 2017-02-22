$(document).ready(function(){
			//普通鼠标悬停触发事件
			$(".bt1").hover(function(){	
					$(".bt1").css("background-color","white");
			        $(".ul1").dropdown('toggle');});
//				$(".dropdown-toggle").hover(function(){//普通鼠标悬停触发事件	
//						$(".dropdown-toggle").css("background-color","white");
//				        $(".dropdown-toggle").dropdown('toggle');
//				});
	
//	$(".anim img").mouseover(function(){//鼠标悬停触发事件	
//			$(".anim img").animate({left:"10px"},300);
//	       }).mouseout(function(){$(".anim img").animate({left:"0px"},300);});
// 
// $("nav .list-group-item").eq(0).mouseover(function(){
//  		$("nav .list-group-item").eq(0).css("background-color","antiquewhite")
//  		}).mouseout(function(){$("nav .list-group-item").eq(0).css("background-color","white");});
//	
//	$("nav .list-group-item").eq(1).mouseover(function(){
//  		$("nav .list-group-item").eq(1).css("background-color","antiquewhite")
//  }).mouseout(function(){$("nav .list-group-item").eq(1).css("background-color","white")});

});
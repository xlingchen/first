$(document).ready(function(){	
	$("#father").click(function(){
			window.history.back();
	});
	$("#playing").click(function(){
		window.location.href="yingping.html";
	});
	$("#edit").click(function(){
		window.location.href="editmain.html";
	});
	$("#edit_name").click(function(){
		prompt("编辑名称","name");
	});
	$("#edit_man").click(function(){
		prompt("编辑名称","");
//		弹出输入框		
	});
	$("#post").click(function(){
		prompt("编称","name");
	});
	$(".my-d-icon").eq(0).click(function(){	
				window.location.href="all-html/first.html";
		});
	$(".my-d-icon").eq(2).click(function(){	
				window.location.href="allmuise.html";
		});
	$(".my-d-icon").eq(3).click(function(){	
				alert("已购功能");
		});
	$(".my-d-icon").eq(4).click(function(){	
				window.location.href="myedit.html";
		});
});
function animate () {
	
	
	document.getElementById("anim-3d").style.transition="";
}
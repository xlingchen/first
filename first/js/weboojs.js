
$(document).ready(function(){
	var ing=$("ul.ing");
	var drop=$("ul.drop");
	
	$("nav ul li a").eq(3).click(function(){
				$("nav ul li a").css("color","darkgray");
				$("nav ul li img").remove();
				$(this).css("color","red");
				$(this).after("<img src='../img/red.png'>");

		});
	$("nav ul li a").eq(2).click(function(){
				$("nav ul li a").css("color","darkgray");
				$("nav ul li img").remove();
				$(this).css("color","red");
				$(this).after("<img src='../img/red.png'>");
		});
	$("nav ul li a").eq(1).click(function(){
				$("nav ul li a").css("color","darkgray");
				$("nav ul li img").remove();
				$(this).css("color","red");
				$(this).after("<img src='../img/red.png'>");
		});
	$("nav ul li a").eq(0).click(function(){
				$("nav ul li a").css("color","black");
				$("nav ul li img").remove();
				$(this).css("color","red");
				$(this).after("<img src='../img/red.png'>");
		});
		$(".media-list ul li a").eq(0).click(function(){
				$(".media-list").append(ing);
				$(".media-list").append(drop);
				$(".media-list ul li a").css("background-color","lightgray");
				$(this).css("background-color","white");
		});
		$(".media-list ul li a").eq(1).click(function(){
				drop.remove();
				$(".media-list ul li a").css("background-color","lightgray");
				$(this).css("background-color","white");
				$(".media-list").append(ing);
		});
		$(".media-list ul li a").eq(2).click(function(){
				ing.remove();
				$(".media-list").append(drop);
				$(".media-list ul li a").css("background-color","lightgray");
				$(this).css("background-color","white");
		});

window._bd_share_config={  
        "common":{  
            "bdPopTitle":"您的自定义pop窗口标题",  
            "bdSnsKey":{},  
            "bdText":"此处填写自定义的分享内容",   
            "bdMini":"2",  
            "bdMiniList":false,  
            "bdPic":"http://localhost/centlight/public/attachment/201410/24/14/5449ef39574f5_282x220.jpg", /* 此处填写要分享图片地址 */  
            "bdStyle":"0",  
            "bdSize":"16"  
            },  
        "share":{}  
};  
with(document)0[  
                (getElementsByTagName('head')[0]||body).  
                appendChild(createElement('script')).  
                src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)  
];  
        
});

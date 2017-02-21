$(function(){

	$(".nav").on("click",function(){
		var $nav = $(this).index();
		$(".nav").css("background","orange");
		$(".nav").css("color","#fff");
		$(this).css("background","#fff");
		$(this).css("color","orange");
		$(".box2").css("display","none");
		$(".box2").eq($nav).css("display","block");
			})

	var mySwiper = new Swiper('.swiper-container',{
	autoplay : 1000,
    loop: true,
      pagination: '.swiper-pagination',
});

	/*foot*/
	if(localStorage.getItem("num")){
			var $num = localStorage.getItem("num");
			$(".num").html($num);
		}else{
			var $num = 0;
		}


	$(".box>div:nth-child(3)>a:nth-child(2)").on("click",function(){
		if(localStorage.getItem("a")){
			var $a = localStorage.getItem("a");
		}else{
			var $a = 0;
		}
		$num++;
		$(".num").html($num);
		var style = "商品"+$a;
		var _style = "价格"+$a;
		var img = "图片"+$a;
		$a++;
		localStorage.setItem("a",$a);
		localStorage.setItem("num",$num);
		localStorage.setItem(style,$(".h_5").html());
		localStorage.setItem(_style,$(".h_4>span").html());
		localStorage.setItem(img,$(".swiper-slide:first-child img").attr("src"));
	})
})
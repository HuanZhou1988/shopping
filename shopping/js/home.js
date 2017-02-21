$(function(){
var mySwiper = new Swiper('.swiper-container',{
	autoplay : 1000,
    loop: true,
      pagination: '.swiper-pagination',
});
$.ajax({
			url:'js/home_goods.json',
			type:'GET',
			success:function(res){
			var html1= '';
			for(var b = 0;b<res.length;b++){
				html1+= '<a href="##"><img class="img-responsive" alt="Responsive image" src="'+res[b].img+'"></a><h5>'+res[b].h5+'</h5><h4>'+res[b].h4+'</h4>'
			}
			$("#box5").html(html1);
			}
		})
var i=1;
	$(".ak").on("click",function(){
		if(i==1){
			$(this).addClass("fa-remove");
		$(this).removeClass("fa-search");
		$(".box>div:nth-child(2)").css("display","none");
		$(".box>div:nth-child(3)").css("display","none");
		$("._search").css("display","block");
		$(".box>div:nth-child(1)>p").html("商品搜素");
		i--;
	}else{
		$(this).addClass("fa-search");
		$(this).removeClass("fa-remove");
		$(".box>div:nth-child(2)").css("display","block");
		$(".box>div:nth-child(3)").css("display","block");
		$(".box>div:nth-child(1)>p").html("NIKE");
		$("._search").css("display","none");
		i++;
	}
		

	})
})
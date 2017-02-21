$(function(){
	$(".fa-angle-left").on("click",function(){
		history.back();
	})

	
	var i = 1;
	$(".ak").on("click",function(){
		if(i==1){
		$(".list").css("display","block");
		i--;
	}else{
		$(".list").css("display","none");
		i++;
	}
	})
})
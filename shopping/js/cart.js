$(function(){

/*body*/
	if(localStorage.getItem("num")){
		$(".box2>div").css("display","block");
		var $num = localStorage.getItem("num");
		var $html3 = $(".box2").html(); 
		for(i = 0;i<($num-1);i++){
			$html3+=$(".box2").html();
		}
		$(".box2").html($html3);
	}

		/*webstorage*/
	var $aa = localStorage.getItem("a");
	var $num_2=1;
	for(i = 0;i<$aa;i++){
		var $imgs = "图片" + i;
		var $name = "商品" + i;
		var $much = "价格" + i; 
		var $class1 = ".box2>div:nth-child("+$num_2+")";
		if(localStorage.getItem($imgs)&&localStorage.getItem($name)&&localStorage.getItem($much)){
			$($class1).find("p").html(localStorage.getItem($name));
			$($class1).find("._pay").html(localStorage.getItem($much));
			$($class1).find("img").attr("src",localStorage.getItem($imgs));
			$num_2++;
		}
	}

   /*+-*/
		var $_num = 0;
		var $pay = 0;
		$(".box2").find($("._sle")).on("click",function(){
		if($(this).css("background") == "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box"){
			$(this).css("background","orange");
			$pay+= parseInt($("._pay").eq($(this).index()).html());
			alert($(this).index());
		}else{
			$(this).css("background","#fff");
			$pay-= parseInt($("._pay").eq($(this).index()).html());
			
		}
		$(".pay").html($pay);

		$_num = 0;
		for(i=0;i<$num;i++){
		if($("._sle").eq(i).css("background")== "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box"){
			break;
		}else{
			$_num++;
		}
	}
		if($_num == $num){
			$(".sle").css("background","orange");
		}else{
			$(".sle").css("background","#fff");
		}
	})




/*foot*/
	$(".box>div:nth-child(3)>a:nth-child(1)").on("click",function(){
		if($(".sle").css("background")== "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box"){
			$(".sle").css("background","orange");
			$("._sle").css("background","orange");
			$pay=0;
			for(i=0;i<$num;i++){
				$pay+= parseInt($("._pay").eq(i).html());
			}
			$(".pay").html($pay);			
		}else{
			$(".sle").css("background","#fff");
			$("._sle").css("background","#fff");
			$pay=0;
			$(".pay").html("0");
		}
	})

	$(".box>div:nth-child(3)>a:nth-child(2)").on("click",function(){
		$(".po").css("display","block");
	})
	$(".po span").on("click",function(){
		$(".po").css("display","none");
		$(".poname").html($(this).html());
	})

})
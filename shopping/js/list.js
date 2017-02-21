$(function(){
	var a=0;
	var q=0;
	$("#sort>div").on("click",function(){
		var $idx = $(this).index();
		for(var i = 0;i<3;i++){
			if($('#sort i').eq(i).attr("class") == 'fa fa-caret-down fa-lg'){
				a=1;
			}else{
				a=0;
				break;
			}
		}
		if(a==1){
			$('#sort i').eq($idx).addClass("fa-caret-up");
			$(this).css("color","orange");
			$(".box>div:nth-child(2)").css("display","none");
			$(".box11").eq($idx).css("display","block");
			if($idx == 2){
				$(".box>div:nth-child(2)").css("display","block");
				$(".box11").css("display","none");
			}
			q=$idx;
		}else{
			if(q==$idx){
				$('#sort i').eq($idx).removeClass("fa-caret-up");
				$('#sort i').eq($idx).addClass("fa-caret-down");
				$(".box>div:nth-child(2)").css("display","block");
				$(".box11").css("display","none");
				$(this).css("color","#fff");
			}else{
				q=$idx;
				for(var i = 0;i<3;i++){
					$('#sort i').eq(i).removeClass("fa-caret-up");
					$('#sort i').eq(i).addClass("fa-caret-down");
					$("#sort>div").eq(i).css("color","#fff");
				}
				$('#sort i').eq($idx).addClass("fa-caret-up");
				$(".box11").css("display","none");
				$(".box11").eq($idx).css("display","block");
				$(".box>div:nth-child(2)").css("display","none");
				$(this).css("color","orange");
				if($idx == 2){
					$(".box>div:nth-child(2)").css("display","block");
				}
			}
		}
	})


/*.box11*/
$.ajax({
			url:'js/list_lei.json',
			type:'GET',
			success:function(res){
			var html1= '';
			var $idx = 0;
			for(var b = 0;b<res.length;b++){
				html1+= '<a href="##">'+res[b].a1+'</a>';
			}
			$(".box21>div:nth-child(1)").html(html1);

			$(".box21>div:nth-child(1)>a").on("click",function(){
				var html2= '';
				$idx = $(this).index();
				$(".box21>div:nth-child(1)>a").css("background","#ccb");
				$(this).css("background","#cc9");
				for(var i=0;i<res[$idx].a11.length;i++){
					html2+= '<a href="##">'+res[$idx].a11[i]+'</a>';
				}
				$(".box21>div:nth-child(2)").html(html2);


				$(".box21>div:nth-child(2)>a").on("click",function(){
				var html3= '';
				var $idx1 = $(this).index();
				$(".box21>div:nth-child(2)>a").css("background","#cc9");
				$(this).css("background","#fff");
				for(var i=0;i<res[$idx].a110[$idx1].a111.length;i++){
					html3+= '<a href="##">'+res[$idx].a110[$idx1].a111[i]+'</a>';
				}
				$(".box21>div:nth-child(3)").html(html3);

				$(".box21>div:nth-child(1)>a").on("click",function(){
					$(".box21>div:nth-child(3)").html("");
				})

				$(".box21>div:nth-child(3)>a").on("click",function(){
					$(".box>div:nth-child(2)").css("display","block");
					$(".box11").css("display","none");
					$('#sort i').eq(0).removeClass("fa-caret-up");
					$('#sort i').eq(0).addClass("fa-caret-down");
					$("#sort>div").css("color","#fff");
					$(".box21>div:nth-child(3)>a").css("background","#fff");
					$(this).css("background","pink");
				})
			})

			})
			}
		})
})
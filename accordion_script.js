$(document).ready(function(){
	$(".heading").click(function(){
		let nxt=$(this).next().css("display")
		if(nxt==="none")
			$(this).next().css("display","block")
		else
			$(this).next().css("display","none")
	});		
});

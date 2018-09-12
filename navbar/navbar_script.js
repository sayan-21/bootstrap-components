$(document).ready(function(){
	// $(".bars").css("display","none");
	checkWidth()
	$(".bars").on("click",function(){
		$(".dropdown").removeClass("hide")
		$(".dropdown-content").css("display","block")
	})
	$(document).click(function(){
	 $(".dropdown-content").hide('slow'); 
	});
	$(".bars").click(function(e){
	  e.stopPropagation(); 
	});

});
let checkWidth=()=>{
	let w=$(window).width()
	if(w<550){
		$(".item-list").addClass("hide")
		$(".bars").removeClass("hide")
	}
	else{
		$(".item-list").removeClass("hide")
		$(".bars").addClass("hide")
	}
}
window.setInterval(function(){checkWidth()},1000)
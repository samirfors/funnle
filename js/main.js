
$(document).ready(function(){
	//set the initial body width
	var windowH = window.innerHeight; 
	/*I need to go through all target divs because i don't know 
	how many divs are here and what are their initial height*/

 	function resize() {
	    //get the initial height of every div
	    var windowH = window.innerHeight; 
	    var windowW = window.innerWidth; 
	    //sets the different height for every needed div
	    $(".video_container").css("height", windowH); 
	    $(".video_container").css("width", windowW); 
	    $("header").css("height", windowH); 
	}

	$(".video_container").each(resize);
	$("header").each(resize);

	$(document).resize(function(){
	    $(".video_container").each(resize);
	    $("header").each(resize);
	  });

});
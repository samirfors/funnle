$(document).ready(function(){
	//set the initial body width
	var windowH = window.innerHeight; 
	/*I need to go through all target divs because i don't know 
	how many divs are here and what are their initial height*/
 	function resize() {
	    //get the initial height of every div
	    var windowH = screen.height; 
	    var windowW = window.innerWidth; 
	    var videoHeaderH = screen.height - 50;
	    //sets the different height for every needed div
	    $(".video_container").css("height", windowH); 
	    $(".video_container").css("width", windowW);
	    $(".video_header").css("height", videoHeaderH); 
	}

	$(".video_container").each(resize);
	$(".video_header").each(resize);

	$(document).resize(function(){
	    $(".video_container").each(resize);
	    $(".video_header").each(resize);
	  });

	$("#learnMore_btn").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#scrollToLearnMore").offset().top
	    }, 1000);
	});



});
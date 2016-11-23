$(document).ready(function(){
	$height = $(window).height();
	if ($(window).width() >= 768 && $height >= 662) 
	{
		$height = $height - $height/3;
	}

	$(".firstWrap").css('height', $height + 'px');

/********** Sticky Navigation **********/
var navOffset = $("nav").offset().top;
	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();
		if (scrollPos >= navOffset) {
			$("nav").addClass("navbar-fixed-top");
		}else{
			$("nav").removeClass("navbar-fixed-top");
		}
	});
/***************************************/

});
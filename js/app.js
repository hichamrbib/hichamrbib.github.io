$(document).ready(function(){
/***********  firstWrap section  *********/
	$height = $(window).height();
	$width 	= $(window).width();
	if ($width >= 768 && $height >= 638) 
	{$height = $height - $height/5;}
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

/***********  survol directionnel *******************/
	function _getDir($el, event){
		var	w  	= $el.width();
			h   = $el.height();
			cx  = $el.offset().left + w/2,
			cy  = $el.offset().top + h/2,
			x   = (event.pageX - cx) * (w>h?(h/w) : 1),
			y   = -(event.pageY - cy) * (h>w?(w/h) : 1);
			direction = Math.round( ( (Math.atan2(x,y) + Math.PI) / (Math.PI/2)) + 2 ) % 4 
		var directions = {
				0 : {left:0, top:-h},
				1 : {left:w, top:0},
				2 : {left:0, top:h},
				3 : {left:-w, top:0}
			}
		return directions[direction];
	}
	$('.thumb').on('mouseenter', function(event){
		$(this).find('.alt').css(_getDir($(this),event)).animate({top: 0, left: 0}, 300);
	});

	$('.thumb').on('mouseleave', function(event){
		$(this).find('.alt').animate(_getDir($(this),event), 300);
	});

});
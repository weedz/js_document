$(document).ready(function() {
	$('.header').click(function() {
		var element = $(this).next('.content');
		if (element.is(":hidden")) {
			element.slideDown(200);
			if ($("#autocollapse").is(':checked')) {
				//$('.content').not(element).slideUp(200);
				if((element.parent('.toggle').html()))
				{
					$('.content').not(element).slideUp(200);
				}
			}
		} else {
			element.slideUp(200);
			element.find('.content').slideUp(150);
		}
		$('html, body').animate({
			scrollTop: $(this).offset().top-70
		}, 300);
	});
	$(".subheader").click(function() {
		var p = $(this).next('.content');
		if (p.is(":hidden")) {
			p.slideDown(200);
			
		} else {
			p.slideUp(300);
		}
		$('html, body').animate({
			scrollTop: $(p).offset().top-70
		}, 300);
	});
	$(".collapseall").click(function() {
		$(".content").slideUp(400);
	});
});
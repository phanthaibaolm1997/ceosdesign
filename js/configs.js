
$(document).ready(function() {
	//service
	$('.content-detail').fadeOut();
	$('.click-here').click(function(event) {
		
		$(this).closest('.full-width').siblings('.details').children('.img-fake').fadeOut(1000);
		$(this).closest('.full-width').siblings('.details').children('.content-detail').fadeIn(2000);
	});

	//quy trinh
	$('.content-qt').fadeOut();
	$('.title-qt').click(function(event) {
		$('.content-qt').slideUp(500);
		$(this).siblings('.content-qt').slideToggle(500);
		return false;
	});
	$('.single-item').slick();

});
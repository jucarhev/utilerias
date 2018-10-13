$(document).ready(function(){
	$('.ir_arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		},300);
	});

	$('.ir_arriba').hide();

	$(window).scroll(function(){
		if ($(window).scrollTop() > 0) {
			$('.ir_arriba').slideDown(300);
		}else{
			console.log("arriba");
			$('.ir_arriba').slideUp(300);
		}
	});


});

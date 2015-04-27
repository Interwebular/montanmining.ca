(function($){

	$(document).ready(function(){

	 	$('.image-gallery').slick({
			slidesToShow: 1,
	  		slidesToScroll: 1,
	  		arrows: false,
	  		fade: true,
	  		asNavFor: '.image-slider',
	  		adaptiveHeight: true
		});

		$('.image-slider').slick({
		  	slidesToShow: 5,
		  	slidesToScroll: 1,
		  	asNavFor: '.image-gallery',
		  	centerMode: true,
		  	focusOnSelect: true
		});

	});


})(jQuery);
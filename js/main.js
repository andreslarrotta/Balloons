/* * * * MAIN JQUERY * * * */

$(document).ready(function() {

	$("#opcion1").click(function(){
		$('html, body').animate({
		    scrollTop: $("#home").offset().top
		}, 5000);
	});
	$("#opcion2").click(function(){
		$('html, body').animate({
		    scrollTop: $("#servicios").offset().top
		}, 5000);
	});
	$("#opcion3").click(function(){
		$('html, body').animate({
		    scrollTop: $("#contacto").offset().top
		}, 5000);
	});

});



( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    
	    
	}
		
} )( jQuery );
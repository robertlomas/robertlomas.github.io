jQuery(document).ready(function($) {

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({

	    target: '.navbar-fixed-top'

	});



	// Smooth scrolling
	$('.page-scroll a').click( function(event) {

        var $anchor = $(this);

        $('html, body').stop().animate({

            scrollTop: $($anchor.attr('href')).offset().top

        }, 1500, 'easeInOutExpo');

        return false;
    });
	
	

});
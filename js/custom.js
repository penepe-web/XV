(function($) {
    "use strict";
	
	
	/* ..............................................
	Loader 
    ................................................. */
	
$(document).ready(function() {
    // Bloquear scroll al inicio
    $('body').css({'overflow':'hidden'});

    // Animación automática del sobre (simulada con CSS o jQuery animate)
    // Aquí usamos un setTimeout para 5 segundos
    setTimeout(function() {
        // La animación terminó, ahora permitimos clicks para cerrar
        $('#preloader').addClass('clickable'); 
    }, 5000); // 5000ms = 5 segundos

    // Función para cerrar preloader y reproducir música
    function closePreloader() {
        $('#preloader').fadeOut('slow');
        $('body').css({'overflow':'visible'});
        $('#bg-music')[0].play();
    }

    // Click en sobre, carta, logo o corazones
    $('#envelope, .letter, .hearts, .navbar-brand img').on('click', function() {
        if ($('#preloader').hasClass('clickable')) {
            closePreloader();
        }
    });
});
    	
	/* ..............................................
    Navbar Bar
    ................................................. */
	
	$('.navbar-nav .nav-link').on('click', function() {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			$('.navbar-collapse').collapse('hide');
		}
	});
	
	/* ..............................................
    Fixed Menu
    ................................................. */
    
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});
	
	/* ..............................................
    Gallery
    ................................................. */
	
	$(document).ready(function() {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
	});
	
	/* ..............................................
    Smooth Scroll
    ................................................. */
	
	$('a[href*="#"]:not([href="#"])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
		  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top - 65,
				  }, 1000);
				  return false;
			  }
		}
	});
	
}(jQuery));
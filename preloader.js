$(document).ready(function() {
    var envelope = $('#envelope');
    var letter = $('.letter');
    var hearts = $('.hearts');
    var music = document.getElementById("music");
    var animationStarted = false;

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
        animationStarted = true;

        // bloquear más clics
        $("#envelope, .letter, .hearts").css("pointer-events", "none");

        // reproducir música
        music.currentTime = 0;
        music.play();

        // mostrar corazones
        hearts.show().addClass("animate");

        // carta empieza a salir a los 2s
        setTimeout(function(){
            envelope.addClass("letterUp");
        }, 1000);

        // después de 7s → zoomOut de la carta
        setTimeout(function(){
            letter.addClass("zoomOut");

            // After the letter animation completes (1s), start the new sequence
            setTimeout(function(){
                // Delay for 2 seconds before the zoom-out starts
                setTimeout(function(){
                    // Apply zoom-out effect to the preloader wrapper
                    $('#preloader').css('transform', 'scale(0)');

                    // After the zoom-out transition completes, hide preloader and show main content
                    setTimeout(function(){
                        $("#preloader").hide(); // Use hide() for a clean removal
                        $("#main-content").fadeIn(800);
                    }, 400); // This delay should match the CSS transition duration
                }, 1000); // 2-second delay before the zoom-out starts
            }, 1000); // Existing delay for the letter animation
        }, 3000);
    }

    // clic en sobre o carta
    $('#envelope, .letter').on('click', function() {
        if (!animationStarted) {
            openEnvelope();
        }
    });
});
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
        }, 2000);

        // después de 7s → zoomOut de la carta
        setTimeout(function(){
            letter.addClass("zoomOut");

            // cuando termine el zoom → mostrar la página
            setTimeout(function(){
                $("#preloader").fadeOut(800, function(){
                    $("#main-content").fadeIn(800);
                });
            }, 1500);

        }, 7000);
    }

    // clic en sobre o carta
    $('#envelope, .letter').on('click', function() {
        if (!animationStarted) {
            openEnvelope();
        }
    });
});

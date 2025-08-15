$(document).ready(function () {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    // Función para abrir el sobre
    function open() {
        envelope.addClass("open").removeClass("close");
        document.body.classList.add("loaded"); // cambia color de fondo
    }

    // Función para cerrar el sobre
    function close() {
        envelope.addClass("close").removeClass("open");
        document.body.classList.add("loaded"); // cambia color de fondo
    }

    // Animación automática al cargar la página
    setTimeout(function () {
        open();
    }, 500); // puedes ajustar el tiempo si quieres que espere más

    // Los botones siguen funcionando si los usas
    btn_open.click(function () {
        open();
    });
    btn_reset.click(function () {
        close();
    });

});

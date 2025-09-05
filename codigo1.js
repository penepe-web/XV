//ejemplo básico
$(document).ready(function(){
  $("#btn1").click(function(){
    Swal.fire({
        title: `
    <div style="white-space: nowrap; font-size: 20px; font-weight: bold;">
      0170284440000033103062
    </div>
    <div style="white-space: nowrap; font-size: 18px; margin-top: 10px;">
      DIENTE.MADRE.LUNES
    </div>
  `,
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#cca9dd",
    });
  });
});




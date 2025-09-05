//ejemplo básico
$(document).ready(function(){
  $("#btn1").click(function(){
    Swal.fire({
  html: `
    <div style="text-align:center;">
      <div style="white-space:nowrap; font-size:22px; font-weight:bold; color:#000;">
        0170284440000033103062
      </div>
      <div style="white-space:nowrap; font-size:20px; margin-top:8px; color:#000;">
        DIENTE.MADRE.LUNES
      </div>
    </div>
  `,
  width: 600,
  padding: "2em",
  background: "#fff url('./img/22.png') no-repeat center center / cover",
  color: "#716add",
    });
  });
});





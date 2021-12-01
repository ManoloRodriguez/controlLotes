$(document).ready(function(){
  $("#btnBuscar").click(function(){
    opcion = 1;
    opt = 2;
    buscar = $.trim($("#buscar").val()); // Numero de Parte.

    if(buscar != ''){
      // VALORES A MOSTRAR EN EL MODAL.
      // numParte = $("#numParte").val(buscar);
      $.ajax({
        url: "Modelo(conexion)/crud2.php",
        type: "POST",
        dataType: "json",
        data: {opcion: opcion, buscar: buscar, opt: opt,},

        success: function(data){

          // OBTENER LOS VALORES DE LA SENTENCIA SQL Y GUARDAR EN CADA INPUT HTML
          // UTILIZAR JSON.PARSE()
          // VER MAS TUTORIALES

          swal("Datos enviados!!", "Presiona OK.", "success");

          const arreglo = data;

          const obj = JSON.parse(arreglo);

          document.getElementById("nomComp");

          /*
          arr = data[0];
          // console.log(data);

          // console.log(data);
          // console.log(arr);
          valor = JSON.parse('{data}');
          console.log(valor);
          nomComp = $.trim($("#nomComp").val(valor));  
          */
        }
      });

      numParte = $.trim($("#numParte").val(buscar));

      // Estilos CSS
      $(".modal-header").css("background-color", "#85929E");
      $(".modal-header").css("color", "white");
      $(".modal-title").text("Control de Lotes");
      $("#checkIn").modal("show");
      $("#checkIn").modal("hide");
      
    }else{swal("Campo vacio!", "Ingrese el numero de parte nuevamente", "error");}
  });
});

function mostrarDatos(){
  $('#tablaEmpleados').DataTable({

  });
}



  
  

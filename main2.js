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
        data: {opcion: opcion, buscar: buscar, opt: opt},

        success: function(data){
          swal("Datos enviados!!", "Presiona OK.", "success");
          console.log(data);

          for(i = 0; i <= 10; i++){

            console.log(data[i,i]);

          }

          /*
          console.log(data);
          imprimir = data;
          variable = imprimir.typeof(String);
          console.log(variable);
          */
          // console.log(nomComp = $.trim($("#nomComp").val(data)));
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



  
  

$(document).ready(function(){

  $("#btnBuscar").click(function(){
    opcion = 1;  
    buscar = $.trim($("#buscar").val()); // Numero de Parte.
    
    if(buscar != ''){


      console.log(buscar);
      console.log(opcion);
      // VALORES A MOSTRAR EN EL MODAL.
      // numParte = $("#numParte").val(buscar);

      $.ajax({
        url: "Check-In.php",
        type: "POST",
        dataType: "json",
        data: {opcion: opcion, buscar: buscar},

        success: function(data){
          console.log(data);
          
        }
        
      });
      
      /*
      // Estilos CSS
      $(".modal-header").css("background-color", "#85929E");
      $(".modal-header").css("color", "white");
      $(".modal-title").text("Control de Lotes");
      $("#checkIn").modal("show");
      $("#checkIn").modal("hide");
      */

    }else{swal("Campo vacio!");}

  });
});

function mostrarDatos(){
  
  $('#tablaEmpleados').DataTable({




  });
}



  
  

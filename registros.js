$(document).ready(function(){
  $("#btnBuscar").click(function(){
    numParte = $("#numParte").val();
    nomComp = $("#nomComp").val();
    provNombre = $("#provNombre").val();

    // VERIFICAR CAMPOS VACIOS DE FILTRO.
    if (numParte != '' || nomComp != '' || provNombre != ''){
      $.ajax({
        url: "Modelo(conexion)/registrosFiltro.php",
        type: "POST",
        dataType: "json",
        data:{
          numParte: numParte,
          nomComp: nomComp,
          provNombre: provNombre

        },
        
        success: function(data){
          console.log(data);
          
          registroFiltro = $("#registroFiltro").DataTable({ // cambiar controlLotes por tablaEmpleados.
            "scrollX": true,
            "scrollY": "200px",
            "scrollCollapse": true,
            "paging": false,
            // Para cambiar el lenguaje a español
            "language":{
              "lengthMenu": "Mostrar _MENU_ registros",
              "zeroRecords": "No se encontraron resultados",
              "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
              "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
              "infoFiltered": "(filtrado de un total de _MAX_ registros)",
              "sSearch": "Buscar:",
              "oPaginate":{
                "sFirst": "Primero",
                "sLast": "Ultimo",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
              },
            
              "sProcessing": "Procesando...",
          
            }
          });
        }
      });
  
    }else{
      swal("Campo vacio!", "Ingrese el DensoLot nuevamente", "error");

    }
  });
  
  /*
  registroFiltro = $("#registroFiltro").DataTable({ // cambiar controlLotes por tablaEmpleados.    
    "scrollX": true,
    "scrollY": "200px",
    "scrollCollapse": true,
    "paging": false,
    // Para cambiar el lenguaje a español
    "language":{
      "lengthMenu": "Mostrar _MENU_ registros",
      "zeroRecords": "No se encontraron resultados",
      "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
      "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
      "infoFiltered": "(filtrado de un total de _MAX_ registros)",
      "sSearch": "Buscar:",
      "oPaginate":{
        "sFirst": "Primero",
        "sLast": "Ultimo",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
      },
    
      "sProcessing": "Procesando...",
  
    }
  });
  */
 
});

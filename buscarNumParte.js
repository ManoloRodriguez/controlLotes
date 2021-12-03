$(document).ready(function(){
  $("#btnBuscar").click(function(){
    opcion = 1;
    buscar = $.trim($("#buscar").val()); // BUSCANDO NUMERO DE PARTE.

    if(buscar != ''){ // VERIFICAR QUE EL INPUT NO ESTE VACIO
      $.ajax({
        url: "Modelo(conexion)/buscarNumParte.php",
        type: "POST",
        dataType: "json",
        data: {opcion: opcion, buscar: buscar},

        success: function(data){
          // MOSTRAR VALORES EN EL MODAL
          numParte = $.trim($("#numParte").val(data[0].numParte));      
          nomComp = $.trim($("#nomComp").val(data[0].nomComp));
          provID_PC = $.trim($("#provID_PC").val(data[0].provID_PC));
          cantXCajas = $.trim($("#cantXCajas").val(data[0].cantXCajas)); 
          Total = $.trim($("#Total").val(data[0].Total));
          provNombre = $.trim($("#provNombre").val(data[0].provNombre));
          cantLote = $.trim($("#cantLote").val(data[0].cantLote));
          cantCajasXTarima = $.trim($("#cantCajasXTarima").val(data[0].cantCajasXTarima));

          // swal("Datos mandados y obtenidos correctamente!", "Presiona OK para continuar.", "success");

        }
      });
      // Estilos CSS
      $(".modal-header").css("background-color", "#85929E");
      $(".modal-header").css("color", "white");
      $(".modal-title").text("Control de Lotes");
      $("#checkIn").modal({backdrop: 'static', keyboard: false,show: true });
      
    }else{swal("Campo vacio!", "Ingrese el numero de parte nuevamente", "error");}

    $("#buscar").val(''); // Limpiar input de busqueda de numero de parte.

  });    

  $("#formCheck").submit(function(e){ // ENVIO DE PARAMETROS
    e.preventDefault();
    opt = 1;
    // DATOS DEL NUMERO DE PARTE.
    numParte = $.trim($("#numParte").val());
    nomComp = $.trim($("#nomComp").val());
    provID_PC = $.trim($("#provID_PC").val());
    cantCajas = $.trim($("#cantCajas").val());
    cantXCajas = $.trim($("#cantXCajas").val());
    Total = $.trim($("#Total").val());
    provNombre = $.trim($("#provNombre").val());
    cantLote = $.trim($("#cantLote").val());
    cantCajasXTarima = $.trim($("#cantCajasXTarima").val());
    
    $.ajax({
      url: "Modelo(conexion)/process.php",
      type: "POST",
      dataType: "json",
      data: {numParte: numParte, nomComp: nomComp, provID_PC: provID_PC, cantCajas: cantCajas, cantXCajas: cantXCajas, Total: Total, provNombre: provNombre, cantLote: cantLote, cantCajasXTarima: cantCajasXTarima, opt: opt},

      success: function(data){
        console.log(data);

      }
    });

    $("#checkIn").modal("hide"); // CERRAR VENTANA DEL MODAL.
    
    // TRATAR DE PONER EL SWAL EN SUCCESS: FUNCTION DE FORMCHECK.
    swal("Datos enviados a la tabla lista_registros!!", "Presiona OK para continuar.", "success");     

  });  
});

$(document).ready(function(){
  $("#btnBuscar").click(function(){
    opcion = 1;
    buscar = $.trim($("#buscar").val()); // BUSCANDO DENSO LOT
    
    if(buscar != ''){ // VERIFICAR QUE EL INPUT NO ESTE VACIO
      $.ajax({
        url: "Modelo(conexion)/incomingBuscar.php",
        type: "POST",
        dataType: "json",
        data:{
          opcion: opcion,
          buscar: buscar
        },
        
        success: function(data){
          if(data != ''){
            // MOSTRAR VALORES EN EL MODAL
            densoLot = $.trim($("#densoLot").val(data[0].densoLot));
            numParte = $.trim($("#numParte").val(data[0].numParte));
            nomComp = $.trim($("#nomComp").val(data[0].nomComp));
            provID_PC = $.trim($("#provID_PC").val(data[0].provID_PC));
            cantCajas = $.trim($("#cantCajas").val(data[0].cantCajas));
            cantXCajas = $.trim($("#cantXCajas").val(data[0].cantXCajas));
            Total = $.trim($("#Total").val(data[0].Total));
            provNombre = $.trim($("#provNombre").val(data[0].provNombre));
            cantLote = $.trim($("#cantLote").val(data[0].cantLote));
            cantCajasXTarima = $.trim($("#cantCajasXTarima").val(data[0].cantCajasXTarima));

          }else{
            swal("DensoLot No encontrado!!", "Presiona OK para continuar.", "error");

          }
          
          $("#modalDensoLot").modal("hide"); // CERRAR VENTANA DEL MODAL.

        }
      });
      
      // Estilos CSS
      $(".modal-header").css("background-color", "#2196F3");
      $(".modal-header").css("color", "white");
      $(".modal-title").text("INCOMING");
      $("#modalDensoLot").modal({
        backdrop: 'static',
        keyboard: false,
        show: true
      });
  
    }else{
      swal("Campo vacio!", "Ingrese el DensoLot nuevamente", "error");

    }
  
    $("#buscar").val(''); // Limpiar input del denso lot.
  
  });
  
  
  $("#formDensoLot").submit(function(e){ // ENVIO DE PARAMETROS
    e.preventDefault();
    opt = 1;
    // DATOS DEL DENSO LOT.
    densoLot = $.trim($("#densoLot").val());
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
      url: "Modelo(conexion)/incomingProcess.php",
      type: "POST",
      dataType: "json",
      data:{
        densoLot: densoLot,
        numParte: numParte,
        nomComp: nomComp,
        provID_PC: provID_PC,
        cantCajas: cantCajas,
        cantXCajas: cantXCajas,
        Total: Total,
        provNombre: provNombre,
        cantLote: cantLote,
        cantCajasXTarima: cantCajasXTarima,
        opt: opt
  
      },
      
      success: function(){
        swal("Fecha actualizada INCOMING!!", "Presiona OK para continuar.", "success");
  
      }
    });
  
    $("#modalDensoLot").modal("hide"); // CERRAR VENTANA DEL MODAL.
  
  });
});

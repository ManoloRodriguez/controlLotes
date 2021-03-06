$(document).ready(function(){
  $("#btnBuscar").click(function(){
    opcion = 1;
    buscar = $.trim($("#buscar").val()); // BUSCANDO NUMERO DE PARTE.

    if(buscar != ''){ // VERIFICAR QUE EL INPUT NO ESTE VACIO
      $.ajax({
        url: "Modelo(conexion)/recibosNumPart.php",
        type: "POST",
        dataType: "json",
        data:{
          opcion: opcion,
          buscar: buscar
        },

        success: function(data){
          if(data != ''){
            // MOSTRAR VALORES EN EL MODAL
            numParte = $.trim($("#numParte").val(data[0].numParte));
            nomComp = $.trim($("#nomComp").val(data[0].nomComp));
            provID_PC = $.trim($("#provID_PC").val(data[0].provID_PC));
            cantXCajas = $.trim($("#cantXCajas").val(data[0].cantXCajas));
            Total = $.trim($("#Total").val(data[0].Total));
            provNombre = $.trim($("#provNombre").val(data[0].provNombre));
            cantLote = $.trim($("#cantLote").val(data[0].cantLote));
            cantCajasXTarima = $.trim($("#cantCajasXTarima").val(data[0].cantCajasXTarima));

          }else{
            swal("Numero de Parte no encontrado!", "Presiona OK para continuar.", "error");
            $("#checkIn").modal("hide"); // CERRAR VENTANA DEL MODAL.

          }
        }
      });
      // Estilos CSS
      $(".modal-header").css("background-color", "#85929E");      
      $(".modal-header").css("color", "white");
      $(".modal-title").text("Control de Lotes");
      $("#checkIn").modal({
        backdrop: 'static',
        keyboard: false,
        show: true
      });

    }else{
      swal("Campo vacio!", "Ingrese el numero de parte nuevamente", "error");
    }

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
      url: "Modelo(conexion)/recibosProcess.php",
      type: "POST",
      dataType: "json",
      data:{
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

      success: function(data){
        let denlot = data[0].densoLot;
        swal("DensoLot asignado: " + denlot, "Presiona OK para continuar", "success");

      }
    });

    $("#checkIn").modal("hide"); // CERRAR VENTANA DEL MODAL.

  });
});

$(document).ready(function(){
  $("#btnBuscar").click(function(){
    opcion = 1;
    buscar = $.trim($("#buscar").val()); // BUSCANDO DENSO LOT

    if(buscar != ''){ // VERIFICAR QUE EL INPUT NO ESTE VACIO
      $.ajax({
        url: "Modelo(conexion)/dieCastBuscar.php",
        type: "POST",
        dataType: "json",
        data: {
          opcion: opcion,
          buscar: buscar
        },

        success: function(data){          
          // MOSTRAR VALORES EN EL MODAL
          DensoLot = $.trim($("#DensoLot").val(data[0].DensoLot));
          numParte = $.trim($("#numParte").val(data[0].numParte));
          nomComp = $.trim($("#nomComp").val(data[0].nomComp));
          provID_PC = $.trim($("#provID_PC").val(data[0].provID_PC));
          cantCajas = $.trim($("#cantCajas").val(data[0].cantCajas));
          cantXCajas = $.trim($("#cantXCajas").val(data[0].cantXCajas));
          Total = $.trim($("#Total").val(data[0].Total));
          provNombre = $.trim($("#provNombre").val(data[0].provNombre));
          cantLote = $.trim($("#cantLote").val(data[0].cantLote));
          cantCajasXTarima = $.trim($("#cantCajasXTarima").val(data[0].cantCajasXTarima));

        },

        // MODIFICAR MENSAJE DE ERROR EN CASO DE NO ENCONTRAR EL NUMERO DE PARTE.
        error: function(data){
          console.log(data);
          swal("DensoLot No encontrado!!", "Presiona OK para continuar.", "error");

        }
      });
      // Estilos CSS
      $(".modal-header").css("background-color", "black");
      $(".modal-header").css("color", "white");
      $(".modal-title").text("DIE CAST");
      $("#densoLot").modal({
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
    DensoLot = $.trim($("#DensoLot").val());
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
      url: "Modelo(conexion)/dieCast.php",
      type: "POST",
      dataType: "json",
      data: {
        DensoLot: DensoLot,
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
        swal("Fecha actualizada DIE CAST!!", "Presiona OK para continuar.", "success");

      }
    });

    $("#densoLot").modal("hide"); // CERRAR VENTANA DEL MODAL.

  });
});

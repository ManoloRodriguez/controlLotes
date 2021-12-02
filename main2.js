$(document).ready(function(){
  // $(document).on("click", ".btnBuscar", function(){
  $("#btnBuscar").click(function(){
    opcion = 1;
    buscar = $.trim($("#buscar").val()); // Numero de Parte.

    if(buscar != ''){
      // VALORES A MOSTRAR EN EL MODAL.
      // numParte = $("#numParte").val(buscar);
      $.ajax({
        url: "Modelo(conexion)/crud2.php",
        type: "POST",
        dataType: "json",
        data: {opcion: opcion, buscar: buscar},

        success: function(data){

          // MOSTRAR VALORES EN EL MODAL
          numParte = $.trim($("#numParte").val(data[0].numParte));      
          nomComp = $.trim($("#nomComp").val(data[0].nomComp));
          provID_PC = $.trim($("#provID_PC").val(data[0].provID_PC));
          // cantCajas = $.trim($("#cantCajas").val(data[0].cantCajas));
          cantXCajas = $.trim($("#cantXCajas").val(data[0].cantXCajas));
          Total = $.trim($("#Total").val(data[0].Total));
          provNombre = $.trim($("#provNombre").val(data[0].provNombre));
          cantLote = $.trim($("#cantLote").val(data[0].cantLote));
          cantCajasXTarima = $.trim($("#cantCajasXTarima").val(data[0].cantCajasXTarima));
          
          console.log(data);

          swal("Datos mandados y obtenidos correctamente!", "Presiona OK para continuar.", "success");

        }
      });
      // Estilos CSS
      $(".modal-header").css("background-color", "#85929E");
      $(".modal-header").css("color", "white");
      $(".modal-title").text("Control de Lotes");
      $("#checkIn").modal("show");
      
    }else{swal("Campo vacio!", "Ingrese el numero de parte nuevamente", "error");}
    $("#buscar").val('');
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
        swal("Datos enviados! INSERT TO", "Presiona OK para continuar.", "success");     

      }
    });

    $("#checkIn").modal("hide");

  });  
});

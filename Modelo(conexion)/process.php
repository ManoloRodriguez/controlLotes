<?php

include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$opt = (isset($_POST['opt'])) ? $_POST['opt'] : ''; // KEY PARA HACER EL INSERT EN TABLA lista_registro.

// VALORES DEL MODAL:
$numParte = (isset($_POST['numParte'])) ? $_POST['numParte'] : '';
$nomComp = (isset($_POST['nomComp'])) ? $_POST['nomComp'] : '';
$provID_PC = (isset($_POST['provID_PC'])) ? $_POST['provID_PC'] : '';
$cantCajas = (isset($_POST['cantCajas'])) ? $_POST['cantCajas'] : '';
$cantXCajas = (isset($_POST['cantXCajas'])) ? $_POST['cantXCajas'] : '';
$Total = (isset($_POST['Total'])) ? $_POST['Total'] : '';
$provNombre = (isset($_POST['provNombre'])) ? $_POST['provNombre'] : '';
$cantLote = (isset($_POST['cantLote'])) ? $_POST['cantLote'] : '';
$cantCajasXTarima = (isset($_POST['cantCajasXTarima'])) ? $_POST['cantCajasXTarima'] : '';

// CONVERTIR VALORES A INTEGER.
intval($cantCajas);
intval($cantXCajas);

$totalCajas = $cantCajas * $cantXCajas; // OPERACION PARA TOTAL DE PIEZAS X CAJA.

// INSERTAR REGISTRO EN NUEVA TABLA.
switch($opt){
  case 1:
    
    $guardar = "INSERT INTO lista_registro (numParte, nomComp, provID_PC, cantCajas, cantXCajas, Total, provNombre, cantLote, cantCajasXTarima) VALUES ('$numParte', '$nomComp', '$provID_PC', '$cantCajas', '$cantXCajas', '$totalCajas', '$provNombre', '$cantLote', '$cantCajasXTarima')";
      
    $resultado = $conexion->prepare($guardar);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
      
    // INGRESAR FECHA DE CAPTURA DE CANTIDAD DE CAJAS.
    $registroFecha = "UPDATE lista_registro SET Fecha = NOW() WHERE numParte = '$numParte'";
  
    $resultado = $conexion->prepare($registroFecha);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
  
  break;
    
}

//Enviar el array final en formato json a JS ---> DESCOMENTAR
print json_encode($data);
$conexion = NULL; // Cerrando conexion ----> DESCOMENTAR

?>

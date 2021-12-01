<?php

include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$opt = (isset($_POST['opt'])) ? $_POST['opt'] : '';

// VALORES DEL MODAL:
$numParte = (isset($_POST['numParte']) ? $_POST['numParte']) : '';
$nomComp = (isset($_POST['nomComp'])) ? $_POST['nomComp'] : '';
$provID_PC = (isset($_POST['provID_PC'])) ? $_POST['provID_PC'] : '';
$cantCajas = (isset($_POST['cantCajas'])) ? $_POST['cantCajas'] : '';
$cantXCajas = (isset($_POST['cantXCajas'])) ? $_POST['cantXCajas'] : '';
$Total = (isset($_POST['Total'])) ? $_POST['Total'] : '';
$provNombre = (isset($_POST['provNombre'])) ? $_POST['provNombre'] : '';
$cantLote = (isset($_POST['cantLote'])) ? $_POST['cantLote'] : '';
$cantCajasXTarima = (isset($_POST['cantCajasXTarima'])) ? $_POST['cantCajasXTarima'] : '';

// INSERTAR VALOR A LA NUEVA TABLA
$guardar = "INSERT INTO lista_registro (numParte, nomComp, provID_PC, cantCajas, cantXCajas, Total, provNombre, cantLote, cantCajasXTarima) VALUES ('$numParte', '$nomComp', '$provID_PC', '$cantCajas', '$cantXCajas', '$Total', '$provNombre', '$cantLote', '$cantCajasXTarima')";
  
$resultado = $conexion->prepare($guardar);
$resultado->execute();
$data = $resultado->fetchAll(PDO::FETCH_ASSOC);

  /*
  // UPDATE FECHA DE CAPTURA DE LOTE
  $asigFechaCap = "UPDATE lista_registro SET Fecha = NOW() ";

  $resultado = $conexion->prepare($asigFechaCap);
  $resultado->execute();
  $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
  */


//Enviar el array final en formato json a JS ---> DESCOMENTAR
print json_encode($data);
$conexion = NULL; // Cerrando conexion ----> DESCOMENTAR

?>

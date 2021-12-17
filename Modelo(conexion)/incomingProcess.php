<?php

include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$opt = (isset($_POST['opt'])) ? $_POST['opt'] : ''; // KEY PARA REALIZAR INSTRUCCION CRUD.

// VALORES DEL MODAL:
$densoLot = (isset($_POST['densoLot'])) ? $_POST['densoLot'] : '';
$numParte = (isset($_POST['numParte'])) ? $_POST['numParte'] : '';
$nomComp = (isset($_POST['nomComp'])) ? $_POST['nomComp'] : '';
$provID_PC = (isset($_POST['provID_PC'])) ? $_POST['provID_PC'] : '';
$cantCajas = (isset($_POST['cantCajas'])) ? $_POST['cantCajas'] : '';
$cantXCajas = (isset($_POST['cantXCajas'])) ? $_POST['cantXCajas'] : '';
$Total = (isset($_POST['Total'])) ? $_POST['Total'] : '';
$provNombre = (isset($_POST['provNombre'])) ? $_POST['provNombre'] : '';
$cantLote = (isset($_POST['cantLote'])) ? $_POST['cantLote'] : '';
$cantCajasXTarima = (isset($_POST['cantCajasXTarima'])) ? $_POST['cantCajasXTarima'] : '';

// MODIFICAR FECHA DE TRASPASO A DIE CAST.
switch($opt){
  case 1:
    // UPDATE EN TABLA lista_registro FECHA DIE CAST.
    $registroFecha = "UPDATE lista_registro SET fechaIncoming = NOW() WHERE densoLot = '$densoLot' ";  
    $resultado = $conexion->prepare($registroFecha);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
  
  break;
    
}
//Enviar el array final en formato json a JS ---> DESCOMENTAR
print json_encode($data);
$conexion = NULL; // Cerrando conexion ----> DESCOMENTAR

?>

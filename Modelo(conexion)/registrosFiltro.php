<?php

include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$numParte = (isset($_POST['numParte'])) ? $_POST['numParte'] : '';
$nomComp = (isset($_POST['nomComp'])) ? $_POST['nomComp'] : '';
$provNombre = (isset($_POST['provNombre'])) ? $_POST['provNombre'] : '';

$consulta = "SELECT densoLot, numParte, nomComp, provID_PC, cantCajas, cantXCajas, Total, provNombre, cantLote, cantCajasXTarima, fechaRecibos, fechaIncoming FROM lista_registro WHERE numParte = '$numParte' OR nomComp = '$nomComp' OR provNombre = '$provNombre' ";

$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data = $resultado->fetchAll(PDO::FETCH_ASSOC);

//Enviar el array final en formato json a JS ---> DESCOMENTAR
print json_encode($data);
// $conexion = NULL; // Cerrando conexion ----> DESCOMENTAR

?>

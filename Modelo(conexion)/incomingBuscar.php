<?php

include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

// Recepcion de los datos enviados mediante el metodo POST desde el js
$buscar = (isset($_POST['buscar'])) ? $_POST['buscar'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

switch($opcion){
  case 1:  
    $prueba = "SELECT * FROM lista_registro WHERE DensoLot = '$buscar' ";
    $resultado = $conexion->prepare($prueba);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

  break;

}
//Enviar el array final en formato json a JS ---> DESCOMENTAR
print json_encode($data);
$conexion = NULL; // Cerrando conexion ----> DESCOMENTAR

?>

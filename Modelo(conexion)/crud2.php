<?php

include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

// Recepcion de los datos enviados mediante el metodo POST desde el js
$buscar = (isset($_POST['buscar'])) ? $_POST['buscar'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$opt = (isset($_POST['opt'])) ? $_POST['opt'] : '';

if($opcion == 1){  
  $prueba = "SELECT * FROM lista_maestra WHERE numParte = '$buscar' ";
  $resultado = $conexion->prepare($prueba);
  $resultado->execute();
  $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

  /*
  if($opt == 2){
    $pruebaDos = "SELECT numParte FROM lista_maestra WHERE numParte = '$buscar' ";
    $resultado = $conexion->prepare($pruebaDos);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
  
  }
  */
}
//Enviar el array final en formato json a JS ---> DESCOMENTAR
print json_encode($data);
$conexion = NULL; // Cerrando conexion ----> DESCOMENTAR

?>

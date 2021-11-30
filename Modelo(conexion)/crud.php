<?php

include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

// Recepcion de los datos enviados mediante el metodo POST desde el js
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$Entrada = (isset($_POST['Entrada'])) ? $_POST['Entrada'] : '';
$Salida = (isset($_POST['Salida'])) ? $_POST['Salida'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

switch($opcion){
  case 1:
    // UPDATE DE CHEQUEO DE ENTRADA Y SALIDA MANUAL
    $consulta = "UPDATE lista_asociados SET Entrada = '$Entrada', Salida = '$Salida' WHERE id = '$id' ";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();    
    
    // ACTUALIZAR INFORMACION DE REGISTRO DE CHEK-IN EN DATATABLE
    $consulta = "SELECT id, NumEmpleado, PrimerNombre, ApellidoPaterno, Planta, Departamento, Entrada, Salida FROM lista_asociados WHERE id = '$id' ";    
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);

  break;

}

print json_encode($data, JSON_UNESCAPED_UNICODE);  //Enviar el array final en formato json a JS
$conexion = NULL; // Cerrando conexion

?>
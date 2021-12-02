<?php

include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$opt = (isset($_POST['opt'])) ? $_POST['opt'] : '';

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

intval($cantCajas);
intval($cantXCajas);
intval($numParte);
// OPERACION PARA TOTAL DE PIEZAS X CAJA.
$totalCajas = $cantCajas * $cantXCajas;
//VERIFICAR REGISTRO EN BD

$verificar = "SELECT numParte FROM lista_registro WHERE numParte = '$numParte' ";

$resultado = $conexion->prepare($verificar);
$resultado->execute();
$data = $resultado->fetchAll(PDO::FETCH_ASSOC);

intval($verificar);

if($verificar == $numParte){
  //Enviar el array final en formato json a JS ---> DESCOMENTAR
  print json_encode($data);
  $conexion = NULL; // Cerrando conexion ----> DESCOMENTAR
  print("Numero de parte ya registrado");

}else{
  // INSERTAR VALOR A LA NUEVA TABLA
  switch($opt){
    case 1:

      $guardar = "INSERT INTO lista_registro (numParte, nomComp, provID_PC, cantCajas, cantXCajas, Total, provNombre, cantLote, cantCajasXTarima) VALUES ('$numParte', '$nomComp', '$provID_PC', '$cantCajas', '$cantXCajas', '$totalCajas', '$provNombre', '$cantLote', '$cantCajasXTarima')";
        
      $resultado = $conexion->prepare($guardar);
      $resultado->execute();
      $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
  
        
      // INGRESAR FECHA DE CAPTURA DE CANTIDAD DE CAJAS.
      $registroFecha = "UPDATE lista_registro SET Fecha = NOW() ";
  
      $resultado = $conexion->prepare($registroFecha);
      $resultado->execute();
      $data = $resultado->fetchAll(PSO::FETCH_ASSOC);
  
    break;
    
  }
}
//Enviar el array final en formato json a JS ---> DESCOMENTAR
print json_encode($data);
$conexion = NULL; // Cerrando conexion ----> DESCOMENTAR

?>

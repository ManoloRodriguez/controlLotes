<?php

class Conexion{
  public static function Conectar(){
    define('servidor', 'localhost');
    define('nombre_bd', 'control_lotes');
    define('usuario', 'root');
    define('password', '');

    $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND);

    try{
      $conexion = new PDO("mysql:host=".servidor."; dbname=".nombre_bd, usuario, password, $opciones);
      return $conexion;
            
    }catch(Exception $e){
      die("El error de la conexion es: ".$e->getMessage());
            
    }
  }
}

?>
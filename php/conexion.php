<?php
$sqlUser="root";
$sqlPass="";

function iniciaConexion(){
  GLOBAL $sqlUser, $sqlPass;
  $conexionMySQL = @mysqli_connect("localhost", $sqlUser, $sqlPass, "pgpi");
  if (!$conexionMySQL) {
    return null;
    die();
  }
  return $conexionMySQL;
}

function consultaSQL($consunta){
  $datos=array();
  $conexionMySQL = iniciaConexion();
  mysqli_set_charset($conexionMySQL,"utf8");
  if(!$resultado = @mysqli_query($conexionMySQL, $consunta)){
    return null;
    die();
  }
  $i=0;
  while($row = mysqli_fetch_assoc($resultado))
  {
    $datos[$i] = $row;
    $i++;
  }
  return $datos;
}

function querySQL($consunta){
  $conexionMySQL = iniciaConexion();
  if (@mysqli_query($conexionMySQL,$consunta) === TRUE) {
    echo "Exito";
  } else {
    echo "Error " . $conexionMySQL->error;
  }
}
<?php

echo htmlspecialchars($_POST['usuario']);
echo htmlspecialchars($_POST['contraseña']);

if(!empty($_POST['usuario'])&& !empty($_POST['contraseña']))
{
    $sql = "";
}



$conexion = iniciaConexion();
$consulta = ""
consultaSQL($consulta);

 ?>

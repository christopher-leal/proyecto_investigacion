<?php

$filtro = $_POST['investigador'];

function consultarInvestigador($filtro){
  try {
    //importamos la conexion a la base de datos
    require_once('includes/funciones/bdconexion.php');
    //Se genera y envia la consulta
      $query = "SELECT * FROM investigadores inner join lineas_investigadores on investigadores.id_investigador = lineas_investigadores.id_investigador inner join lineas_investigacion on lineas_investigadores.id_linea = lineas_investigacion.id_linea";

    if($filtro!="default"){
      $query = "SELECT * FROM investigadores inner join lineas_investigadores on investigadores.id_investigador = lineas_investigadores.id_investigador inner join lineas_investigacion on lineas_investigadores.id_linea = lineas_investigacion.id_linea where lineas_investigacion.nombre_linea= '$filtro'";
    }

    $resultado = mysqli_query($conn,$query);
    //los datos son almacenados en un arreglo y se retorna test
    while($row = mysqli_fetch_assoc($resultado))
      $test[] = $row;
    return $test;
  } catch(Exception $e) {
    echo $e->getMessage();
    return $e;
  }
}
//Se llama a la funcion consultarInvestigador
$respuesta = consultarInvestigador($filtro);

//se envia al cliente la consulta
echo json_encode($respuesta);

?>

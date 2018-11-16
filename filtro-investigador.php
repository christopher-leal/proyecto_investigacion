<?php
$filtro = $_POST['investigador'];
$filtro2 = $_POST['name'];

function consultarInvestigador($filtro,$filtro2){
  try {
    //importamos la conexion a la base de datos
    require_once('includes/funciones/bdconexion.php');
    //Se genera y envia la consulta
      $query = "SELECT * FROM investigadores inner join lineas_investigadores on investigadores.id_investigador = lineas_investigadores.id_investigador inner join lineas_investigacion on lineas_investigadores.id_linea = lineas_investigacion.id_linea";

    if($filtro!="default" && $filtro2=="default"){
        $query = "SELECT * FROM investigadores inner join lineas_investigadores on investigadores.id_investigador = lineas_investigadores.id_investigador inner join lineas_investigacion on lineas_investigadores.id_linea = lineas_investigacion.id_linea where lineas_investigacion.id_linea=$filtro";
    }
    if($filtro2!="default" && $filtro=="default"){
        $query = "SELECT * FROM investigadores inner join lineas_investigadores on investigadores.id_investigador = lineas_investigadores.id_investigador inner join lineas_investigacion on lineas_investigadores.id_linea = lineas_investigacion.id_linea where investigadores.nombre='$filtro2'";
    }
    if($filtro!="default" && $filtro2!="default"){
        $query = "SELECT * FROM investigadores inner join lineas_investigadores on investigadores.id_investigador = lineas_investigadores.id_investigador inner join lineas_investigacion on lineas_investigadores.id_linea = lineas_investigacion.id_linea where lineas_investigacion.id_linea=$filtro and nombre='$filtro2'";
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
$respuesta = consultarInvestigador($filtro,$filtro2);

//se envia al cliente la consulta
echo json_encode($respuesta);
?>

<?php
$filtro = $_POST['investigador'];
$filtro2 = $_POST['nombre'];

function consultarInvestigador($filtro,$filtro2){
  try {
    //importamos la conexion a la base de datos
    require_once('includes/funciones/bdconexion.php');
    //Se genera y envia la consulta
    $query="SELECT * FROM investigador inner join linea_investigacion on investigador.linea_investigacion = linea_investigacion.id_linea";

    if($filtro!="default" && $filtro2=="default"){
      $query = "SELECT * FROM investigador inner join linea_investigacion on investigador.linea_investigacion = linea_investigacion.id_linea where id_linea=$filtro";
    }else if($filtro2!="default" && $filtro=="default"){
      $query = "SELECT * FROM investigador inner join linea_investigacion on investigador.linea_investigacion = linea_investigacion.id_linea where nombre=$filtro2";
    }else if($filtro!="default" && $filtro2!="default"){
      $query = "SELECT * FROM investigador inner join linea_investigacion on investigador.linea_investigacion = linea_investigacion.id_linea where id_linea=$filtro and nombre=$filtro2";
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

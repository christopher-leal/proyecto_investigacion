<?php

$filtro = $_POST['id'];

function consultarPublicacion($filtro){
  try {
    //importamos la conexion a la base de datos
    require_once('includes/funciones/bdconexion.php');
    //Se genera y envia la consulta
      $query = "SELECT titulo_publicacion, fecha_publicacion, foro_publicacion, link_publicacion FROM publicaciones inner join investigadores on publicaciones.id_investigador = investigadores.id_investigador where investigadores.id_investigador='$filtro'";

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
$respuesta = consultarPublicacion($filtro);

//se envia al cliente la consulta
echo json_encode($respuesta);

?>

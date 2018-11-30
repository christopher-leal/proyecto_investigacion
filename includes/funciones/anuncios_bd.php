<?php

function consultarAnuncios(){
  try {
    //importamos la conexion a la base de datos
    require_once('bdconexion.php');
    //Se genera y envia la consulta

    $query = "SELECT id_anuncio, Cantidad_alumnos, Perfil,Semestre,Recompensa, anuncios.id_proyecto,link_imagen,titulo_proyecto from anuncios inner join proyectos on anuncios.id_proyecto = proyectos.id_proyecto";

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
$respuesta = consultarAnuncios();

//se envia al cliente la consulta
echo json_encode($respuesta);

?>

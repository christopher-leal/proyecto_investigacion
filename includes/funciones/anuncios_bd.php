<?php

function consultarAnuncios(){
  try {
    //importamos la conexion a la base de datos
    require_once('bdconexion.php');
    //Se genera y envia la consulta

    $query = "SELECT id_anuncio, Cantidad_alumnos, Perfil,Semestre,Recompensa, anuncios.id_proyecto,link_imagen,titulo_proyecto from anuncios inner join proyectos on anuncios.id_proyecto = proyectos.id_proyecto";

    $resultado =$conn->query($query);

    //los datos son almacenados en un arreglo y se retorna test
    while($dato=$resultado->fetch_assoc()){
        $informacion=array(
            'id_anuncio'=>utf8_encode($dato['id_anuncio']),
            'Cantidad_alumnos'=>utf8_encode($dato['Cantidad_alumnos']),
            'Perfil'=>utf8_encode($dato['Perfil']),
            'Semestre'=>utf8_encode($dato['Semestre']),
            'Recompensa'=>utf8_encode($dato['Recompensa']),
            'id_proyecto'=>utf8_encode($dato['id_proyecto']),
            'link_imagen'=>utf8_encode($dato['link_imagen']),
            'titulo_proyecto'=>utf8_encode($dato['titulo_proyecto'])

        );
        $info[]=$informacion;
    }
    return $info;
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

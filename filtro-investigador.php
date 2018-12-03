<?php

$filtro = $_POST['investigador'];

function consultarInvestigador($filtro){
  try {

    //importamos la conexion a la base de datos
    require_once('includes/funciones/bdconexion.php');
    //Se genera y envia la consulta
      $query = "SELECT * FROM investigadores inner join lineas_investigadores on investigadores.id_investigador = lineas_investigadores.id_investigador inner join lineas_investigacion on lineas_investigadores.id_linea = lineas_investigacion.id_linea";

    if($filtro!="default"){
      $query = "SELECT * FROM investigadores inner join lineas_investigadores on investigadores.id_investigador = lineas_investigadores.id_investigador inner join lineas_investigacion on lineas_investigadores.id_linea = lineas_investigacion.id_linea where lineas_investigacion.id_linea='$filtro'";
    }

    $resultado =$conn->query($query);

    //los datos son almacenados en un arreglo y se retorna test
    while($dato=$resultado->fetch_assoc()){
        $informacion=array(
            'id_investigador'=>utf8_encode($dato['id_investigador']),
            'nombre'=>utf8_encode($dato['nombre']),
            'apellido_paterno'=>utf8_encode($dato['apellido_paterno']),
            'apellido_materno'=>utf8_encode($dato['apellido_materno']),
            'nivel_estudios'=>utf8_encode($dato['nivel_estudios']),
            'correo'=>utf8_encode($dato['correo']),
            'ubicacion'=>utf8_encode($dato['ubicacion']),
            'url_foto'=>utf8_encode($dato['url_foto']),
            'status'=>utf8_encode($dato['status']),
            'id_linea'=>utf8_encode($dato['id_linea']),
            
            'nombre_linea'=>utf8_encode($dato['nombre_linea']),
            'descripcion'=>utf8_encode($dato['descripcion'])
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
$respuesta = consultarInvestigador($filtro);

//se envia al cliente la consulta
echo json_encode($respuesta);

?>

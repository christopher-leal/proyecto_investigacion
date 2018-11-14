<?php

  function consultarInvestigador(){
    try {
      //importamos la conexion a la base de datos
      require_once('includes/funciones/bdconexion.php');
      //Se genera y envia la consulta

      $resultado = mysqli_query($conn, "SELECT * FROM investigador inner join linea_investigacion on investigador.linea_investigacion = linea_investigacion.id_linea");


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
  $respuesta = consultarInvestigador();

  //se envia al cliente la consulta
  echo json_encode($respuesta);
 ?>

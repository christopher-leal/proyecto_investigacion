<?php

  function consultarInvestigador(){
    
    try {
      require_once('includes/funciones/bdconexion.php');
      $consulta = "SELECT * FROM investigador";
  
      $resultado = $conn->query($consulta);
    } catch(Exception $e) {
      echo $e->getMessage();
    }
    return $resultado;
  }

  $respuesta = consultarInvestigador();
  //$respuesta = eliminarInvestigador($nombre);

  echo json_encode($respuesta);
 ?>

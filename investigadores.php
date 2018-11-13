<?php

  function consultarInvestigador(){
    $conn = new mysqli('localhost','root','','pgpi');
    try {
      //require_once('includes/funciones/bdconexion.php');
      //$consulta = "SELECT * FROM investigador";

      //$resultado = $conn->query($consulta);
      $resultado = mysqli_query($conn, "SELECT * FROM investigador");
      while($row = mysqli_fetch_assoc($resultado))
        $test[] = $row;
      return $test;
    } catch(Exception $e) {
      echo $e->getMessage();
      return $e;
    }

  }

  $respuesta = consultarInvestigador();
  //$respuesta = eliminarInvestigador($nombre);

  echo json_encode($respuesta);
 ?>

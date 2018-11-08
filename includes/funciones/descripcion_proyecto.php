<?php
    try {
    require_once('includes/funciones/bdconexion.php');
    $sql = " select *from a ";

    $resultado = $conn->query($sql);
    } catch(Exception $e) {
    echo $e->getMessage();
    }
?>
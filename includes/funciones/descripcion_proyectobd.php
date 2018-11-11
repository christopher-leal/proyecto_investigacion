<?php
    include 'bdconexion.php';
    try {
         $sql = "select p.titulo_proyecto,p.linea_investigacion,p.fecha_inicio, p.fecha_fin, p.financiamiento, p.link_imagen, p.resumen, i.nombre, i.apellido_paterno, i.apellido_materno, i.correo, i.ubicacion from proyectos p inner join investigadores i on p.id_investigador=i.id_investigador where id_proyecto=1;";
         $datos = $conn->query($sql);
         while($dato=$datos->fetch_assoc()){
             $informacion=array(
                 'titulo_proyecto'=>$dato['titulo_proyecto'],
                 'linea_investigacion'=>$dato['linea_investigacion'],
                 'fecha_inicio'=>$dato['fecha_inicio'],
                 'fecha_fin'=>$dato['fecha_fin'],
                 'financiamiento'=>$dato['financiamiento'],
                 'link_imagen'=>$dato['link_imagen'],
                 'resumen'=>$dato['resumen'],
                 'nombre'=>$dato['nombre'],
                 'apellido_paterno'=>$dato['apellido_paterno'],
                 'apellido_materno'=>$dato['apellido_materno'],
                 'correo'=>$dato['correo'],
                 'ubicacion'=>$dato['ubicacion']
             );
            
         }
         echo json_encode($informacion);
        //  $info=[];
        //  while($dato=$datos->fetch_assoc()){
        //      $informacion=array(
        //          'id_proyecto'=>$dato['id_proyecto'],

        //      );
        //      $info[]=$informacion;
            
        //  }
        //  while($registros = mysqli_fetch_array($datos)){
        //     $arregloDatos['id_proyecto']=$registros['id_proyecto'];
        //     $arregloDatos['titulo_proyecto']=$registros['titulo_proyecto'];
        //     $arregloDatos['linea_investigacion']=$registros['linea_investigacion'];
        //     $arregloDatos['fecha_inicio']=$registros['fecha_inicio'];
        //     $arregloDatos['fecha_fin']=$registros['fecha_fin'];
        //     $arregloDatos['financiamiento']=$registros['financiamiento'];
        //     $arregloDatos['link_imagen']=$registros['link_imagen'];
        //     $arregloDatos['activo']=$registros['fecha_fin'];
        //  }

        
    } catch(Exception $e) {
    echo $e->getMessage();
    }
?>
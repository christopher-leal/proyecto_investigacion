<?php 
    include_once 'bdconexion.php';
    try {
        $sql = "select p.id_proyecto, p.titulo_proyecto,p.linea_investigacion,p.fecha_inicio, p.fecha_fin,  p.link_imagen, p.resumen, i.nombre, i.apellido_paterno, i.apellido_materno from proyectos p inner join investigadores i on p.id_investigador=i.id_investigador;";
        $datos = $conn->query($sql);
        while($dato=$datos->fetch_assoc()){
            $informacion=array(
                'id_proyecto'=>$dato['id_proyecto'],
                'titulo_proyecto'=>$dato['titulo_proyecto'],
                'linea_investigacion'=>$dato['linea_investigacion'],
                'fecha_inicio'=>$dato['fecha_inicio'],
                'fecha_fin'=>$dato['fecha_fin'],
                'link_imagen'=>$dato['link_imagen'],
                'resumen'=>$dato['resumen'],
                'nombre'=>$dato['nombre'],
                'apellido_paterno'=>$dato['apellido_paterno'],
                'apellido_materno'=>$dato['apellido_materno']            );
           $info[]=$informacion;
        }
        echo json_encode($info);
    } catch(Exception $e) {
        echo $e->getMessage();
        }
?>
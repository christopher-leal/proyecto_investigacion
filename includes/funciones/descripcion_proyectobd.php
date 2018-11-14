<?php
include_once 'bdconexion.php';
try {
        $id = $_GET['id'];
        $sql = "select p.titulo_proyecto,p.linea_investigacion,p.fecha_inicio, p.fecha_fin, p.financiamiento, p.link_imagen, p.resumen, i.nombre, i.apellido_paterno, i.apellido_materno, i.correo, i.ubicacion from proyectos p inner join investigadores i on p.id_investigador=i.id_investigador where id_proyecto=".$id;
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
        
    } catch(Exception $e) {
    echo $e->getMessage();
    }
?>
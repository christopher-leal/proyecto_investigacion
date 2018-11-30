<?php
include_once 'bdconexion.php';
try {
        $id = $_GET['id'];
        $sql = " select p.titulo_proyecto,p.linea_investigacion,p.fecha_inicio, p.fecha_fin, p.financiamiento, p.link_imagen, p.resumen, i.nombre, i.apellido_paterno, i.apellido_materno, i.correo, i.ubicacion from proyectos p inner join investigadores i on p.lider_proyecto=i.id_investigador where id_proyecto=".$id;
        $datos = $conn->query($sql);
        while($dato=$datos->fetch_assoc()){
            $informacion=array(
                'titulo_proyecto'=>utf8_encode($dato['titulo_proyecto']),
                'linea_investigacion'=>utf8_encode($dato['linea_investigacion']),
                'fecha_inicio'=>utf8_encode($dato['fecha_inicio']),
                'fecha_fin'=>utf8_encode($dato['fecha_fin']),
                'financiamiento'=>utf8_encode($dato['financiamiento']),
                'link_imagen'=>utf8_encode($dato['link_imagen']),
                'resumen'=>utf8_encode($dato['resumen']),
                'nombre'=>utf8_encode($dato['nombre']),
                'apellido_paterno'=>utf8_encode($dato['apellido_paterno']),
                'apellido_materno'=>utf8_encode($dato['apellido_materno']),
                'correo'=>utf8_encode($dato['correo']),
                'ubicacion'=>utf8_encode($dato['ubicacion'])
            );
        
        }
        echo json_encode($informacion);
        
    } catch(Exception $e) {
    echo $e->getMessage();
    }
?>
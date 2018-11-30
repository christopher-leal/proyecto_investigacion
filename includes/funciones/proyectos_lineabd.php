<?php 
include_once 'bdconexion.php';
    $info=[];
    try {
        $sql = 'select*from lineas_investigacion i inner join proyectos p on i.id_linea=p.linea_investigacion inner join investigadores inves on inves.id_investigador=p.lider_proyecto order by id_linea;';
        if ($datos = $conn->query($sql)) {
            while ($dato=$datos->fetch_assoc()) {
                $linea=utf8_encode($dato['id_linea']);
                $informacion=array(
                    'id_linea'=>utf8_encode($dato['id_linea']),
                    'nombre_linea'=>utf8_encode($dato['nombre_linea']),
                    'id_proyecto'=>utf8_encode($dato['id_proyecto']),
                    'titulo_proyecto'=>utf8_encode($dato['titulo_proyecto']),
                    'lider_proyecto'=>utf8_encode($dato['lider_proyecto']),
                    'fecha_inicio'=>utf8_encode($dato['fecha_inicio']),
                    'fecha_fin'=>utf8_encode($dato['fecha_fin']),
                    'link_imagen'=>utf8_encode($dato['link_imagen']),
                    'nombre'=>utf8_encode($dato['nombre']),
                    'apellido_paterno'=>utf8_encode($dato['apellido_paterno']),
                    'apellido_materno'=>utf8_encode($dato['apellido_materno'])
                );
                $info[$linea][]=$informacion;            
            }
            echo json_encode($info);
        }
    } catch (Exception $e) {
        echo $e->getMessage();
        }
    
    
    

?>

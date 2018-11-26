<?php 
include_once 'bdconexion.php';
    $info=[];
    try {
        $sql = 'select*from lineas_investigacion i inner join proyectos p on i.id_linea=p.linea_investigacion inner join investigadores inves on inves.id_investigador=p.lider_proyecto order by id_linea;';
        if ($datos = $conn->query($sql)) {
            while ($dato=$datos->fetch_assoc()) {
                $linea=$dato['id_linea'];
                $informacion=array(
                    'id_linea'=>$dato['id_linea'],
                    'nombre_linea'=>$dato['nombre_linea'],
                    'id_proyecto'=>$dato['id_proyecto'],
                    'titulo_proyecto'=>$dato['titulo_proyecto'],
                    'lider_proyecto'=>$dato['lider_proyecto'],
                    'fecha_inicio'=>$dato['fecha_inicio'],
                    'fecha_fin'=>$dato['fecha_fin'],
                    'link_imagen'=>$dato['link_imagen'],
                    'nombre'=>$dato['nombre'],
                    'apellido_paterno'=>$dato['apellido_paterno'],
                    'apellido_materno'=>$dato['apellido_materno']

                );
                $info[$linea][]=$informacion;
            }
            echo json_encode($info);
        }
    } catch (Exception $e) {
        echo $e->getMessage();
        }
    
    
    

?>

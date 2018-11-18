<?php 

            include_once 'bdconexion.php';
            $info=[];
            try {
                $sql = "select c.id_evento, 
                                c.nombre_evento,
                                c.descripcion, 
                                c.lugar, 
                                c.fecha_evento,
                                c.link_imagen, 
                                c.link_externo,
                                c.fecha_registro
                                from congresos c;";
                if($datos = $conn->query($sql)){

                    while($dato=$datos->fetch_assoc()){
                        $informacion=array(
                            'id_evento'=>$dato['id_evento'],
                            'nombre_evento'=>$dato['nombre_evento'],
                            'descripcion'=>$dato['descripcion'],
                            'lugar'=>$dato['lugar'],
                            'fecha_evento'=>$dato['fecha_evento'],
                            'link_imagen'=>$dato['link_imagen'],
                            'fecha_registro'=>$dato['fecha_registro'],
                            'link_externo'=>$dato['link_externo'],
                                     );
                       $info[]=$informacion;
                    }
                    echo json_encode($info);
                    $datos->free();
                }

            } catch(Exception $e) {
                echo $e->getMessage();
            }
?>
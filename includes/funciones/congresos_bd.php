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
                            'id_evento'=>utf8_encode($dato['id_evento']),
                            'nombre_evento'=>utf8_encode($dato['nombre_evento']),
                            'descripcion'=>utf8_encode($dato['descripcion']),
                            'lugar'=>utf8_encode($dato['lugar']),
                            'fecha_evento'=>utf8_encode($dato['fecha_evento']),
                            'link_imagen'=>utf8_encode($dato['link_imagen']),
                            'fecha_registro'=>utf8_encode($dato['fecha_registro']),
                            'link_externo'=>utf8_encode($dato['link_externo'])
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
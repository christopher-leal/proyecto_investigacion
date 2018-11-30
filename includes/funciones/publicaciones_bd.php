<?php 

            include_once 'bdconexion.php';
           
            $info=[];

            try {
                $id = $_GET['id'];
                $sql = "select p.titulo_publicacion,
                p.link_publicacion,
                 i.nombre, 
                 i.apellido_paterno, 
                 i.apellido_materno,
                 i.correo, 
                 i.ubicacion,
                 i.url_foto from 
                 publicaciones p inner join 
                 investigadores i on 
                 p.id_investigador=i.id_investigador
                  where i.id_investigador=1;";
                if($datos = $conn->query($sql)){

                    while($dato=$datos->fetch_assoc()){
                        $informacion=array(
                            'titulo_publicacion'=>utf8_encode($dato['titulo_publicacion']),
                            'link_publicación'=>utf8_encode($dato['link_publicacion']),
                            'nombre'=>utf8_encode($dato['nombre']),
                            'apellido_paterno'=>utf8_encode($dato['apellido_paterno']),
                            'apellido_materno'=>utf8_encode($dato['apellido_materno']),
                            'correo'=>utf8_encode($dato['correo']),
                            'ubicacion'=>utf8_encode($dato['ubicacion']),
                            'url_foto'=>utf8_encode($dato['url_foto'])
                           
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
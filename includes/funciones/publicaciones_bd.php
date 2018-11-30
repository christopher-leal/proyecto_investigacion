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
                            'titulo_publicacion'=>$dato['titulo_publicacion'],
                            'link_publicación'=>$dato['link_publicacion'],
                            'nombre'=>$dato['nombre'],
                            'apellido_paterno'=>$dato['apellido_paterno'],
                            'apellido_materno'=>$dato['apellido_materno'],
                            'correo'=>$dato['correo'],
                            'ubicacion'=>$dato['ubicacion'],
                            'url_foto'=>$dato['url_foto']
                           
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
<?php
    include 'conexion.php';

    $funcion = $_REQUEST["funcion"];
    
    //consultas a la base de datos administrador
    //como patametro recibe la funcion que realiza
    //el resultado que devuelve es el resultado de la accion en el caso de sentencia y un jsonobjet en caso de consutla
    switch ($funcion){
        //consulta de proyectos
        case 'consulta_proyectos_adm':
            $palabra_clave=$_REQUEST["palabra_clave"];
            $id_inv=$_REQUEST["id_inv"];
            $id_linea_investigacion=$_REQUEST["id_linea_investigacion"];
            $activo=$_REQUEST["activo"];
            $respuesta = consultaSQL("SELECT id_proyecto, link_imagen, titulo_proyecto, lider_proyecto, fecha_inicio, fecha_fin, nombre_linea, resumen, CONCAT(nombre, ' ', apellido_paterno, ' ', apellido_materno) AS nombre_completo, financiamiento FROM proyectos AS P INNER JOIN lineas_investigacion AS L ON P.linea_investigacion=L.id_linea INNER JOIN investigadores AS I ON I.id_investigador=P.lider_proyecto WHERE titulo_proyecto LIKE '%".$palabra_clave."%' AND lider_proyecto LIKE '%".$id_inv."%' AND linea_investigacion LIKE'%".$id_linea_investigacion."%' AND P.status=".$activo.";");
            echo json_encode($respuesta);
        break;
        //consulta de invetigadores
        case 'consulta_investigadores_adm':
            $palabra_clave=$_REQUEST["palabra_clave"];
            //$id_linea_investigacion=$_REQUEST["id_linea_investigacion"];
            $activo=$_REQUEST["activo"];
            $respuesta = consultaSQL("SELECT * FROM investigadores WHERE (nombre LIKE '%".$palabra_clave."%' OR apellido_paterno LIKE '%".$palabra_clave."%' OR apellido_materno LIKE '%".$palabra_clave."%') AND status=".$activo.";");
            echo json_encode($respuesta);
        break;
        //consulta de publicaciones
        case 'consulta_publicaciones_adm':
            $palabra_clave=$_REQUEST["palabra_clave"];
            $id_linea_investigacion=$_REQUEST["id_linea_investigacion"];
            $activo=$_REQUEST["activo"];
            $respuesta = consultaSQL("SELECT * FROM publicaciones AS P INNER JOIN lineas_investigacion AS L ON P.linea_invetigacion=L.id_linea WHERE titulo_publicacion LIKE '%".$palabra_clave."%' AND linea_invetigacion LIKE'%".$id_linea_investigacion."%' AND status=".$activo.";");
            echo json_encode($respuesta);
        break;
        //consulta de congresos
        case 'consulta_congresos_adm':
            $palabra_clave=$_REQUEST["palabra_clave"];
            $id_linea_investigacion=$_REQUEST["id_linea_investigacion"];
            $respuesta = consultaSQL("SELECT * FROM congresos as C INNER JOIN lineas_investigacion AS L ON C.linea_investigacion=L.id_linea  WHERE nombre_evento LIKE '%".$palabra_clave."%' AND linea_investigacion LIKE'%".$id_linea_investigacion."%';");
            echo json_encode($respuesta);
        break;
        //consulta de 
        case 'consulta_anuncios_adm':
            $respuesta = consultaSQL("SELECT * FROM anuncios AS A INNER JOIN proyectos AS P ON A.id_proyecto=P.id_proyecto;");
            echo json_encode($respuesta);
        break;
        //consulta solo el id y nombre de los investigadores
        case 'consulta_lista_usuarios':
            $respuesta = consultaSQL("SELECT id_investigador, CONCAT(nombre, ' ', apellido_paterno) AS nombre FROM investigadores;");
            echo json_encode($respuesta);
        break;
        //consulta solo el id y nombre de las lineas de investigacion
        case 'consulta_lista_lineas':
            $respuesta = consultaSQL("SELECT id_linea, nombre_linea FROM lineas_investigacion");
            echo json_encode($respuesta);
        break;
        //consluta colboradores proyecto
        case 'consulta_lista_colaboradores':
            $id_proyecto=$_REQUEST["id_proyecto"];
            $respuesta = consultaSQL("SELECT CONCAT(I.nivel_estudios, ' ', I.nombre, ' ', I.apellido_paterno, ' ', I.apellido_materno) AS nombre , id_proyecto FROM colaboradores AS C INNER JOIN investigadores AS I ON C.id_investigador=I.id_investigador WHERE id_proyecto=".$id_proyecto.";");
            echo json_encode($respuesta);
        break;
        //Cunsulta las lineas de investigacion multiples de un investigadoras
        case 'consultar_lineas_investigador':
            $id_investigador=$_REQUEST["id_investigador"];
            $respuesta = consultaSQL("SELECT * FROM lineas_investigadores as I INNER JOIN lineas_investigacion as L on I.id_linea=L.id_linea  WHERE id_investigador=".$id_investigador.";");
            echo json_encode($respuesta);
        break;
        //Elimina proyectos (de forma logica)
        case 'eliminar_proyectos':
            $id_proyecto=$_REQUEST["id_proyecto"];
            $status=$_REQUEST["status"];
            $respuesta = querySQL("UPDATE proyectos SET status=".$status." WHERE id_proyecto=".$id_proyecto.";");
            echo $respuesta;
        break;
        //Elimina investigadores (de forma logica)
        case 'eliminar_investigador':
            $id_investigador=$_REQUEST["id_investigador"];
            $status=$_REQUEST["status"];
            $respuesta = querySQL("UPDATE investigadores SET status=".$status." WHERE id_investigador=".$id_investigador.";");
            echo $respuesta;
        break;
        //Elimina publicacione (de forma logica)
        case 'eliminar_publicacion':
            $id_publicacion=$_REQUEST["id_publicacion"];
            $status=$_REQUEST["status"];
            $respuesta = querySQL("UPDATE publicaciones SET status=".$status." WHERE id_publicaciones=".$id_publicacion.";");
            echo $respuesta;
        break;
        //Elimina congresos
        case 'eliminar_congreso':
            $id_congreso=$_REQUEST["id_congreso"];
            $respuesta = querySQL("DELETE FROM congresos WHERE id_evento=".$id_congreso.";");
            echo $respuesta;
        break;
        //Elimina un anuncio
        case 'eliminar_anuncio':
        $id_anuncio=$_REQUEST["id_anuncio"];
        $respuesta = querySQL("DELETE FROM anuncios WHERE id_anuncio=".$id_anuncio.";");
        echo $respuesta;
        break;
        //Editar un anuncio
        case 'editar_anuncio':
        $id_anuncio=$_REQUEST["id_anuncio"];
        $cantidad=$_REQUEST["cantidad"];
        $semestre=$_REQUEST["semestre"];
        $id_proyecto=$_REQUEST["id_proyecto"];
        $recompensa=$_REQUEST["recompensa"];
        $perfil=$_REQUEST["perfil"];
        $respuesta = querySQL("UPDATE anuncios SET Cantidad_alumnos=".$cantidad.", Perfil='".$perfil."' , Recompensa='".$recompensa."' , Semestre=".$semestre.", id_proyecto=".$id_proyecto." WHERE id_anuncio=".$id_anuncio.";");
        echo $respuesta;
        break;
        //Registrar un anuncio
        case 'registrar_anuncio':
        $cantidad=$_REQUEST["cantidad"];
        $semestre=$_REQUEST["semestre"];
        $id_proyecto=$_REQUEST["id_proyecto"];
        $recompensa=$_REQUEST["recompensa"];
        $perfil=$_REQUEST["perfil"];
        $respuesta = querySQL("INSERT INTO anuncios (Cantidad_alumnos, Perfil, Semestre, Recompensa, id_proyecto) VALUES (".$cantidad.", '".$perfil."', ".$semestre.", '".$recompensa."', ".$id_proyecto.");");
        echo $respuesta;
        break;
        case 'subir_ejemplo':
            $ruta="img/".$pathinfo($_FILES["img_congreso"]["name"]);
            if(move_uploaded_file($_FILES["img_congreso"]["tmp_name"],$ruta)){
                echo "Subido";
            }else{
                echo "no subido";
            }
        break;
    }
?>

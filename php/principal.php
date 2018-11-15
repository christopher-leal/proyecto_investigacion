<?php
    include 'conexion.php';
    
    $funcion = $_REQUEST["funcion"];

    switch ($funcion){
        case 'consulta_fotos_investigadores':
            $respuesta = consultaSQL("SELECT url_foto FROM investigadores WHERE status=1;");
            echo json_encode($respuesta);
        break;
        case 'consulta_imagenes_proyecto':
            $respuesta = consultaSQL("SELECT link_imagen FROM proyectos WHERE status=1;");
            echo json_encode($respuesta);
        break;
        case 'consulta_imagenes_congresos':
            $respuesta = consultaSQL("SELECT link_imagen FROM congresos;");
            echo json_encode($respuesta);
        break;
        case 'consulta_proyectos_recientes':
            $respuesta = consultaSQL("SELECT P.titulo_proyecto, CONCAT(I.nivel_estudios, ' ', I.nombre, ' ', I.apellido_paterno, ' ', I.apellido_materno) AS nombre_completo, P.link_imagen, P.resumen FROM investigadores AS I INNER JOIN proyectos AS P ON I.id_investigador=P.lider_proyecto WHERE P.status=1 ORDER BY P.fecha_registro DESC LIMIT 3;");
            echo json_encode($respuesta);
        break;
        case 'consulta_congresos_recientes':
            $respuesta = consultaSQL("SELECT nombre_evento, descripcion, link_imagen FROM congresos ORDER BY fecha_registro DESC LIMIT 2;");
            echo json_encode($respuesta);
        break;
    }
?>

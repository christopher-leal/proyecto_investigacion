<?php 
include_once 'bdconexion.php';
    if (isset($_POST['cargar'])&&$_POST['cargar']=='lineas') {
        $info=[];
        try {
           $sql = 'select*from lineas_investigacion;';
           if ($datos = $conn->query($sql)) {
               while ($dato=$datos->fetch_assoc()) {
                   $informacion=array(
                       'id_linea'=>$dato['id_linea'],
                       'nombre_linea'=>$dato['nombre_linea']
                   );
                   $info[]=$informacion;
               }
               echo json_encode($info);
           }
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    
    }

    if(isset($_POST['cargar'])&&$_POST['cargar']=='proyectos') {
        $info=[];
        try {
           $sql = 'select p.id_proyecto, p.titulo_proyecto,p.lider_proyecto, p.linea_investigacion, p.fecha_inicio, year(p.fecha_inicio) as anio, p.fecha_fin, p.link_imagen, p.resumen, i.nombre, i.apellido_paterno, i.apellido_materno from proyectos p inner join investigadores i on p.lider_proyecto=i.id_investigador where linea_investigacion=3 order by fecha_inicio limit 3;';
           if ($datos = $conn->query($sql)) {
               while ($dato=$datos->fetch_assoc()) {
                   $informacion=array(
                       'id_proyecto'=>$dato['id_proyecto'],
                       'titulo_proyecto'=>$dato['titulo_proyecto']
                   );
                   $info[]=$informacion;
               }
               echo json_encode($info);
           }
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    
    }
    

?>

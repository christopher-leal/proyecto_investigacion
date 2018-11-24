<?php 
$lineaInvestigacion;
if(isset($_GET['id'])) {
    $lineaInvestigacion=$_GET['id'];
}

if(isset($_POST['fecha'])&&$_POST['fecha']!='default'&& isset($_POST['id_investigador'])&&$_POST['id_investigador']!='default'){
    filtroAmbos();

} else {
    if(isset($_POST['fecha'])&&$_POST['fecha']!='default'&& isset($_POST['id_investigador'])&&$_POST['id_investigador']=='default') {
        filtroAño();
    } else {
        if (isset($_POST['fecha'])&&$_POST['fecha']=='default'&& isset($_POST['id_investigador'])&&$_POST['id_investigador']!='default') {
            filtroInvestigador();
        } else {
            include_once 'bdconexion.php';
            $info=[];
            try {
                $sql = "select p.id_proyecto, p.titulo_proyecto,p.lider_proyecto, p.linea_investigacion, p.fecha_inicio,year(p.fecha_inicio) as anio,p.fecha_fin, p.link_imagen, p.resumen, i.nombre, i.apellido_paterno, i.apellido_materno, linea.nombre_linea from proyectos p inner join investigadores i on p.lider_proyecto=i.id_investigador inner join lineas_investigacion linea on linea.id_linea=p.linea_investigacion where linea_investigacion=".$lineaInvestigacion.";";
                if($datos = $conn->query($sql)){

                    while($dato=$datos->fetch_assoc()){
                        $informacion=array(
                            'id_proyecto'=>$dato['id_proyecto'],
                            'titulo_proyecto'=>$dato['titulo_proyecto'],
                            'lider_proyecto'=>$dato['lider_proyecto'],
                            'linea_investigacion'=>$dato['linea_investigacion'],
                            'nombre_linea'=>$dato['nombre_linea'],
                            'fecha_inicio'=>$dato['fecha_inicio'],
                            'anio'=>$dato['anio'],
                            'fecha_fin'=>$dato['fecha_fin'],
                            'link_imagen'=>$dato['link_imagen'],
                            'resumen'=>$dato['resumen'],
                            'nombre'=>$dato['nombre'],
                            'apellido_paterno'=>$dato['apellido_paterno'],
                            'apellido_materno'=>$dato['apellido_materno']           );
                       $info[]=$informacion;
                    }
                    echo json_encode($info);
                    $datos->free();
                }

            } catch(Exception $e) {
                echo $e->getMessage();
            }
        
        }
    } 
}
function filtroAño() {
    include 'bdconexion.php';
    $fecha = $_POST['fecha'];
    $lineaInvestigacion = $_POST['linea_investigacion'];
    $info=[];
    try {
        $sql = "select p.id_proyecto, p.titulo_proyecto,p.lider_proyecto, p.linea_investigacion, p.fecha_inicio,year(p.fecha_inicio) as anio,p.fecha_fin, p.link_imagen, p.resumen, i.nombre, i.apellido_paterno, i.apellido_materno, linea.nombre_linea from proyectos p inner join investigadores i on p.lider_proyecto=i.id_investigador inner join lineas_investigacion linea on linea.id_linea=p.linea_investigacion where year(fecha_inicio)=".$fecha." and linea_investigacion=".$lineaInvestigacion.";";
        if($datos = $conn->query($sql)) {
            while($dato=$datos->fetch_assoc()){
                $informacion=array(
                    'id_proyecto'=>$dato['id_proyecto'],
                    'titulo_proyecto'=>$dato['titulo_proyecto'],
                    'lider_proyecto'=>$dato['lider_proyecto'],
                    'linea_investigacion'=>$dato['linea_investigacion'],
                    'nombre_linea'=>$dato['nombre_linea'],
                    'fecha_inicio'=>$dato['fecha_inicio'],
                    'anio'=>$dato['anio'],
                    'fecha_fin'=>$dato['fecha_fin'],
                    'link_imagen'=>$dato['link_imagen'],
                    'resumen'=>$dato['resumen'],
                    'nombre'=>$dato['nombre'],
                    'apellido_paterno'=>$dato['apellido_paterno'],
                    'apellido_materno'=>$dato['apellido_materno']           );
               $info[]=$informacion;
            }
            echo json_encode($info);
            $datos->free();
        }
    } catch(Exception $e) {
        echo $e->getMessage();
    }
}
function filtroInvestigador(){
    include "bdconexion.php";
    $idInvestigador = $_POST['id_investigador'];
    $lineaInvestigacion = $_POST['linea_investigacion'];
    $info=[];
    try {
        $sql = "select p.id_proyecto, p.titulo_proyecto,p.lider_proyecto, p.linea_investigacion, p.fecha_inicio,year(p.fecha_inicio) as anio,p.fecha_fin, p.link_imagen, p.resumen, i.nombre, i.apellido_paterno, i.apellido_materno, linea.nombre_linea from proyectos p inner join investigadores i on p.lider_proyecto=i.id_investigador inner join lineas_investigacion linea on linea.id_linea=p.linea_investigacion where lider_proyecto=" . $idInvestigador." and linea_investigacion=".$lineaInvestigacion.";" ;
        if($datos = $conn->query($sql)) {
            while($dato=$datos->fetch_assoc()){
                $informacion=array(
                    'id_proyecto'=>$dato['id_proyecto'],
                    'titulo_proyecto'=>$dato['titulo_proyecto'],
                    'lider_proyecto'=>$dato['lider_proyecto'],
                    'linea_investigacion'=>$dato['linea_investigacion'],
                    'nombre_linea'=>$dato['nombre_linea'],
                    'fecha_inicio'=>$dato['fecha_inicio'],
                    'anio'=>$dato['anio'],
                    'fecha_fin'=>$dato['fecha_fin'],
                    'link_imagen'=>$dato['link_imagen'],
                    'resumen'=>$dato['resumen'],
                    'nombre'=>$dato['nombre'],
                    'apellido_paterno'=>$dato['apellido_paterno'],
                    'apellido_materno'=>$dato['apellido_materno']           );
               $info[]=$informacion;
            }
            echo json_encode($info);
            $datos->free();
        }
    } catch(Exception $e) {
        echo $e->getMessage();
    }
}
function filtroAmbos() {
    include "bdconexion.php";
    $fecha = $_POST['fecha'];
    $idInvestigador = $_POST['id_investigador'];
    $lineaInvestigacion = $_POST['linea_investigacion'];
    $info=[];
    try {
        $sql = "select p.id_proyecto, p.titulo_proyecto,p.lider_proyecto, p.linea_investigacion, p.fecha_inicio,year(p.fecha_inicio) as anio,p.fecha_fin, p.link_imagen, p.resumen, i.nombre, i.apellido_paterno, i.apellido_materno, linea.nombre_linea from proyectos p inner join investigadores i on p.lider_proyecto=i.id_investigador inner join lineas_investigacion linea on linea.id_linea=p.linea_investigacion where year(fecha_inicio)=".$fecha. " and lider_proyecto=".$idInvestigador." and linea_investigacion=".$lineaInvestigacion.";";
        if($datos = $conn->query($sql)) {
            while($dato=$datos->fetch_assoc()){
                $informacion=array(
                    'id_proyecto'=>$dato['id_proyecto'],
                    'titulo_proyecto'=>$dato['titulo_proyecto'],
                    'lider_proyecto'=>$dato['lider_proyecto'],
                    'linea_investigacion'=>$dato['linea_investigacion'],
                    'nombre_linea'=>$dato['nombre_linea'],
                    'fecha_inicio'=>$dato['fecha_inicio'],
                    'anio'=>$dato['anio'],
                    'fecha_fin'=>$dato['fecha_fin'],
                    'link_imagen'=>$dato['link_imagen'],
                    'resumen'=>$dato['resumen'],
                    'nombre'=>$dato['nombre'],
                    'apellido_paterno'=>$dato['apellido_paterno'],
                    'apellido_materno'=>$dato['apellido_materno']           );
               $info[]=$informacion;
            }
            echo json_encode($info);
            $datos->free();
        }
        else {
            echo ("no hubo resultado");
        }
    } catch(Exception $e) {
        echo $e->getMessage();
    }
}
?>
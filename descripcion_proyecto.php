<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Proyecto</title>

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/all.min.css">
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md titulo">
                <h2></h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md fecha">
                <h3></h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-7 contenedor resumen">
                <p></p>
            </div>
            <div class="col-md-4 offset-md-1">
                <div class="imagen">
                    <img id="imagen" src="img/invitado6.jpg" alt="investigador">
                </div>
                <div class="contenedor-info">
                    <h3 id="jefe_proyecto"></h3>
                    <h3 id="colaboradores"></h3>
                    <h3 id="financiamiento"></h3>
                </div>
                <div class="contenedor-info">
                    <h3>Datos de contacto</h3><br>
                    <h4 id="nombre"></h4>
                    <h4 id="correo"></h4>
                    <h4 id="ubicacion"></h4>
                </div>
            </div>
        </div>
    </div>


    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/all.min.js"></script>
    <script src="js/proyectos/descripcion_proyecto.js"></script>
</body>

</html>
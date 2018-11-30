<?php include_once 'includes/templates/header.php'; ?>
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
                    <img id="imagen"alt="investigador">
                </div>
                <div class="contenedor-info">
                    <h3>Datos de contacto</h3><br>
                    <h4 id="nombre"></h4>
                    <h4 id="correo"></h4>
                    <h4 id="ubicacion"></h4>
                </div>
                <div class="contenedor-info">
                    <input type="checkbox" id="financiamiento"><span>Financiamiento</span>
                    <h4 id="colaboradores"></h4>
                </div>
            </div>
        </div>
    </div>
<?php include_once 'includes/templates/footer.php';?>
<script src="js/proyectos/descripcion_proyecto.js"></script>

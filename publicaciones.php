<?php include_once 'includes/templates/header.php';?>
    <div class="container">
        <div class="row">
            <div class="col-md titulo">
                <h2 id= "nombre"></h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md fecha">
                <h3>PUBLICACIONES: </h3>
            </div>
        </div>
        <div class="row" >
            <div class="col-md-7">
            
            <ul id="publicaciones">
  
<li><a href="#">titulo_publicacion</a></li>
<li><a href="#">Works</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Contcat</a></li>
<li><a href="#">Buy</a></li>

</ul>
            </div>
            <div class="col-md-4 offset-md-1">
                <div class="imagen">
                    <img id="imagen" alt="investigador">
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
<?php include_once 'includes/templates/footer.php';?>
<script src="js/proyectos/publicaciones.js"></script>

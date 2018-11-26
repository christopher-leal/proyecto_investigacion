<?php include_once "includes/templates/header.php";?>

    <div class="container">
        <div class="row">
            <div class="col-md titulo">
                <h2></h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md filtro">
                <h3>filtrar</h3>
                <select name="año" id="año">
                </select>
                <select name="investigador" id="investigador">
                </select>
                <button class="btn" type="submit" id="aplicar">aplicar filtro</button>
                <button class="btn" type="button" id="reiniciar">quitar filtro</button>
            </div>
        </div>
        <div class="row row-container">
            
        </div>
        <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
        </ul>
        </nav>

    </div>
<?php include_once "includes/templates/footer.php";?>
<script src="js/proyectos/proyectos_funciones.js"></script>

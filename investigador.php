<?php include 'includes/templates/header.php'; ?>
    <!--investigadores-->
    <div class="container">
        <div class="row">
            <div class="col-md titulo">
                <h2>Investigadores</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md filtro">
                <h3>filtrar</h3>
                <form id="form" name="form">

                  <select name="investigador" id="investigador">
                      <option value="default">Linea de investigacion</option>
                  </select>
                  <button class="btn" type="button" onclick="filtrar()">aplicar filtro</button>
                  <button class="btn" type="button" onclick="reiniciar()">quitar filtro</button>
                </form>
            </div>
        </div>
        <div id="output" class="col-md-12" ></div>
        <br>
    </div>

<?php include 'includes/templates/footer.php';?>
<script src="js/investigador.js"></script>

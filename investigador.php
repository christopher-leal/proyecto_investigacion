<?php include 'includes/templates/header.php'; ?>
    <!--investigadores-->
    <div id="row" class="container">
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
        <div id="output" class="col-md-12 row justify-content-between row-container"></div>
        <div id="pages">

        </div>

        <br>
    </div>

    <!--Investigador-->
    <div id="inv" >
      <div class="container">
          <div class="row">
              <div class="col-md titulo">
                  <h2>Investigador</h2>
              </div>
          </div>
          <div class="row">
              <div class="col-md fecha">
                  <h3></h3>
              </div>
          </div>
          <div class="row">
              <div id="titulo" class="col-md-7 contenedor resumen">
                  <br>
              </div>
              <div class="col-md-4 offset-md-1">
                  <div id="img" class="imagen">

                  </div>
                  <div id="cont-info" class="contenedor-info">
                      <h3 id="jefe_proyecto"></h3>
                      <h3 id="colaboradores"></h3>
                      <h3 id="financiamiento"></h3>
                  </div>
                  <div id="datos" class="contenedor-info">
                      <h3>Datos de contacto</h3><br>
                      <h4 id="nombre"></h4>
                      <h4 id="correo"></h4>
                      <h4 id="ubicacion"></h4>
                  </div>
              </div>
          </div>
          <button class="btn" id="atras" style="display:none;" type="button" onclick="regresar()">Atrás</button>
      </div>

    </div>
    <br>

<?php include 'includes/templates/footer.php';?>
<script src="js/investigador.js"></script>

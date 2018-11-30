<?php include 'includes/templates/header.php'; ?>
<div class="container">
<div id="row">
    <div class="row">
        <div class="col-md-12 titulo">
            <h2>Login</h2>
        </div>
    </div>
    <div class="container">
    <div class="row" style="padding-left: 20em; padding-right: 20em">
      <br>
      <form class="col-sm-12"  action="includes/funciones/login_bd.php" method="post">
        <br><br>
        <input type="text" class="form-control" name="txtusuario" value="" placeholder="Usuario"><br><br>
        <input type="password" class="form-control" name="txtpass" value="" placeholder="Contraseña"><br><br>
        <button type="submit" class="btn" name="login">Login</button>
      </form>
    </div>
    </div>
    <br>
    <br>
    <br>
    <br>
</div>
</div>


<?php include 'includes/templates/footer.php';?>
<script src="js/proyectos/anuncios.js"></script>

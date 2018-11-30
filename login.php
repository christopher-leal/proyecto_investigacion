<?php include 'includes/templates/header.php'; ?>
<div id="row" class="container">
    <div class="row">
        <div class="col-md titulo">
            <h2>Login</h2>

        </div>
    </div>
    <div class="row">
      <br>
      <form class="" action="includes/funciones/login_bd.php" method="post">
        <br><br>
        <input type="text" name="txtusuario" value="" placeholder="Usuario"><br><br>
        <input type="password" name="txtpass" value="" placeholder="Contraseña"><br><br>
        <button type="submit" name="login">Login</button>
      </form>
    </div>
    <br>
    <br>
    <br>
    <br>

</div>

<?php include 'includes/templates/footer.php';?>
<script src="js/proyectos/anuncios.js"></script>

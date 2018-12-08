<?php
  //inicializa la sesion
  session_start();
  //destruye todas las variables de sesion
  $_SESSION = array();
  //si se desea destriur la sesion completamente, borre tambien la cookie de sesion
  if(ini_get("session.use_cookies")){
      $params = session_get_cookie_params();
      setcookie(session_name(), '', time() - 42000,
          $params["path"], $params["domain"],
         $params["secure"], $params["httponly"]
     );
  }
  //finalmente destruimos la sesion
  session_destroy();
  header("Location: ../../login.php");
 ?>

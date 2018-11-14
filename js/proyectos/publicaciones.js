$(function() {
    "use strict";
  
    const id = window.location.href.split("?")[1].split('=')[1]
    const xhr = new XMLHttpRequest()
  
    xhr.open("GET", `includes/funciones/publicaciones_bd.php?id=${id}`, true);
  
    xhr.onload = function() {
      console.log(xhr.responseText)
      //console.log(JSON.parse(xhr.responseText));
      var informacion = JSON.parse(xhr.responseText.trim());
      const nombre_investigador = document.querySelector("div.titulo h2#nombre"),
        correo = document.querySelector("div.contenedor-info h4#correo"),
        ubicacion = document.querySelector("div.contenedor-info h4#ubicacion"),
        titulo_publicacion =document.querySelector("li a#titulo_publicación"),
        link_publicacion=document.querySelector("a rehf#link_publicación");
      document.getElementById("imagen").src = informacion.url_foto;

      nombre_investigador.innerHTML = `${informacion.nombre} ${
        informacion.apellido_paterno
      } ${informacion.apellido_materno}`;

  
      titulo_publicacion.innerHTML = `${informacion.titulo_publicacion}`;
      link_publicacion.innerHTML = `${informacion.link_publicacion}`;
      correo.innerHTML = `Correo: ${informacion.correo}`;
      ubicacion.innerHTML = `Ubicacion: ${informacion.ubicacion}`;
    };
    xhr.send();
  });
  

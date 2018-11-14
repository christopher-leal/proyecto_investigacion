$(function() {
  "use strict";

  const id = window.location.href.split("?")[1].split('=')[1]
  const xhr = new XMLHttpRequest()

  xhr.open("GET", `includes/funciones/descripcion_proyectobd.php?id=${id}`, true);

  xhr.onload = function() {
    console.log(xhr.responseText)
    //console.log(JSON.parse(xhr.responseText));
    var informacion = JSON.parse(xhr.responseText.trim());
    const tituloProyecto = document.querySelector("div.titulo h2"),
      fecha = document.querySelector("div.fecha h3"),
      financiamiento = document.querySelector(
        "div.contenedor-info h3#financiamiento"
      ),
      resumen = document.querySelector("div.resumen p"),
      nombre_investigador = document.querySelector(
        "div.contenedor-info h4#nombre"
      ),
      correo = document.querySelector("div.contenedor-info h4#correo"),
      ubicacion = document.querySelector("div.contenedor-info h4#ubicacion");
    document.getElementById("imagen").src = informacion.link_imagen;

    tituloProyecto.innerHTML = informacion.titulo_proyecto;
    fecha.innerHTML = `del ${informacion.fecha_inicio} al ${
      informacion.fecha_fin
    }`;
    resumen.innerHTML = informacion.resumen;
    if (informacion["financiamiento"] === 1) {
      financiamiento.innerHTML = "Financiado";
    } else {
      financiamiento.innerHTML = "No financiado";
    }
    nombre_investigador.innerHTML = `Nombre: ${informacion.nombre} ${
      informacion.apellido_paterno
    } ${informacion.apellido_materno}`;
    correo.innerHTML = `Correo: ${informacion.correo}`;
    ubicacion.innerHTML = `Ubicacion: ${informacion.ubicacion}`;
  };
  xhr.send();
});

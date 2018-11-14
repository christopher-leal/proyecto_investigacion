$(function() {
  "use strict";
  alert("hola");
  const id = window.location.href.split("?")[1].split('=')[1]
  const xhr = new XMLHttpRequest()

  xhr.open("GET", `includes/funciones/descripcion_proyectobd.php?id=${id}`, true);

  xhr.onload = function() {
    var informacion = JSON.parse(xhr.responseText);
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
    const fechaInicio=formato(informacion.fecha_inicio);
    const fechaFin=formato(informacion.fecha_fin);
    fecha.innerHTML = `del ${fechaInicio} al ${fechaFin}`;
    resumen.innerHTML = informacion.resumen;
    if (informacion["financiamiento"] == 1) {
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

function formato(fecha){
  return fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
}

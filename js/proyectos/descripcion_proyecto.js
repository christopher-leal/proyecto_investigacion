/**funcion principal que se carga cuando el dom de la pagina se carga por completo */
$(function() {
  "use strict";
  /**variable id para obtener el id del proyecto que se quiere ver */
  const id = window.location.href.split("?")[1].split('=')[1];

  /**creacion de la variable xhr para poder hacer peticiones ajax */
  const xhr = new XMLHttpRequest();

  /**apertura del metodo ajax por metodo get asyncrono */
  xhr.open("GET", `includes/funciones/descripcion_proyectobd.php?id=${id}`, true);

  /**respuesta del metodo ajax y manipulacion de los datos */
  xhr.onload = function() {
    var informacion = JSON.parse(xhr.responseText);
    const tituloProyecto = document.querySelector("div.titulo h2"),
      fecha = document.querySelector("div.fecha h3"),
      financiamiento = document.querySelector("div.contenedor-info #financiamiento"),
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
      financiamiento.checked = true;
      financiamiento.disabled=true;
    } else {
      financiamiento.checked = false;
      financiamiento.disabled=true;
    }
    nombre_investigador.innerHTML = `Nombre: ${informacion.nombre} ${
      informacion.apellido_paterno
    } ${informacion.apellido_materno}`;
    correo.innerHTML = `Correo: ${informacion.correo}`;
    ubicacion.innerHTML = `Ubicacion: ${informacion.ubicacion}`;
  };
  /**variable para enviar datos, en este caso no se usa, pero por sintaxis se debe declarar */
  xhr.send();
});

/**funcion para darle formato a la fecha dd/mm/aaaa */
function formato(fecha){
  return fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
}

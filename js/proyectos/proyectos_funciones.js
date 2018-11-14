// const idProyecto = document.querySelector("div.row-container");
// var id;
// eventListeners();
// function eventListeners() {
//   idProyecto.addEventListener("click", obtenerId);
// }
$(function() {
  "use strict";

  const script = document.createElement("script");
  script.src="js/proyectos/descripcion_proyecto.js";
  document.body.appendChild(script);

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "includes/funciones/proyectos_bd.php", true);

  xhr.onload = function() {
    const informacion = JSON.parse(xhr.responseText);
    if (this.status === 200) {
      const contenedor = document.querySelector("div.row-container");
      for (const info of informacion) {
        const contenedorGrid = document.createElement("div");
        contenedorGrid.classList.add("col-md-4", "col-sm-12", "col-12");
        contenedor.appendChild(contenedorGrid);
        const contenedorTitulo = document.createElement("div");
        contenedorTitulo.classList.add("imagen-proyecto");
        contenedorGrid.appendChild(contenedorTitulo);
        const btnImg = document.createElement("a");
        btnImg.setAttribute("href", `descripcion_proyecto.php?id=${info.id_proyecto}`);
        btnImg.setAttribute("id", info.id_proyecto);
        btnImg.setAttribute("class", "imgID");

        contenedorTitulo.appendChild(btnImg);
        const imagenProyecto = document.createElement("img");
        imagenProyecto.setAttribute("src", info.link_imagen);
        btnImg.appendChild(imagenProyecto);
        const tituloProyecto = document.createElement("h3");
        tituloProyecto.innerHTML = info.titulo_proyecto;
        contenedorTitulo.appendChild(tituloProyecto);
        const infoProyecto = document.createElement("div");
        infoProyecto.classList.add("info-proyecto");
        contenedorGrid.appendChild(infoProyecto);
        const jefeProyecto = document.createElement("h3");
        const fechaProyecto = document.createElement("h3");
        const colaboradores = document.createElement("h3");
        const resumen = document.createElement("p");
        jefeProyecto.innerHTML = `Jefe del Proyecto: <br> ${info.nombre} ${
          info.apellido_paterno
        } ${info.apellido_materno}`;
        fechaProyecto.innerHTML = `del ${info.fecha_inicio} al ${
          info.fecha_fin
        }`;
        resumen.innerHTML = info.resumen;
        infoProyecto.appendChild(jefeProyecto);
        infoProyecto.appendChild(fechaProyecto);
        infoProyecto.appendChild(resumen);
      }
    }
  };
  xhr.send();
});

// function obtenerId(e) {
//   if (e.target.parentElement.classList.contains("imgID")) {
//     id = e.target.parentElement.getAttribute("id");
//     console.log(id);
//   }
// }

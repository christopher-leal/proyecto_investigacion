const btnAplicar = document.querySelector("button#aplicar");
const btnReiniciar = document.querySelector("button#reiniciar");
eventListeners();

function eventListeners() {
  btnAplicar.addEventListener("click", aplicarFiltro);
  btnReiniciar.addEventListener('click', cargarBD);
}
var fech = [],
  inves = [];
$(function() {
  "use strict";
  cargarBD();
});
function cargarBD() {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "includes/funciones/proyectos_bd.php", true);

  xhr.onload = function() {
    const informacion = JSON.parse(xhr.responseText);
    if (this.status === 200) {
      const contenedor = document.querySelector("div.row-container");
      contenedor.innerHTML="";
      for (const info of informacion) {
        const contenedorGrid = document.createElement("div");
        contenedorGrid.classList.add(
          "col-md-4",
          "col-sm-12",
          "col-12",
          "proyectos"
        );
        contenedor.appendChild(contenedorGrid);
        const contenedorTitulo = document.createElement("div");
        contenedorTitulo.classList.add("imagen-proyecto");
        contenedorGrid.appendChild(contenedorTitulo);
        const btnImg = document.createElement("a");
        btnImg.setAttribute(
          "href",
          `descripcion_proyecto.php?id=${info.id_proyecto}`
        );
        btnImg.setAttribute("id", info.id_proyecto);
        contenedorTitulo.appendChild(btnImg);
        const verMas = document.createElement("h3");
        verMas.innerHTML = "Ver más";
        contenedorTitulo.appendChild(verMas);
        const imagenProyecto = document.createElement("img");
        imagenProyecto.setAttribute("src", info.link_imagen);
        btnImg.appendChild(imagenProyecto);
        const infoProyecto = document.createElement("div");
        infoProyecto.classList.add("info-proyecto");
        contenedorGrid.appendChild(infoProyecto);
        const tituloProyecto = document.createElement("h3");
        const jefeProyecto = document.createElement("h3");
        const fechaProyecto = document.createElement("h3");
        const colaboradores = document.createElement("h3");
        tituloProyecto.innerHTML = `Titulo del proyecto:<br>${
          info.titulo_proyecto
        }`;
        jefeProyecto.innerHTML = `Jefe del Proyecto: <br> ${info.nombre} ${
          info.apellido_paterno
        } ${info.apellido_materno}`;
        const fechaInicio = formato(info.fecha_inicio);
        const fechaFin = formato(info.fecha_fin);

        var ban = false;
        for (var i in fech) {
          ban = fech[i]["anio"] == info.anio;
          if (ban) break;
        }
        if (!ban) {
          fech.push({ anio: info.anio });
        }

        var ban = false;
        for (var i in inves) {
          ban =
            inves[i]["nombreInves"] ==
            `${info.nombre} ${info.apellido_paterno} ${info.apellido_materno}`;
          if (ban) break;
        }
        if (!ban) {
          inves.push({
            nombreInves: `${info.nombre} ${info.apellido_paterno} ${
              info.apellido_materno
            }`,
            id_investigador: info.lider_proyecto
          });
        }
        fechaProyecto.innerHTML = `del ${fechaInicio} al ${fechaFin}`;
        infoProyecto.appendChild(tituloProyecto);
        infoProyecto.appendChild(jefeProyecto);
        infoProyecto.appendChild(fechaProyecto);
      }
    }
    cargarSelectaño(fech);
    cargarSelectinvestigador(inves);
  };
  xhr.send();
}
function formato(fecha) {
  return fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, "$3/$2/$1");
}
function cargarSelectaño(fech) {
  selectAño = document.querySelector("select#año");
  const añoDefault=document.createElement('option');
  selectAño.innerHTML="";
  añoDefault.setAttribute('value', 'default');
  añoDefault.innerHTML="Año de inicio";
  selectAño.appendChild(añoDefault);
  for (var i in fech) {
    optionAño = document.createElement("option");
    optionAño.innerHTML = "";
    optionAño.setAttribute("value", fech[i]["anio"]);
    optionAño.innerHTML = fech[i]["anio"];
    selectAño.appendChild(optionAño);
  }
}
function cargarSelectinvestigador(inves) {
  selectInves = document.querySelector("select#investigador");
  const invesDefault=document.createElement('option');
  selectInves.innerHTML="";
  invesDefault.setAttribute('value', 'default');
  invesDefault.innerHTML="Investigador";
  selectInves.appendChild(invesDefault);
  for (var i in inves) {
    optionInves = document.createElement("option");
    optionInves.innerHTML = "";
    optionInves.setAttribute("value", inves[i]["id_investigador"]);
    optionInves.innerHTML = inves[i]["nombreInves"];
    selectInves.appendChild(optionInves);
  }
}
function aplicarFiltro() {
  const selectAño = document.querySelector("select#año").value;
  const selectInves = document.querySelector("select#investigador").value;
  if (selectAño != "default" || selectInves != "default") {
    const contenedor = document.querySelector("div.row-container");
    contenedor.innerHTML = "";
    const datosFiltro = new FormData();
    datosFiltro.append("fecha", selectAño);
    datosFiltro.append("id_investigador", selectInves);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "includes/funciones/proyectos_bd.php", true);
    xhr.onload = function() {
      if (this.readyState == 4 && this.status == 200) {
        const informacion = JSON.parse(xhr.responseText);
        if (informacion && informacion.length) {
          for (const info of informacion) {
            const contenedorGrid = document.createElement("div");
            contenedorGrid.classList.add("col-md-4", "col-sm-12", "col-12");
            contenedor.appendChild(contenedorGrid);
            const contenedorTitulo = document.createElement("div");
            contenedorTitulo.classList.add("imagen-proyecto");
            contenedorGrid.appendChild(contenedorTitulo);
            const btnImg = document.createElement("a");
            btnImg.setAttribute(
              "href",
              `descripcion_proyecto.php?id=${info.id_proyecto}`
            );
            btnImg.setAttribute("id", info.id_proyecto);
            contenedorTitulo.appendChild(btnImg);
            const imagenProyecto = document.createElement("img");
            imagenProyecto.setAttribute("src", info.link_imagen);
            btnImg.appendChild(imagenProyecto);
            const verMas = document.createElement("h3");
            verMas.innerHTML = "Ver más";
            contenedorTitulo.appendChild(verMas);
            const infoProyecto = document.createElement("div");
            infoProyecto.classList.add("info-proyecto");
            contenedorGrid.appendChild(infoProyecto);
            const tituloProyecto = document.createElement("h3");
            const jefeProyecto = document.createElement("h3");
            const fechaProyecto = document.createElement("h3");
            const colaboradores = document.createElement("h3");
            tituloProyecto.innerHTML = `Titulo del proyecto:<br>${
              info.titulo_proyecto
            }`;
            jefeProyecto.innerHTML = `Jefe del Proyecto: <br> ${info.nombre} ${
              info.apellido_paterno
            } ${info.apellido_materno}`;
            const fechaInicio = formato(info.fecha_inicio);
            const fechaFin = formato(info.fecha_fin);
            fechaProyecto.innerHTML = `del ${fechaInicio} al ${fechaFin}`;
            infoProyecto.appendChild(tituloProyecto);
            infoProyecto.appendChild(jefeProyecto);
            infoProyecto.appendChild(fechaProyecto);
          }
        } else {
          alert("No hay ningun proyecto que cumpla con tu criterio de busqueda");
          cargarBD();
        }
      }
    };
    xhr.send(datosFiltro);
  } else {
    alert(
      "Debes seleccionar al menos un campo para poder filtrar los proyectos"
    );
  }
}

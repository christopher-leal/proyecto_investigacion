const btnAplicar = document.querySelector('button#aplicar');
eventListeners();

function eventListeners() {
  btnAplicar.addEventListener("click", aplicarFiltro);
}
const fechas = {};
$(function () {
  "use strict";

  const script = document.createElement("script");
  script.src = "js/proyectos/descripcion_proyecto.js";
  document.body.appendChild(script);

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "includes/funciones/proyectos_bd.php", true);

  xhr.onload = function () {
    const informacion = JSON.parse(xhr.responseText);
    if (this.status === 200) {
      const contenedor = document.createElement('div');
      contenedor.classList.add("row", "justify-content-between", "row-container");
      const contenedorBase = document.querySelector('div.container');
      contenedorBase.insertAdjacentElement('beforeend', contenedor);
      // body.insertAdjacentElement(contenedor, document.querySelector('div.row').parentElement);
      // body.appendChild(contenedor);
      for (const info of informacion) {
        const contenedorGrid = document.createElement("div");
        contenedorGrid.classList.add("col-md-4", "col-sm-12", "col-12", 'proyectos');
        contenedor.appendChild(contenedorGrid);
        const contenedorTitulo = document.createElement("div");
        contenedorTitulo.classList.add("imagen-proyecto");
        contenedorGrid.appendChild(contenedorTitulo);
        const btnImg = document.createElement("a");
        btnImg.setAttribute("href", `descripcion_proyecto.php?id=${info.id_proyecto}`);
        btnImg.setAttribute("id", info.id_proyecto);
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
          info.apellido_paterno} ${info.apellido_materno}`;
        const fechaInicio = formato(info.fecha_inicio);
        const fechaFin = formato(info.fecha_fin);
        fechaProyecto.innerHTML = `del ${fechaInicio} al ${fechaFin}`;
        resumen.innerHTML = info.resumen;
        infoProyecto.appendChild(jefeProyecto);
        infoProyecto.appendChild(fechaProyecto);
        infoProyecto.appendChild(resumen);
        //cargando select año
        const selectAño = document.querySelector('select#año');
        const optionAño = document.createElement('option');
        optionAño.setAttribute('value', info.fecha_inicio);
        optionAño.innerHTML = fechaInicio;
        selectAño.appendChild(optionAño);

        //cargando select investigador
        const selectInves = document.querySelector('select#investigador');
        const optionInves = document.createElement('option');
        optionInves.innerHTML = `${info.nombre} ${info.apellido_paterno} ${info.apellido_materno}`;
        selectInves.appendChild(optionInves);
      }
    }
  };
  xhr.send();
});

function formato(fecha) {
  return fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1');
}

function aplicarFiltro() {
  const selectAño = document.querySelector('select#año').value;
  const selectInves = document.querySelector('select#investigador').value;
  if (selectAño != 'default' || selectInves != 'default') {
    document.querySelector("div.row-container").remove();
    const fechaSend = new FormData();
    fechaSend.append('fecha', selectAño);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'includes/funciones/proyectos_bd.php', true);
    xhr.onload = function () {
      const informacion = JSON.parse(xhr.responseText);
      if (this.status === 200) {
        const contenedor = document.createElement('div');
        contenedor.classList.add("row", "justify-content-between", "row-container");
        const contenedorBase = document.querySelector('div.container');
        contenedorBase.insertAdjacentElement('beforeend', contenedor);
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
            info.apellido_paterno} ${info.apellido_materno}`;
          const fechaInicio = formato(info.fecha_inicio);
          const fechaFin = formato(info.fecha_fin);
          fechaProyecto.innerHTML = `del ${fechaInicio} al ${fechaFin}`;
          resumen.innerHTML = info.resumen;
          infoProyecto.appendChild(jefeProyecto);
          infoProyecto.appendChild(fechaProyecto);
          infoProyecto.appendChild(resumen);
          //cargando select año
          const selectAño = document.querySelector('select#año');
          const optionAño = document.createElement('option');
          optionAño.setAttribute('value', info.fecha_inicio);
          optionAño.innerHTML = fechaInicio;
          selectAño.appendChild(optionAño);

          //cargando select investigador
          const selectInves = document.querySelector('select#investigador');
          const optionInves = document.createElement('option');
          optionInves.innerHTML = `${info.nombre} ${info.apellido_paterno} ${info.apellido_materno}`;
          selectInves.appendChild(optionInves);
        }
      }


    };
    xhr.send(fechaSend);
  } else {
    console.log('no entre');
  }
}
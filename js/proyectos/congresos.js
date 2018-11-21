$(function() {
    "use strict";
    const xhr = new XMLHttpRequest();
  
    xhr.open("POST", "includes/funciones/congresos_bd.php", true);
  
    xhr.onload = function() {
      const informacion = JSON.parse(xhr.responseText);
      if (this.status === 200) {
        const contenedor = document.querySelector("div.row-container");
        for (const info of informacion) {
          const contenedorGrid = document.createElement("div");
          contenedorGrid.classList.add(
            "col-md-4",
            "col-sm-12",
            "col-12",
            "congresos"
          );
          contenedor.appendChild(contenedorGrid);
          const contenedorTitulo = document.createElement("div");
          contenedorTitulo.classList.add("imagen-proyecto");
          contenedorGrid.appendChild(contenedorTitulo);
          const btnImg = document.createElement("a");
          btnImg.setAttribute(
            "href",
            `${info.link_externo}`
          );
          btnImg.setAttribute("id", info.id_evento);
          contenedorTitulo.appendChild(btnImg);
          const verMas = document.createElement("h3");
          verMas.innerHTML = "Ver más";
          contenedorTitulo.appendChild(verMas);
          const imagenEvento = document.createElement("img");
          imagenEvento.setAttribute("src", info.link_imagen);
          btnImg.appendChild(imagenEvento);
          const infoEvento= document.createElement("div");
          infoEvento.classList.add("info-proyecto");
          contenedorGrid.appendChild(infoEvento);
          const tituloEvento = document.createElement("h3");
          const fechaEvento = document.createElement("h3");
          const lugarEvento = document.createElement("h3");
          const fechaRegistro = document.createElement("h3");
          const descripcion= document.createElement("p");
          tituloEvento.innerHTML =info.nombre_evento;
          fechaEvento.innerHTML = `Fecha: ${info.fecha_evento}`;
          fechaRegistro.innerHTML = `Fecha de registro: ${info.fecha_registro}`;
          lugarEvento.innerHTML = `Lugar: ${info.lugar}`;
          descripcion.innerHTML = info.descripcion;
          infoEvento.appendChild(tituloEvento);
          
          infoEvento.appendChild(descripcion);
          infoEvento.appendChild(fechaEvento);
          infoEvento.appendChild(lugarEvento);
          infoEvento.appendChild(fechaRegistro);
        }
      }
    };
    xhr.send();
})
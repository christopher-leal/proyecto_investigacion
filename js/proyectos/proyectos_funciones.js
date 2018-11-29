/**declaracion de elementos globales los botones del dom */
const btnAplicar = document.querySelector("button#aplicar");
const btnReiniciar = document.querySelector("button#reiniciar");

/**cargar el inicializador de los eventos */
eventListeners();

const id = window.location.href.split("?")[1].split('=')[1].split('%')[0];
var pagina =( window.location.href.split("?")[1].split('=')[2]);
if(pagina==null){
  pagina=1;
}


/**asigna los eventos a los botones previamente definidos */
function eventListeners() {
  btnAplicar.addEventListener("click", aplicarFiltro);
  btnReiniciar.addEventListener('click', cargarBD);
}
/**arreglos de forma global para poder hacer un filtrado de fechas y año
 * y no repetir los datos
 */
var fech = [],
  inves = [],
  paginas;

/**funcion principal que se ejecuta cuando el dom carga */
$(function () {
  "use strict";
  /**metodo de carga para cargar los elementos por default */
  cargarBD();
});

/**funcion para cargar la base de datos cada vez que se
 * ingrese a la pagina
 */
function cargarBD() {
  /**inicializacion de elemento para el ajax */
  const xhr = new XMLHttpRequest();

  /**apertura de la peticion ajax por metodo post asinchrono */
  xhr.open("GET", `includes/funciones/proyectos_bd.php?id=${id}&pagina=${pagina}`, true);

  /**se acepta la respuesta de la peticion ajax y se manipulan los datos */
  xhr.onload = function () {
    console.log(xhr.responseText);
    const informacion = JSON.parse(xhr.responseText);
    if (this.status === 200) {

      const contenedor = document.querySelector("div.row-container");
      contenedor.innerHTML = "";
      for (const info of informacion) {
        paginas = info['numeroPaginas'];
        const tituloLinea = document.querySelector('div.titulo h2');
        tituloLinea.innerHTML = info['nombre_linea'];
        const contenedorGrid = document.createElement("div");
        contenedorGrid.classList.add(
          "col-md-4",
          "col-sm-12",
          "col-12"
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
          fech.push({
            anio: info.anio
          });
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
    /**llamado a metodo para cargar el select de año de filtro */
    cargarSelectaño(fech);
    /**metodo para cargar el select de investigador de filtro */
    cargarSelectinvestigador(inves);

    cargarPaginacion(paginas);
  };
  /**se envian los datos por la peticion ajax, aunque no mandemos nada
   * se debe declarar (se usa puro js en vez de usar jquery)
   */
  xhr.send();
}
/**funcion para cambiarle el formato a la fecha */
function formato(fecha) {
  return fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, "$3/$2/$1");
}
/** metodo para cargar el select año*/
function cargarSelectaño(fech) {
  selectAño = document.querySelector("select#año");
  const añoDefault = document.createElement('option');
  selectAño.innerHTML = "";
  añoDefault.setAttribute('value', 'default');
  añoDefault.innerHTML = "Año de inicio";
  selectAño.appendChild(añoDefault);
  for (var i in fech) {
    optionAño = document.createElement("option");
    optionAño.innerHTML = "";
    optionAño.setAttribute("value", fech[i]["anio"]);
    optionAño.innerHTML = fech[i]["anio"];
    selectAño.appendChild(optionAño);
  }
}

/** funcion para cargar el select investigador*/
function cargarSelectinvestigador(inves) {
  selectInves = document.querySelector("select#investigador");
  const invesDefault = document.createElement('option');
  selectInves.innerHTML = "";
  invesDefault.setAttribute('value', 'default');
  invesDefault.innerHTML = "Investigador";
  selectInves.appendChild(invesDefault);
  for (var i in inves) {
    optionInves = document.createElement("option");
    optionInves.innerHTML = "";
    optionInves.setAttribute("value", inves[i]["id_investigador"]);
    optionInves.innerHTML = inves[i]["nombreInves"];
    selectInves.appendChild(optionInves);
  }
}

function cargarPaginacion(paginas) {
  const contenedorPaginacion = document.querySelector('nav ul');
  contenedorPaginacion.innerHTML="";
  const paginaAnterior=document.createElement('li');
  paginaAnterior.classList.add('page-item');
  const linkAnterior=document.createElement('a');
  linkAnterior.classList.add('page-link');
  linkAnterior.setAttribute('href', `?id=${id}%26pagina=${pagina-1}`);
  linkAnterior.innerHTML="Anterior";
  paginaAnterior.appendChild(linkAnterior);
  contenedorPaginacion.appendChild(paginaAnterior);
  if((pagina-1)<=0){
    paginaAnterior.classList.add('disabled');
  } else {
    paginaAnterior.classList.remove('disabled');
  }
  for (let i = 0; i < paginas; i++) {
    const paginaLi = document.createElement('li');
    paginaLi.classList.add('page-item','paginas');
    paginaLi.setAttribute('id', `pagina${i+1}`);
    if(paginaLi.id==`pagina${pagina}`){
      paginaLi.classList.add('active');
    }
    const paginaLink = document.createElement('a');
    paginaLink.classList.add('page-link');
    paginaLink.setAttribute('href', `?id=${id}%26pagina=${i+1}`);
    paginaLink.innerHTML = i + 1;
    paginaLi.appendChild(paginaLink);
    contenedorPaginacion.appendChild(paginaLi);    
  }

  
  const paginaSiguiente=document.createElement('li');
  paginaSiguiente.classList.add('page-item');
  const linkSiguiente=document.createElement('a');
  linkSiguiente.classList.add('page-link');
  console.log(pagina);
  linkSiguiente.setAttribute('href', `?id=${id}%26pagina=${parseInt(pagina)+1}`);
  linkSiguiente.innerHTML="Siguiente";
  paginaSiguiente.appendChild(linkSiguiente);
  contenedorPaginacion.appendChild(paginaSiguiente);
  if(pagina<paginas){
    paginaSiguiente.classList.remove('disabled');
  } else {
    paginaSiguiente.classList.add('disabled');
  }

}
/**funcion para aplicar el filtro cada vez que se de click en el boton */
function aplicarFiltro() {
  const selectAño = document.querySelector("select#año").value;
  const selectInves = document.querySelector("select#investigador").value;
  if (selectAño != "default" || selectInves != "default") {
    const contenedor = document.querySelector("div.row-container");
    contenedor.innerHTML = "";
    const datosFiltro = new FormData();
    datosFiltro.append("fecha", selectAño);
    datosFiltro.append("id_investigador", selectInves);
    datosFiltro.append("linea_investigacion", id);
    // datosFiltro.append("pagina", pagina);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "includes/funciones/proyectos_bd.php", true);
    xhr.onload = function () {
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

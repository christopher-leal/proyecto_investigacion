$(function () {
    "use strict";
    const xhr = new XMLHttpRequest();
    var lineas = [],
        proyectos = [];
    xhr.open('POST', "includes/funciones/proyectos_lineabd.php", true);
    xhr.onload = function () {
        const informacion = JSON.parse(xhr.responseText);
        if (this.status === 200) {
            let cont = 0;
            const contenedor = document.querySelector('div.linea_proyecto');
            for (const info in informacion) {
                for (const linea of informacion[info]) {
                    var ban = false;
                    for (var i of lineas) {
                        ban = i["nombre_linea"] == linea["nombre_linea"];
                        if (ban) break;
                    }
                    if (!ban) {
                        lineas.push({
                            id_linea: info,
                            nombre_linea: linea["nombre_linea"]
                        });
                    }

                    if (cont < 3) {
                        proyectos.push({
                            id_linea: info,
                            informacion: linea
                        });
                        cont++;
                    }
                }
                cont = 0;
            }
            const contenedorLinks = document.querySelector('div.contenedor-links ul');
            for (const linea of lineas) {
                /** Links **/
                const linkLi = document.createElement('li');
                contenedorLinks.appendChild(linkLi);
                const linkA = document.createElement('a');
                linkA.setAttribute('href', `#titulo${linea['id_linea']}`);
                linkA.classList.add('link');
                linkA.innerHTML = linea['nombre_linea'];
                linkLi.appendChild(linkA);

                /**Titulos */
                const tituloProyecto = document.createElement('h2');
                tituloProyecto.setAttribute('id', `titulo${linea['id_linea']}`);
                tituloProyecto.innerHTML = linea['nombre_linea'];
                contenedor.appendChild(tituloProyecto)

                const contenedorInfo = document.createElement('div');
                contenedorInfo.classList.add('row', `proyecto${linea['id_linea']}`);
                contenedor.appendChild(contenedorInfo);

                const btnVertodo = document.createElement('button');
                btnVertodo.classList.add('btn');
                btnVertodo.setAttribute('name', 'id');
                btnVertodo.setAttribute('value', linea['id_linea']);
                btnVertodo.innerHTML = 'Ver todo';
                contenedor.appendChild(btnVertodo);


            }
            /**
             * Proyectos
             */
            for (const proyecto of proyectos) {
                const contenedorProyecto = document.querySelector(`div.proyecto${proyecto['id_linea']}`);
                const contenedorProy = document.createElement('div');
                contenedorProy.classList.add("col-md-4", "col-sm-12", "col-12");
                contenedorProyecto.appendChild(contenedorProy);

                const contenedorTitulo = document.createElement("div");
                contenedorTitulo.classList.add("imagen-proyecto");
                contenedorProy.appendChild(contenedorTitulo);
                const btnImg = document.createElement("a");
                btnImg.setAttribute(
                    "href",
                    `descripcion_proyecto.php?id=${proyecto['informacion']['id_proyecto']}`
                );
                btnImg.setAttribute("id", proyecto['informacion']['id_proyecto']);
                contenedorTitulo.appendChild(btnImg);
                const verMas = document.createElement("h3");
                verMas.innerHTML = "Ver más";
                contenedorTitulo.appendChild(verMas);
                const imagenProyecto = document.createElement("img");
                imagenProyecto.setAttribute("src", proyecto['informacion']['link_imagen']);
                btnImg.appendChild(imagenProyecto);
                const infoProyecto = document.createElement("div");
                infoProyecto.classList.add("info-proyecto");
                contenedorProy.appendChild(infoProyecto);
                const tituloProyecto = document.createElement("h3");
                const jefeProyecto = document.createElement("h3");
                const fechaProyecto = document.createElement("h3");
                tituloProyecto.innerHTML = `Titulo del proyecto:<br>${
                    proyecto['informacion']['titulo_proyecto']
                  }`;
                tituloProyecto.classList.add('cortar_t');
                jefeProyecto.innerHTML = `Jefe del Proyecto: <br> ${proyecto['informacion']['nombre']} ${
                    proyecto['informacion']['apellido_paterno']
                  } ${proyecto['informacion']['apellido_materno']}`;
                jefeProyecto.classList.add('cortar_t');
                const fechaInicio = formato(proyecto['informacion']['fecha_inicio']);
                const fechaFin = formato(proyecto['informacion']['fecha_fin']);
                fechaProyecto.innerHTML = `del ${fechaInicio} al ${fechaFin}`;
                infoProyecto.appendChild(tituloProyecto);
                infoProyecto.appendChild(jefeProyecto);
                infoProyecto.appendChild(fechaProyecto);
            }
        }
    };
    xhr.send();

});

function formato(fecha) {
    return fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, "$3/$2/$1");
}
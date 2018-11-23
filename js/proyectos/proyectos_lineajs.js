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
            const contenedorLinks=document.querySelector('div.contenedor-links ul');
            for (const linea of lineas) {
                /** Links **/
                const linkLi=document.createElement('li');
                contenedorLinks.appendChild(linkLi);
                const linkA=document.createElement('a');
                linkA.setAttribute('href',`#${linea['id_linea']}`);
                linkA.classList.add('link');
                linkA.innerHTML=linea['nombre_linea'];
                linkLi.appendChild(linkA);
                
                const tituloProyecto=document.createElement('h2');
                tituloProyecto.setAttribute('id', linea['id_linea']);
                tituloProyecto.innerHTML=linea['nombre_linea'];
                contenedor.appendChild(tituloProyecto)
                /**
                 * Proyectos
                 */
                
            }
            for(const proyecto of proyectos) {
                const contenedorProy = document.querySelector('div.proyectos');
                const contenedorInfo=document.createElement('div');
                contenedorInfo.classList.add('col-md-4');
                contenedorProy.appendChild(contenedorInfo);
                const imgProyecto=document.createElement('img');
                // imgProyecto.setAttribute('src', i['link_imagen']);
                imgProyecto.setAttribute('id',i['id_proyecto']);
                contenedorInfo.appendChild(imgProyecto);

            }
        }
    };
    xhr.send();

});
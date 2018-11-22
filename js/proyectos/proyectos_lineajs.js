$(function () {
    "use strict";
    const xhr = new XMLHttpRequest();

    xhr.open('POST', "includes/funciones/proyectos_lineabd.php", true);
    var id_linea=0;
    var datos=new FormData();
    datos.append('cargar', 'lineas');
    xhr.onload = function () {
        console.log(xhr.responseText);
        const informacion = JSON.parse(xhr.responseText);
        if (this.status === 200) {
            // const contenedor = document.querySelector('div.proyectos_linea ul');
            // for (const info of informacion) {
            //     const liLista = document.createElement('li');
            //     const item = document.createElement('a');
            //     item.setAttribute('href', `#${info.id_linea}`);
            //     id_linea=info.id_linea;
            //     item.classList.add('link');
            //     item.innerHTML = info.nombre_linea;
            //     liLista.appendChild(item);
            //     contenedor.appendChild(liLista);

            //     const contenedorLinea = document.querySelector('div.linea_proyecto');
            //     const tituloLinea = document.createElement('h2');
            //     tituloLinea.setAttribute('id', info.id_linea);
            //     tituloLinea.innerHTML = info.nombre_linea;
            //     contenedorLinea.appendChild(tituloLinea);
            }
        }
    };
    xhr.send(datos);

    const xhr2=new XMLHttpRequest();
    xhr2.open('POST', "includes/funciones/proyectos_lineabd.php", true);
    
    var proyectos=new FormData();
    proyectos.append('cargar', 'proyectos');
    xhr2.onload = function () {
        console.log(xhr2.responseText);
        const informacion = JSON.parse(xhr2.responseText);
        if (this.status === 200) {
            // const contenedor = document.querySelector('div div.proyectos');
            // for (const info of informacion) {
            //     const tituloProyecto=document.createElement('h2');
            //     tituloProyecto.innerHTML=info.titulo_proyecto;
            //     contenedor.appendChild(tituloProyecto);
            // }
        }
    };
    xhr2.send(proyectos);
});
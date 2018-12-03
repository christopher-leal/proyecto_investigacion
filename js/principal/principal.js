phpPath = "php/principal.php";

inicializacion();

//funcion inicializacion de la ventana pricipal
function inicializacion() {
    cargar_carousel();
    cargar_img_proyecto();
    cargar_foto_investigador();
    cargar_img_congreso();
}

//funcion que carga aleatoriamente una foto del investigador para la seccion
//investigador de la ventana principal
function cargar_foto_investigador() {
    $.ajax({
        method: "POST",
        url: phpPath,
        data: { funcion: "consulta_fotos_investigadores" },
        dataType: "json"
    }).done(function (jsonObjet) {
        if (jsonObjet.length > 0) {
            img_investigador = jsonObjet[Math.floor(Math.random() * jsonObjet.length)].url_foto;
            $("#img_investigador").attr("src", img_investigador);
        }
    }).fail(function () {
        console.log("Error");
    });
}

//funcion que carga aleatoriamente una imagen de algun congreso para la seccion
//investigador de la ventana principal
function cargar_img_congreso() {
    $.ajax({
        method: "POST",
        url: phpPath,
        data: { funcion: "consulta_imagenes_congresos" },
        dataType: "json"
    }).done(function (jsonObjet) {
        if (jsonObjet.length > 0) {
            img_congreo = jsonObjet[Math.floor(Math.random() * jsonObjet.length)].link_imagen;
            $("#img_congreso").attr("src", img_congreo);
        }
    }).fail(function () {
        console.log("Error");
    });
}

//funcion que carga aleatoriamente una imagen de algun peroyecto para la seccion
//investigador de la ventana principal
function cargar_img_proyecto() {
    $.ajax({
        method: "POST",
        url: phpPath,
        data: { funcion: "consulta_imagenes_proyecto" },
        dataType: "json"
    }).done(function (jsonObjet) {
        if (jsonObjet.length > 0) {
            img_proyecto = jsonObjet[Math.floor(Math.random() * jsonObjet.length)].link_imagen;
            $("#img_proyecto").attr("src", img_proyecto);
        }
    }).fail(function () {
        console.log("Error");
    });
}

//Cargar 3 proyectos y 2 congresos al carousel que son los mas recientes
function cargar_carousel() {
    $.ajax({
        method: "POST",
        url: phpPath,
        data: { funcion: "consulta_proyectos_recientes" },
        dataType: "json"
    }).done(function (jsonObjet) {
        // console.log(jsonObjet);
        if (jsonObjet.length > 0) {
            $("#contenido_carrousel_1").empty();
            $("#contenido_carrousel_3").empty();
            $("#contenido_carrousel_5").empty();
            $("#contenido_carrousel_1").append("<h5 class='bor_texto'>Proyecto: "+jsonObjet[0].titulo_proyecto+"</h5><h4 class='bor_texto'>Lider: "+jsonObjet[0].nombre_completo+"</h4><p class='bor_texto'>"+jsonObjet[0].resumen+"</p>");
            $("#contenido_carrousel_3").append("<h5 class='bor_texto'>Proyecto: "+jsonObjet[1].titulo_proyecto+"</h5><h4 class='bor_texto'>Lider: "+jsonObjet[1].nombre_completo+"</h4><p class='bor_texto'>"+jsonObjet[1].resumen+"</p>");
            $("#contenido_carrousel_5").append("<h5 class='bor_texto'>Proyecto: "+jsonObjet[2].titulo_proyecto+"</h5><h4 class='bor_texto'>Lider: "+jsonObjet[2].nombre_completo+"</h4><p class='bor_texto'>"+jsonObjet[2].resumen+"</p>");
            $("#img_carrousel_1").attr("src", jsonObjet[0].link_imagen);
            $("#img_carrousel_3").attr("src", jsonObjet[1].link_imagen);
            $("#img_carrousel_5").attr("src", jsonObjet[2].link_imagen);
        }
    }).fail(function () {
        console.log("Error");
    });
    $.ajax({
        method: "POST",
        url: phpPath,
        data: { funcion: "consulta_congresos_recientes" },
        dataType: "json"
    }).done(function (jsonObjet) {
        // console.log(jsonObjet);
        if (jsonObjet.length > 0) {
            $("#contenido_carrousel_2").empty();
            $("#contenido_carrousel_4").empty();
            $("#contenido_carrousel_2").append("<h5 class='bor_texto'>Congreso: "+jsonObjet[0].nombre_evento+"</h5><p class='bor_texto'>"+jsonObjet[0].descripcion+"</p>");
            $("#contenido_carrousel_4").append("<h5 class='bor_texto'>Congreso: "+jsonObjet[1].nombre_evento+"</h5><p class='bor_texto'>"+jsonObjet[1].descripcion+"</p>");
            $("#img_carrousel_2").attr("src", jsonObjet[0].link_imagen);
            $("#img_carrousel_4").attr("src", jsonObjet[1].link_imagen);
        }
    }).fail(function () {
        console.log("Error");
    });
}

//evento para motrar sidevar
$("#btn_menu_principal").click(function (e) {
    $("#wrapper").toggleClass("toggled");
    //$("#btn_menu_principal").css('display','none');
});

//evento para ocultar el sidenav dentro del sidenav
$("#menu_ocultar").click(function (e) {
    $("#wrapper").toggleClass("toggled");
    //$("#btn_menu_principal").css('display','block');
});
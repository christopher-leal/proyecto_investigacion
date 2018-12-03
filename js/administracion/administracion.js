phpPath = "../php/administracion.php";
var elemento = "";
var accion = "";

var proyectos_lista;
var colaboradores_lista;
var invesstigadores_lista;
var linea_lista;
var publicaciones_lista;
var congresos_lista;
var anuncios_lista;

inicializacion();

//constructor de la pagina
function inicializacion() {
    cargar_proyectos("", "", "", 1);
    cargar_componentes();
    cargar_investigadores("", "", 1);
    cargar_publicaciones("", "", 1);
    cargar_congresos("", "");
    cargar_anuncios();
}

//Funcion que selecciona un id y la accion realiza
function seleccion(opcion, id) {
    accion = opcion;
    elemento = id;
    switch (opcion) {
        case "edt_anun":
            $("#titulo_registro_anuncio").text("Editar anuncio");
            anuncios_lista.forEach(element => {
                if (element["id_anuncio"] == id) {
                    $("#in_cantidad_alumno").val(element["Cantidad_alumnos"]);
                    $("#in_semestre_alumno").val(element["Semestre"]);
                    $("#select_proyecto_anuncio").val(element["id_proyecto"]);
                    $("#txt_perfil_anuncio").val(element["Perfil"]);
                    $("#in_recompensa_alumno").val(element["Recompensa"]);
                }
            });
            break;
    }
    //console.log(accion, elemento);
}

//Evento de confirmacion de accion seleccionada 
$("#btn_si").click(function (evt) {
    $("#btn_cerrar").click();
    realizar_accion();
});

//Funcion que actualiza o elimina el proyecto, investigador, publicacion, congreso con id seleccionado en el metodo seleccion()
function realizar_accion() {
    switch (accion) {
        case "elm_proy":
            $.ajax({
                method: "POST",
                url: phpPath,
                data: { funcion: "eliminar_proyectos", id_proyecto: elemento, status: (($('#check_proyectos').val() == '1') ? "0" : "1") }
            }).done(function (resultado) {
                if (resultado == "Exito") alert("Accion realizada exitosamente");
                recargar_proyectos();
            }).fail(function () {
                console.log("Error");
            });
            break;
        case "edt_proy":
            break;
        case "elm_inv":
            $.ajax({
                method: "POST",
                url: phpPath,
                data: { funcion: "eliminar_investigador", id_investigador: elemento, status: (($('#check_investigador').val() == '1') ? "0" : "1") }
            }).done(function (resultado) {
                if (resultado == "Exito") alert("Accion realizada exitosamente");
                recargar_investigadores();
            }).fail(function () {
                console.log("Error");
            });
            break;
        case "edt_inv":
            break;
        case "elm_publ":
            $.ajax({
                method: "POST",
                url: phpPath,
                data: { funcion: "eliminar_publicacion", id_publicacion: elemento, status: (($('#check_publicacion').val() == '1') ? "0" : "1") }
            }).done(function (resultado) {
                if (resultado == "Exito") alert("Accion realizada exitosamente");
                recargar_publicaciones();
            }).fail(function () {
                console.log("Error");
            });
            break;
        case "edt_publ":
            break;
        case "elm_cong":
            $.ajax({
                method: "POST",
                url: phpPath,
                data: { funcion: "eliminar_congreso", id_congreso: elemento }
            }).done(function (resultado) {
                if (resultado == "Exito") alert("Accion realizada exitosamente");
                recargar_congresos();
            }).fail(function () {
                console.log("Error");
            });
            break;
        case "edt_cong":
            break;
        case "elm_anun":
            console.log('eliminado');
            $.ajax({
                method: "POST",
                url: phpPath,
                data: { funcion: "eliminar_anuncio", id_anuncio: elemento }
            }).done(function (resultado) {
                if (resultado == "Exito") alert("Accion realizada exitosamente");
                cargar_anuncios();
            }).fail(function () {
                console.log("Error");
            });
            break;
        case "edt_anun":
            $.ajax({
                method: "POST",
                url: phpPath,
                data: {
                    funcion: "editar_anuncio",
                    id_anuncio: elemento,
                    cantidad: $("#in_cantidad_alumno").val(),
                    semestre: $("#in_semestre_alumno").val(),
                    id_proyecto: $("#select_proyecto_anuncio option:selected").val(),
                    perfil: $("#txt_perfil_anuncio").val(),
                    recompensa: $("#in_recompensa_alumno option:selected").text()
                }
            }).done(function (resultado) {
                console.log(resultado);
                if (resultado == "Exito") alert("Accion realizada exitosamente");
                cargar_anuncios();
            }).fail(function () {
                console.log("Error");
            });
            $("#btn_cerrar_registro_anuncio").click();
            break;
            case "reg_anun":
            $.ajax({
                method: "POST",
                url: phpPath,
                data: {
                    funcion: "registrar_anuncio",
                    cantidad: $("#in_cantidad_alumno").val(),
                    semestre: $("#in_semestre_alumno").val(),
                    id_proyecto: $("#select_proyecto_anuncio option:selected").val(),
                    perfil: $("#txt_perfil_anuncio").val(),
                    recompensa: $("#in_recompensa_alumno option:selected").text()
                }
            }).done(function (resultado) {
                console.log(resultado);
                if (resultado == "Exito") alert("Accion realizada exitosamente");
                cargar_anuncios();
            }).fail(function () {
                console.log("Error");
            });
            $("#btn_cerrar_registro_anuncio").click();
            break;
    }
}

//funcion que carga los proyetos como parametros recibe los filtros de la buqueda
function cargar_proyectos(palabra_clave_proyecto, id_investigador, id_linea_investigacion_proyecto, proyecto_activo) {
    $.ajax({
        method: "POST",
        url: phpPath,
        data: { funcion: "consulta_proyectos_adm", palabra_clave: palabra_clave_proyecto, id_inv: id_investigador, id_linea_investigacion: id_linea_investigacion_proyecto, activo: proyecto_activo },
        dataType: "json"
    }).done(function (jsonObjet) {
        proyectos_lista = jsonObjet;
        //console.log(jsonObjet);
        var btn_color;
        var btn_texto;
        if (proyecto_activo == 1) {
            btn_color = "btn btn-outline-danger";
            $("#btn_si").attr("class", "btn btn-lg btn-outline-danger")
            btn_texto = "Eliminar";
        } else {
            btn_color = "btn btn-outline-info";
            $("#btn_si").attr("class", "btn btn-lg btn-outline-info")
            btn_texto = "Activar";
        }
        $("#contenedor_proyectos").empty();
        $("#select_proyecto_anuncio").empty();
        jsonObjet.forEach(element => {
            $("#select_proyecto_anuncio").append("<option value=" + element["id_proyecto"] + ">" + element["titulo_proyecto"] + "</option>");
            $.ajax({
                method: "POST",
                url: phpPath,
                data: { funcion: "consulta_lista_colaboradores", id_proyecto: element["id_proyecto"] },
                dataType: "json"
            }).done(function (jsonObjet2) {
                cad = "<div class='card col-lg-4 col-md-6 col-sm-12'><img class='card-img-top' src='../" + element["link_imagen"] + "' alt='Card image cap'><div class='card-body'><h5 class='card-title cortar_t'>" + element["titulo_proyecto"] + "</h5><p>Lider: " + element["nombre_completo"] + "</p><p>Inicio: " + element["fecha_inicio"] + " Fin: " + element["fecha_fin"] + "</p><p>Linea: " + element["nombre_linea"] + "</p><p>Financiado: " + ((element["financiamiento"] == '1') ? "Si" : "No") + "</p><p class='card-text cortar'>Colaboradores<br>"
                jsonObjet2.forEach(element2 => {
                    cad += element2["nombre"] + "<br>";
                });
                cad += "</p><p class='card-text cortar'>" + element["resumen"] + "</p></div><div class='card-footer text-right blanco'><button class='btn btn-outline-success' type='button' data-toggle='modal' href='#registrar_proyecto' onclick='seleccion(\"edt_proy\"," + element["id_proyecto"] + ");'>Editar</button><button href='#confirmacion' class='" + btn_color + " mx-sm-3' type='button' data-toggle='modal' onclick='seleccion(\"elm_proy\"," + element["id_proyecto"] + ");'>" + btn_texto + "</button></div></div>"
                $("#contenedor_proyectos").append(cad);

            }).fail(function () {
                console.log("Error");
            });
        });
    }).fail(function () {
        console.log("Error");
    });
}

//funcion que carga los invetigadores como parametros recibe los filtros de la busqueda
function cargar_investigadores(palabra_clave_invetigador, id_linea_investigacion_ivestigador, investigador_activo) {
    $.ajax({
        method: "POST",
        url: phpPath,
        data: { funcion: "consulta_investigadores_adm", palabra_clave: palabra_clave_invetigador, id_linea_investigacion: id_linea_investigacion_ivestigador, activo: investigador_activo },
        dataType: "json"
    }).done(function (jsonObjet) {
        invesstigadores_lista = jsonObjet;
        //console.log(jsonObjet);
        var btn_color;
        var btn_texto;
        if (investigador_activo == 1) {
            btn_color = "btn btn-outline-danger";
            $("#btn_si").attr("class", "btn btn-lg btn-outline-danger")
            btn_texto = "Eliminar";
        } else {
            btn_color = "btn btn-outline-info";
            $("#btn_si").attr("class", "btn btn-lg btn-outline-info")
            btn_texto = "Activar";
        }
        $("#contenedor_investigadores").empty();
        var cad;
        jsonObjet.forEach(element => {
            $.ajax({
                method: "POST",
                url: phpPath,
                data: { funcion: "consultar_lineas_investigador", id_investigador: element["id_investigador"] },
                dataType: "json"
            }).done(function (jsonObjet2) {
                cad = "<div class='card col-lg-4 col-md-6 col-sm-12'><img class='card-img-top' src='../" + element["url_foto"] + "' alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + element["nivel_estudios"] + " " + element["nombre"] + " " + element["apellido_paterno"] + " " + element["apellido_materno"] + " " + "</h5><p>" + element["correo"] + "</p><p>" + element["ubicacion"] + "</p><p class='cortar'>Linea(s):<br>";
                jsonObjet2.forEach(element2 => {
                    cad += element2["nombre_linea"] + "<br>";
                });
                cad += "</p></div><div class='card-footer text-right blanco'><button href='#registrar_investigador' class='btn btn-outline-success' type='button' data-toggle='modal' onclick='seleccion(\"edt_inv\"," + element["id_investigador"] + ");'>Editar</button><button href='#confirmacion' class='" + btn_color + " mx-sm-3' type='button' data-toggle='modal' onclick='seleccion(\"elm_inv\"," + element["id_investigador"] + ");'>" + btn_texto + "</button></div></div>";
                $("#contenedor_investigadores").append(cad);
            }).fail(function () {
                console.log("Error");
            });
            //cad+="</div><div class='card-footer text-right blanco'><button href='#' class='btn btn-outline-success' type='button' data-toggle='modal' onclick='seleccion(\"edt_inv\"," + element["id_investigador"] + ");'>Editar</button><button href='#confirmacion' class='" + btn_color + " mx-sm-3' type='button' data-toggle='modal' onclick='seleccion(\"elm_inv\"," + element["id_investigador"] + ");'>" + btn_texto + "</button></div></div>";
        });
    }).fail(function () {
        console.log("Error");
    });
}

//funcion que carga las piblicaciones como parametros recibe los filtros de la busqueda
function cargar_publicaciones(palabra_clave_publicacion, id_linea_investigacion_publicacion, publicacion_activa) {
    $.ajax({
        method: "POST",
        url: phpPath,
        data: { funcion: "consulta_publicaciones_adm", palabra_clave: palabra_clave_publicacion, id_linea_investigacion: id_linea_investigacion_publicacion, activo: publicacion_activa },
        dataType: "json"
    }).done(function (jsonObjet) {
        console.log(jsonObjet);
        var btn_color;
        var btn_texto;
        if (publicacion_activa == 1) {
            btn_color = "btn btn-outline-danger";
            $("#btn_si").attr("class", "btn btn-lg btn-outline-danger")
            btn_texto = "Eliminar";
        } else {
            btn_color = "btn btn-outline-info";
            $("#btn_si").attr("class", "btn btn-lg btn-outline-info")
            btn_texto = "Activar";
        }
        $("#contenedor_publicaciones").empty();
        jsonObjet.forEach(element => {
            $("#contenedor_publicaciones").append("<div class='card col-lg-4 col-md-6 col-sm-12'><div class='card-body'><h5 class='card-title'>" + element["titulo_publicacion"] + "</h5><p>" + element["fecha_publicacion"] + "</p><p>" + element["foro_publicacion"] + "</p><a class='btn btn-link cortar_t' href='" + element["link_publicacion"] + "'>" + element["link_publicacion"] + "</a><p>" + element["nombre_linea"] + "</p></div><div class='card-footer text-right blanco'><button href='#registrar_publicacion' class='btn btn-outline-success' type='button' data-toggle='modal' onclick='seleccion(\"edt_publ\"," + element["id_publicaciones"] + ");'>Editar</button><button href='#confirmacion' class='" + btn_color + " mx-sm-3' type='button' data-toggle='modal' onclick='seleccion(\"elm_publ\"," + element["id_publicaciones"] + ");'>" + btn_texto + "</button></div></div>");
        });
    }).fail(function () {
        console.log("Error");
    });
}

//funcion que carga los congresos como parametros recibe los filtros de la busqueda
function cargar_congresos(palabra_clave_congreso, id_linea_investigacion_congreso) {
    $.ajax({
        method: "POST",
        url: phpPath,
        data: { funcion: "consulta_congresos_adm", palabra_clave: palabra_clave_congreso, id_linea_investigacion: id_linea_investigacion_congreso },
        dataType: "json"
    }).done(function (jsonObjet) {
        congresos_lista = jsonObjet;
        var btn_color;
        var btn_texto;
        btn_color = "btn btn-outline-danger";
        $("#btn_si").attr("class", "btn btn-lg btn-outline-danger")
        btn_texto = "Eliminar";
        $("#contenedor_congresos").empty();
        jsonObjet.forEach(element => {
            $("#contenedor_congresos").append("<div class='card col-lg-4 col-md-6 col-sm-12'><img class='card-img-top' src='" + element["link_imagen"] + "' alt='Card image cap'><div class='card-body'><h5 class='card-title'>" + element["nombre_evento"] + "</h5>" + ((element["link_externo"] != null) ? ("<a class='btn btn-link cortar_t' href='" + element["link_externo"] + "''>" + element["link_externo"] + "</a>") : "") + "<p>" + element["nombre_linea"] + "</p></div><div class='card-footer text-right blanco'><button href='#registrar_congreso' class='btn btn-outline-success' type='button' data-toggle='modal' onclick='seleccion(\"edt_publ\"," + element["id_evento"] + ");'>Editar</button><button href='#confirmacion' class='" + btn_color + " mx-sm-3' type='button' data-toggle='modal' onclick='seleccion(\"elm_cong\"," + element["id_evento"] + ");'>" + btn_texto + "</button></div></div>");
        });
    }).fail(function () {
        console.log("Error");
    });
}

//funcion que carga los anuncios
function cargar_anuncios() {
    $.ajax({
        method: "POST",
        url: phpPath,
        data: { funcion: "consulta_anuncios_adm" },
        dataType: "json"
    }).done(function (jsonObjet) {
        anuncios_lista = jsonObjet;
        console.log(jsonObjet);
        var btn_color;
        var btn_texto;
        btn_color = "btn btn-outline-danger";
        $("#btn_si").attr("class", "btn btn-lg btn-outline-danger")
        btn_texto = "Eliminar";
        $("#contenedor_anuncios").empty();
        jsonObjet.forEach(element => {
            $("#contenedor_anuncios").append("<div class='card col-lg-4 col-md-6 col-sm-12'><div class='card-body'><h5 class='card-title cortar_t'>" + element["titulo_proyecto"] + "</h5><p>Cantidad alumnos: " + element["Cantidad_alumnos"] + "</p><p>Semestre " + element["Semestre"] + "</p><p>Recompensa: " + element["Recompensa"] + "</p><p class='cortar'>Perfil: <br>" + element["Perfil"] + "</p> </div><div class='card-footer text-right blanco'><button href='#registrar_anuncio' class='btn btn-outline-success' type='button' data-toggle='modal' onclick='seleccion(\"edt_anun\"," + element["id_anuncio"] + ");'>Editar</button><button href='#confirmacion' class='" + btn_color + " mx-sm-3' type='button' data-toggle='modal' onclick='seleccion(\"elm_anun\"," + element["id_anuncio"] + ");'>" + btn_texto + "</button></div></div>");
        });
    }).fail(function () {
        console.log("Error");
    });
}

$("#btn_guardar_anuncio").click(function (evt) {
    realizar_accion();
});


//funcion para inicializar los checkbox y cargar las las listas de los selects
function cargar_componentes() {
    $("#check_investigador").prop("checked", false);
    $("#check_proyectos").prop("checked", false);
    $("#check_publicacion").prop("checked", false);
    $("#in_palabra_proyecto").val("");
    $("#in_nombre_investigador").val("");
    $("#in_palabra_publicacion").val("");

    $.ajax({
        method: "POST",
        url: phpPath,
        data: { funcion: "consulta_lista_usuarios" },
        dataType: "json"
    }).done(function (jsonObjet) {
        $("#select_investigador_proyecto").empty();
        $("#select_investigador_proyecto").append("<option selected value=''>Investigador</option>");
        jsonObjet.forEach(element => {
            $("#select_investigador_proyecto").append("<option value=" + element["id_investigador"] + ">" + element["nombre"] + "</option>");
        });
    }).fail(function () {
        console.log("Error");
    });

    $.ajax({
        method: "POST",
        url: phpPath,
        data: { funcion: "consulta_lista_lineas" },
        dataType: "json"
    }).done(function (jsonObjet) {
        $("#select_linea_proyecto").empty();
        $("#select_linea_investigador").empty();
        $("#select_linea_congreso").empty();
        $("#select_linea_publicacion").empty();
        $("#select_linea_proyecto").append("<option value='' selected>Linea de investigacion</option>");
        $("#select_linea_investigador").append("<option value='' selected>Linea de investigacion</option>");
        $("#select_linea_congreso").append("<option value='' selected>Linea de investigacion</option>");
        $("#select_linea_publicacion").append("<option value='' selected>Linea de investigacion</option>");
        jsonObjet.forEach(element => {
            $("#select_linea_proyecto").append("<option value=" + element["id_linea"] + ">" + element["nombre_linea"] + "</option>");
            $("#select_linea_investigador").append("<option value=" + element["id_linea"] + ">" + element["nombre_linea"] + "</option>");
            $("#select_linea_congreso").append("<option value=" + element["id_linea"] + ">" + element["nombre_linea"] + "</option>");
            $("#select_linea_publicacion").append("<option value=" + element["id_linea"] + ">" + element["nombre_linea"] + "</option>");
        });
    }).fail(function () {
        console.log("Error");
    });

}

//Eventos de los para actualizar la lista de proyectos
//Evento para cambio de proyectos activos a inactivos o visceversa
$('#check_proyectos').change(function (event) {
    if (this.value == 1) {
        $('#check_proyectos').val("0");
        recargar_proyectos();
    } else {
        $('#check_proyectos').val("1");
        recargar_proyectos();
    }
});
//Evento que atualiza la lista por inveitgador
$('#select_investigador_proyecto').change(function (evt) {
    recargar_proyectos();
});
//Evento que atualiza la lista de proyectos linea de invetigacion
$('#select_linea_proyecto').change(function (evt) {
    recargar_proyectos();
});
//Evento que atualiza la lista por palabra
$('#in_palabra_proyecto').keyup(function (evt) {
    recargar_proyectos();
});
//Evento que restablece los fultros 
$('#tbn_refrescar_filtros_proyectos').click(function (evt) {
    $('#in_palabra_proyecto').val("");
    $("#select_investigador_proyecto").val("");
    $("#select_linea_proyecto").val("");
    recargar_proyectos();
});
//funcion que recarga los proyectos obteniendo los filtros
function recargar_proyectos() {
    cargar_proyectos($('#in_palabra_proyecto').val(), $('#select_investigador_proyecto').val(), $("#select_linea_proyecto").val(), $('#check_proyectos').val());
}

$('#check_financiado').change(function (event) {
    if (this.value == 1) {
        $('#check_financiado').val("0");
        //console.log("No financiado");
    } else {
        $('#check_financiado').val("1");
        //console.log("Financiado")
    }
});

//evento para crear un nuevo proyecto
$("#titulo_modal_proyecto").text("Registrar Proyecto");
//$("#in_titulo_proyecto").val("");
$("#btn_nuevo_proyecto").click(function (evt) {
    $("#select_lider_proyecto_registro").val("");
    $("#in_img_proyecto").val("");
    $("#select_linea_proyecto_registro").val("");
    //$("#in_fecha_inicio").val("");
    //$("#in_fecha_fin").val("");
    $("#check_financiado").prop("checked", false);
    //$("#txt_resumen_proyecto").val("");
    $("#select_colaboradores").val("");
    $("#lista_colaboradores").empty();
    $("#select_publicaciones").val("");
    $("#lista_publicaciones").empty();
    $("#select_congresos").val("");
    $("#lista_congresos").empty();
    elemento = "";
    accion = "reg_proy";


});

$("#btn_nuevo_anuncio").click(function (evt) {
    $("#titulo_registro_anuncio").text("Nuevo anuncio");
    $("#txt_perfil_anuncio").val("");
    $("#in_cantidad_alumno").val("1");
    $("#in_semestre_alumno").val("1");
    $("#select_proyecto_anuncio").val("1");
    $("#in_recompensa_alumno option:selected").val("Credito complementario")
    accion = "reg_anun";
});

/*var com_form=$("#registrar_congreso");
com_form.bind("submit", function(){
    var formdata = new FormData;
    formdata.append("img_congreso", $("input [name=img_congreso]")[0].files[0]);

    $.ajax({
        method: "POST",
        url: com_form.attr("action"),
        type:com_form.attr("method"),
        data: { formdata},
        processData: false,
        contentType:false,
        cache:false, 
        success: function(data){
            alert("subido");
        }
    });

    return false;
});*/

//Eventos para actualizar la lista de investigadores
//Evento para cambio de invetigadores activos a inactivos o visceversa
$('#check_investigador').change(function (event) {
    if (this.value == 1) {
        $('#check_investigador').val("0")
        recargar_investigadores();
    } else {
        $('#check_investigador').val("1")
        recargar_investigadores();
    }
});
//Evento que atualiza la lista de investigadores por linea de invetigacion
$('#select_linea_investigador').change(function (evt) {
    recargar_investigadores();
});
//Evento que atualiza la lista por palabra
$('#in_nombre_investigador').keyup(function (evt) {
    recargar_investigadores();
});
//Evento que restablece los fultros lista investigador
$('#btn_refrescar_filtos_investigador').click(function (evt) {
    $('#select_linea_investigador').val("");
    $("#in_nombre_investigador").val("");
    recargar_investigadores();
});
//funcion que recarga los proyectos obteniendo los filtros
function recargar_investigadores() {
    cargar_investigadores($('#in_nombre_investigador').val(), $("#select_linea_investigador").val(), $('#check_investigador').val());
}
//Evento para crear un nuevo proyecto
$("#btn_nuevo_investigador").click(function (evt) {
    $("#titulo_modal_investigador").text("Registrar Investigador");
    $("#in_titulo_investigador").val("");
    $("#in_nombre_investigador_registro").val("");
    $("#in_apellido_patertno").val("");
    $("#in_apellido_matertno").val("");
    $("#in_foto_investigador").val("");
    $("#in_correo_registro").val("");
    $("#in_edificio_ubicacion").val("");
    $("#select_lineas_investigacion_registro").val("");
    $("#lista_lineas_investigador").empty();
    elemento = "";
    accion = "reg_inv";
});

//Eventos para actualizar la lista de publicacioneas
//Evento para cambio de publicaciones activas a inactivos o visceversa
$('#check_publicacion').change(function (evt) {
    if (this.value == 1) {
        $('#check_publicacion').val("0");
        recargar_publicaciones();
    } else {
        $('#check_publicacion').val("1");
        recargar_publicaciones();
    }
});
//Evento para actualizar lista por linea de investigacion
$("#select_linea_publicacion").change(function (evt) {
    recargar_publicaciones();
});
//Evento para actualizar lista por palabra clave
$("#in_palabra_publicacion").keyup(function (evt) {
    recargar_publicaciones();
});
$('#btn_refrescar_filtos_publicacion').click(function (evt) {
    $('#select_linea_publicacion').val("");
    $("#in_palabra_publicacion").val("");
    recargar_publicaciones();
});
//Funcion para recargar la pagina obteniendo los filtros que se han seleccionado
function recargar_publicaciones() {
    cargar_publicaciones($("#in_palabra_publicacion").val(), $("#select_linea_publicacion").val(), $("#check_publicacion").val());
}
//Evento que quira los filtros de los congresos
$('#btn_refrescar_filtros_congreso').click(function (evt) {
    $('#select_linea_congreso').val("");
    $("#in_palabra_congreso").val("");
    recargar_congresos();
});
$("#in_palabra_congreso").keyup(function (evt) {
    recargar_congresos();
});
$("#select_linea_congreso").change(function (evt) {
    recargar_congresos();
});
// Funcion que carga los congresos con los filtros seleccionados
function recargar_congresos() {
    cargar_congresos($("#in_palabra_congreso").val(), $('#select_linea_congreso').val());
}

//Constructores de los campo date(para la fecha)
$('#fecha_inicio').datepicker({
    format: "dd/mm/yyyy"
});
$('#fecha_fin').datepicker({
    format: "dd/mm/yyyy"
});
$('#in_fecha_publicacion').datepicker({
    format: "dd/mm/yyyy"
});

//Funciones para el campo imput file de las imagenes
$(document).on('change', ':file', function () {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
});
$(document).ready(function () {
    $(':file').on('fileselect', function (event, numFiles, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if (input.length) {
            input.val(log);
        } else {
            if (log) alert(log);
        }

    });
});
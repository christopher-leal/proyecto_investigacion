var datos;
var aux=0;
var puntero=1;
var paginas=1;
var matriz;
//carga el contenido en la BD una vez que se
$( document ).ready(function() {
  buscarDatos();
});

function buscarDatos(){
  $.ajax({
          type: "POST",
          async: true,
          url: "includes/funciones/anuncios_bd.php",
          timeout: 12000,
          dataType: "json",
          success: function(response)
          {

            var pags;
            var n = response.length;
            pags = n / 9;
            if(pags<1)paginas=1;
            else if(pags==parseInt(pags)) paginas =pags;
            else if(pags>parseInt(pags))paginas = pags+1;
            //la respuesta se almacena en una variable global
            datos = response;
            //se genera y rellena la matriz con los datos del json
            matriz = new Array(response.length);
            for (var i = 0; i < matriz.length; i++) {
              matriz[i] =  new Array(8);
            }
            var a=0;
            $.each(response,function(key, registro) {
              matriz[a][0]= registro.id_anuncio;
              matriz[a][1]= registro.Cantidad_alumnos;
              matriz[a][2] = registro.Perfil;
              matriz[a][3] = registro.Semestre;
              matriz[a][4] = registro.Recompensa;
              matriz[a][5] = registro.id_proyecto;
              matriz[a][6] = registro.link_imagen;
              matriz[a][7] = registro.titulo_proyecto;
              a++;
            });
            //se envian a cargarDatos para su presentacion en pantalla
            cargarDatos(response,paginas,puntero);
            $("#output").append("<br><br>");

          },
          error: function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown);
            $("#dato").html(errorThrown);
          }
    });
}

function cargarDatos(datos,paginas,puntero){
  //p guardara el valor maximo de elemento en esa pagina ej. puntero=2,p=18
  var p = puntero * 9;
  var c,d;
  if(puntero==1){
    c = 9;
    if(datos.length<9){
      c= datos.length;
    }
  }else{
    //c = 9 - (18-10), c=1
    c = 9-(p-datos.length);
  }
  //limite inferior, x = 18-9 -> x=9
  var x= p-9;
  //limite superior, d = 9 + 1 -> d =10
  d=x+c;
  //se llena un grid con un rango de datos si puntero = 2, se mostrara de 9 -> 10
  for (var i = x; i < d; i++) {
      $("#output").append("<div class='col-md-4' style='display:inline-block;'>"+
      "<div class='imagen-proyecto' onclick='verProyecto("+matriz[i][5]+")'>"+
      "<img src='"+matriz[i][6]+"'>"+
      "<h3>Ver más"+
     "</h3></div>"+"<div class='info-proyecto'><h3>"+
      matriz[i][7]+" requiere alumnos <br><br>Lugares: "+matriz[i][1]+"<br><br>Perfil: "+matriz[i][2]+
      "<br><br>Semestre: "+ matriz[i][3]+" </h3><h3>Recompensa: "+
      matriz[i][4]+"</h3></div></div>");
  }
  $("#output").append("<br><br>");
  //se inserta el html de los botones de paginas
  for (var i = 1; i <= parseInt(paginas); i++) {
    if(i==puntero){
      $("#output").append("<button class='btn paginacion' type='button' style='margin-right:5px;' onclick='cambioPagina("+i+")'>"+i+"</button>");
    }else{
      $("#output").append("<button class='btn' type='button' style='margin-right:5px;' onclick='cambioPagina("+i+")'>"+i+"</button>");
    }

  }
}
function verProyecto(i){
  var url = "http://localhost/proyecto_investigacion/descripcion_proyecto.php?id="+i;
  window.open(url);
}

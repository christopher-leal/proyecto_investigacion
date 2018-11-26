var datos;
var aux=0;
var puntero=1;
var paginas=1;
var matriz;
$( document ).ready(function() {
  buscarDatos();
  buscarLineas();
});

function filtrar(){
  $("#output").empty();
  $.ajax({
    type: "POST",
    async: true,
    url: "filtro-investigador.php",
    timeout: 12000,
    data: $("#form").serialize(),
    dataType: "json",
    success: function(response)
    {
      var pags;
      var n = response.length;
      pags = n / 9;
      if(pags<1)paginas=1;
      else if(pags==parseInt(pags)) paginas =pags;
      else if(pags>parseInt(pags))paginas = pags+1;
      datos = response;
      matriz = new Array(response.length);
      for (var i = 0; i < matriz.length; i++) {
        matriz[i] =  new Array(5);
      }
      var a=0;
      $.each(response,function(key, registro) {
        matriz[a][0]= registro.url_foto;
        matriz[a][1]= registro.nombre;
        matriz[a][2] = registro.apellido_paterno;
        matriz[a][3] = registro.apellido_materno;
        matriz[a][4] = registro.nombre_linea;
        a++;
      });
      cargarDatos(datos,paginas,puntero);
      $("#output").append("<br><br>");
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log(errorThrown);
      $("#dato").html(errorThrown);
    }
  });
}

function reiniciar(){
  $("#output").empty();
  $("#investigador").empty();
  $("#investigador").append("<option value='default'>Linea de investigacion</option>");
  buscarDatos();
  buscarLineas();
}

function buscarLineas(){
  $.ajax({
          type: "POST",
          async: true,
          url: "filtros.php",
          timeout: 12000,
          data: {id:1},
          dataType: "json",
          success: function(response)
          {

            $.each(response,function(key, registro) {
                $("#investigador").append("<option value='"+registro.nombre_linea+"'>"+registro.nombre_linea+"</option>");

            });
          },
          error: function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown);
            $("#dato").html(errorThrown);
          }
    });
}

function buscarDatos(){
  $.ajax({
          type: "POST",
          async: true,
          url: "investigadores.php",
          timeout: 12000,
          dataType: "json",
          success: function(response)
          {
            console.log(response);
            var pags;
            var n = response.length;
            pags = n / 9;
            if(pags<1)paginas=1;
            else if(pags==parseInt(pags)) paginas =pags;
            else if(pags>parseInt(pags))paginas = pags+1;
            datos = response;
            matriz = new Array(response.length);
            for (var i = 0; i < matriz.length; i++) {
              matriz[i] =  new Array(5);
            }
            var a=0;
            $.each(response,function(key, registro) {
              matriz[a][0]= registro.url_foto;
              matriz[a][1]= registro.nombre;
              matriz[a][2] = registro.apellido_paterno;
              matriz[a][3] = registro.apellido_materno;
              matriz[a][4] = registro.nombre_linea;
              a++;
            });
            cargarDatos(datos,paginas,puntero);
            $("#output").append("<br><br>");

          },
          error: function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown);
            $("#dato").html(errorThrown);
          }
    });
}
function cambioPagina(i){
  $("#output").empty();
  cargarDatos(datos,paginas,i);
}
function cargarDatos(response,paginas,puntero){
  var p = puntero * 9;
  var c,d;
  if(puntero==1){
    c = 9;
    if(datos.length<9){
      c= datos.length;
    }

  }else{
    c = 9-(p-datos.length);
  }
  var x= p-9;
  d=x+c;
  for (var i = x; i < d; i++) {
      $("#output").append("<div class='col-md-4' style='display:inline-block;'>"+
      "<div class='imagen-proyecto'>"+
      "<img src='"+matriz[i][0]+"'>"+
      "<h3>Ver más"+
     "</h3></div>"+"<div class='info-proyecto'><h3>Investigador:<br>"+
      matriz[i][1]+" "+matriz[i][2]+" "+matriz[i][3]+
      " </h3><h3>Línea de investigación: <br>"+
      matriz[i][4]+"</h3></div></div>");
  }
  $("#output").append("<br><br>");
  for (var i = 1; i <= parseInt(paginas); i++) {
    if(i==puntero){
      $("#output").append("<button class='btn paginacion' type='button' style='margin-right:5px;' onclick='cambioPagina("+i+")'>"+i+"</button>");
    }else{
      $("#output").append("<button class='btn' type='button' style='margin-right:5px;' onclick='cambioPagina("+i+")'>"+i+"</button>");
    }

  }
}

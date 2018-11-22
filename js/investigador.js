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
      $.each(response,function(key, registro) {
        $("#output").append("<div class='col-md-4' style='display:inline-block;'>"+
        "<div class='imagen-proyecto'>"+
        "<a href='#'>"+
        "<img src='"+registro.url_foto+"'></a>"+
        "<h3>Ver más"+
        "</h3></div>"+"<div class='info-proyecto'><h3>Investigador:<br>"
        +registro.nombre+" </h3><h3>Línea de investigación: <br>"
        +registro.nombre_linea+"</h3><h3>Ver más</h3></div></div>");
      });
      $("#output").append("<br><br>");
      for (var i = 1; i <= response.length; i++) {
        $("#output").append("<button class='btn' type='button' style='margin-right:5px;'>"+i+"</button>");
      }
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

            $.each(response,function(key, registro) {
              $("#output").append("<div class='col-md-4' style='display:inline-block;'>"+
              "<div class='imagen-proyecto'>"+
              "<img src='"+registro.url_foto+"'>"+
              "<h3>Ver más"+
              "</h3></div>"+"<div class='info-proyecto'><h3>Investigador:<br>"
              +registro.nombre+" </h3><h3>Línea de investigación: <br>"
              +registro.nombre_linea+"</h3><h3>Ver más</h3></div></div>");
            });
            $("#output").append("<br><br>");
            for (var i = 1; i <= response.length; i++) {
              $("#output").append("<button class='btn' type='button' style='margin-right:5px;'>"+i+"</button>");
            }
          },
          error: function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown);
            $("#dato").html(errorThrown);
          }
    });
}

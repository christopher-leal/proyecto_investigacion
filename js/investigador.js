$( document ).ready(function() {
  buscarDatos();
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
          "<img src='"+registro.url_foto+"'>"+
          "<h3>"+registro.nombre+"</span><br><span>"+registro.nombre_linea+"<span>"+
          "</h3></div></div>");
      });
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
  $("#nombre").empty();
  $("#nombre").append("<option value='default'>Nombre</option>");
  $("#investigador").append("<option value='default'>Linea de investigacion</option>");
  buscarDatos();
}

function buscarDatos(){

  $.ajax({

          type: "POST",
          async: true,
          url: "investigadores.php",
          timeout: 12000,
          //data: $("#form").serialize(),
          dataType: "json",
          success: function(response)
          {

            $.each(response,function(key, registro) {

                $("#output").append("<div class='col-md-4' style='display:inline-block;'>"+
                "<div class='imagen-proyecto'>"+
                "<img src='"+registro.url_foto+"'>"+
                "<h3>"+registro.nombre+"</span><br><span>"+registro.nombre_linea+"<span>"+
                "</h3></div></div>");

                $("#investigador").append("<option value='"+registro.id_linea+"'>"+registro.nombre_linea+"</option>");
                $("#nombre").append("<option value='"+registro.nombre+"'>"+registro.nombre+"</option>");
                //"<div class=' col-md-12'><span>"+
            });
          },
          error: function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown);
            $("#dato").html(errorThrown);
          }
    });
}

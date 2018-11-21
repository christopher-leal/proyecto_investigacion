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

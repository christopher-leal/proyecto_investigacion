$( document ).ready(function() {
  buscarDatos();
});

function buscarDatos(){
  $.ajax({
          type: "POST",
          async: true,
          url: "php/investigadores.php",
          timeout: 12000,
          //data: $("#form").serialize(),
          dataType: "json",
          success: function(response)
          {
            $.each(response,function(key, registro) {
                //$("#dato").append('<p>'+registro.id_investigador+'<p>');
                $("#output").append("<div class='port' style='background-image: url(http://localhost/proyecto_investigacion1/img/"+registro.url_foto+"')'>"+
                "<div class='portfolioDisc'><span>"
                +registro.nombre+"</span><span>"+registro.linea_investigacion+"<span></div></div>")
            });
          },
          error: function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown);
            $("#dato").html(errorThrown);
          }
    });
}
function eliminarInvestigador(e){
  $.ajax({
          type: "POST",
          async: true,
          url: "php/investigadores.php",
          timeout: 12000,
          data:( {id: e}),
          dataType: "json",
          success: function(response)
          {
            alert(response);
            //$("#dato").append('<p>'+response.+'<p>');
          },
          error: function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown);
            $("#dato").html(errorThrown);
          }
    });
}
function insertarInvestigador(){
  $.ajax({
          type: "POST",
          async: true,
          url: "php/investigadores.php",
          timeout: 12000,
          data: $("#form").serialize(),
          dataType: "json",
          success: function(response)
          {
            alert(response);
            //$("#dato").append('<p>'+response.+'<p>');
          },
          error: function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown);
            $("#dato").html(errorThrown);
          }
    });
}

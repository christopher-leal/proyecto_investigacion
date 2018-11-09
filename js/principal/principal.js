
//evento para motrar sidevar
$("#btn_menu_principal").click(function(e) {
    $("#wrapper").toggleClass("toggled");
    //$("#btn_menu_principal").css('display','none');
});

//evento para ocultar el sidenav dentro del sidenav
$("#menu_ocultar").click(function(e) {
    $("#wrapper").toggleClass("toggled");
    //$("#btn_menu_principal").css('display','block');
});
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Departamento de Investigacion</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/all.min.css">
    <link rel="stylesheet" href="css/main.css">


</head>

<body>
    <div id="wrapper">
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <a id="menu_ocultar" href="#"><i class="fas fa-times"></i></a>
                <li class="sidebar-brand">
                    <a class="nav-item nav-link" href="#"><i class="fas fa-home"></i></a>
                </li>
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">¿Quiénes somos?</a>
                </li>
                <li>
                    <a href="#">Oferta educativa</a>
                </li>
                <li>
                    <a href="#">Comunidad Tec</a>
                </li>
                <li>
                    <a href="#">Servicios</a>
                </li>
                <li>
                </li>
            </ul>
        </div>
    </div>
    <!-- /sidebar-wrapper -->

    <!-- Encabezado -->
    <div class="encabezado">
        <img src="img/imagenes tec/logos.png" alt="Nombre del Tec" >
        <img src="img/imagenes tec/letras.png" alt="Nombre del Tec" >
        <img src="img/imagenes tec/escudo.png" alt="Nombre del Tec" >
    </div>
    <!-- /Encabezado -->

    <!-- Navbar -->
    <nav id="menu_nabvar" class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <button id="btn_menu_principal" class="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
            <div class="navbar-nav navegacion">
                <a class="nav-item nav-link" href="#"><i class="fas fa-home"></i></a>
                <a class="nav-item nav-link" href="#">¿Quiénes somos?</a>
                <a class="nav-item nav-link" href="#">Oferta educativa</a>
                <a class="nav-item nav-link" href="#">Comunidad Tec</a>
                <a class="nav-item nav-link" href="#">Servicios</a>
            </div>
        </div>
    </nav>
    <!-- /Navbar-->
        <!-- /Carousel principal -->
        <div id="carouselExampleIndicators" class="carousel slide imagenes-carousel" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <a id="enlace_img1" href="#" onclick=""><img id="img_carrousel_1" class="d-block w-100 img-fluid rounded" src="img/callum-shaw-555357-unsplash.jpg" alt="First slide"></a>
                <div id="contenido_carrousel_1" class="carousel-caption d-none d-md-block">
                    <h5>Texto 1</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur ipsa
                        aspernatur
                        fugit fuga magni numquam iure enim, labore sequi maxime ipsum laborum tenetur nulla fugiat,
                        repellat hic asperiores similique.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 img-fluid rounded" src="img/fondo ciudad.jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                    <h1>Texto 2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur ipsa
                        aspernatur
                        fugit fuga magni numquam iure enim, labore sequi maxime ipsum laborum tenetur nulla fugiat,
                        repellat hic asperiores similique.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 img-fluid rounded" src="img/fondo codigo.jpg" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                    <h1>Texto 3</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur ipsa
                        aspernatur
                        fugit fuga magni numquam iure enim, labore sequi maxime ipsum laborum tenetur nulla fugiat,
                        repellat hic asperiores similique.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img id="img_carrousel_4" class="d-block w-100 img-fluid rounded" src="img/fondo ciudad.jpg" alt="Fourth slide">
                <div id="contenido_carrousel_4" class="carousel-caption d-none d-md-block">
                    <h5>Texto 4</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur ipsa
                        aspernatur
                        fugit fuga magni numquam iure enim, labore sequi maxime ipsum laborum tenetur nulla fugiat,
                        repellat hic asperiores similique.</p>
                </div>
            </div>
            <div  class="carousel-item">
                <img id="img_carrousel_5" class="d-block w-100 img-fluid rounded" src="img/fondo codigo.jpg" alt="Fifth slide">
                <div id="contenido_carrousel_5" class="carousel-caption d-none d-md-block">
                    <h5>Texto 5</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur ipsa
                        aspernatur
                        fugit fuga magni numquam iure enim, labore sequi maxime ipsum laborum tenetur nulla fugiat,
                        repellat hic asperiores similique.</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <!-- /Carrousel principal -->


<?php include 'includes/templates/header.php'; ?>

    <!-- /Carousel principal -->
    <div id="carouselExampleIndicators" class="carousel slide imagenes-carousel" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
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
                <img id="img_carrousel_2" class="d-block w-100 img-fluid rounded" src="img/fondo ciudad.jpg" alt="Second slide">
                <div id="contenido_carrousel_2" class="carousel-caption d-none d-md-block">
                    <h1>Texto 2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur ipsa
                        aspernatur
                        fugit fuga magni numquam iure enim, labore sequi maxime ipsum laborum tenetur nulla fugiat,
                        repellat hic asperiores similique.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img id="img_carrousel_3"class="d-block w-100 img-fluid rounded" src="img/fondo codigo.jpg" alt="Third slide">
                <div id="contenido_carrousel_3" class="carousel-caption d-none d-md-block">
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

    <!-- seccion de eventos proyectos publicaciones e investigadores  -->
    <div class="oficina_investigacion">    
        <div class="container">
            <div class="row">
            <div id="titulo_secundario" class="col-lg-12 ">
            <h1>Oficina de Investigación</h1>
            </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12 ">
                    <h5 class="card-title">Proyectos</h5>
                    <div class="card imagen-proyecto" style="width: 18rem;">
                        <a href=""><img id="img_proyecto" class="card-img-top" src="img\fondo codigo.jpg" alt="Card image cap"></a>
                        <h3>Ver mas...</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <h5 class="card-title ">Investigadores</h5>
                    <div class="card imagen-proyecto" style="width: 18rem;">
                        <a href=""><img id="img_investigador" class="card-img-top " src="img\fondo codigo.jpg" alt="Card image cap"></a>
                        <h3>Ver mas...</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <h5 class="card-title">Congresos</h5>
                    <div class="card imagen-proyecto" style="width: 18rem;">
                        <a href=""><img id="img_congreso" class="card-img-top" src="img\fondo codigo.jpg" alt="Card image cap"></a>
                        <h3>Ver mas...</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <h5 class="card-title">publicaciones</h5>
                    <div class="card imagen-proyecto" style="width: 18rem;">
                        <a href=""><img id="img_publicacion" class="card-img-top" src="https://cdn4.educacion2.com/wp-content/uploads/libros10.jpg" alt="Card image cap"></a>
                        <h3>Ver mas...</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /seccion de eventos proyectos publicaciones e investigadores  -->

    <!-- seccion de lineas de investigacion-->
    <div class="parallax ">
        <div class="row">
            <div  id="img_lineas_inv">
            </div>
        </div>
    </div>
    <div class="container lineas_investigacion">
        <div class="row">
            <div id="titulo_secundario" class="col-lg-12">
            <h1>Lineas de Investigación</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 ">
                <h5 class="card-title">Ingenieria de Software</h5>
                <div class="card imagen-proyecto" style="width: 18rem;">
                    <a href=""><img id="img_proyecto" class="card-img-top" src="img\fondo ciudad.jpg" alt="Card image cap"></a>
                    <h3>Ver mas...</h3>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <h5 class="card-title">Seguridad Informatica</h5>
                <div class="card imagen-proyecto" style="width: 18rem;">
                    <a href=""><img id="img_investigador" class="card-img-top " src="img\fondo ciudad.jpg" alt="Card image cap"></a>
                    <h3>Ver mas...</h3>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <h5 class="card-title">Tecnologias Web</h5>
                <div class="card imagen-proyecto" style="width: 18rem;">
                    <a href="#"><img id="img_congreso" class="card-img-top" src="img\fondo ciudad.jpg" alt="Card image cap"></a>
                    <h3>Ver mas...</h3>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <h5 class="card-title">Educativa</h5>
                <div class="card imagen-proyecto" style="width: 18rem;">
                    <a href="#"><img id="img_publicacion" class="card-img-top" src="img\fondo ciudad.jpg" alt="Card image cap"></a>
                    <h3>Ver mas...</h3>
                </div>
            </div>
        </div>
    </div>
    <!-- /seccion de lineas de investigacion-->

<?php include 'includes/templates/footer.php'; ?>
<script src="js/principal/principal.js"></script>

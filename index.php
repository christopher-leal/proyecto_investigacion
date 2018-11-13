
<?php include 'includes/templates/header.php'; ?>
    <!-- /Carousel principal -->
    <div id="carouselExampleIndicators" class="carousel slide imagenes-carousel" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100 img-fluid rounded" src="img/callum-shaw-555357-unsplash.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
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
                    <h5>Texto 2</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur ipsa
                        aspernatur
                        fugit fuga magni numquam iure enim, labore sequi maxime ipsum laborum tenetur nulla fugiat,
                        repellat hic asperiores similique.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 img-fluid rounded" src="img/fondo codigo.jpg" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Texto 3</h5>
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
    <div class="container">
        <dir class="row">
            <div class="col-lg-6">
                <h2>Eventos</h2>
                <img class="d-block w-100 img-fluid" src="img/wallhaven-165668.jpg">
            </div>
            <div class="col-lg-6">
                <H2>Investigador</H2>
                <img class="d-block w-100 img-fluid" src="img/wallhaven-165668.jpg">
            </div>
        </dir>
        <div class="row">
            <div class="col-lg-6">
                <H2>Congresos</H2>
                <img class="d-block w-100 img-fluid" src="img/markus-spiske-518966-unsplash.jpg">
            </div>
            <div class="col-lg-6">
                <H2>publicaciones</H2>
                <img class="d-block w-100 img-fluid" src="img/markus-spiske-518966-unsplash.jpg">
            </div>
        </div>
    </div>
    <!-- /seccion de eventos proyectos publicaciones e investigadores  -->

    <?php include 'includes/templates/footer.php'; ?>
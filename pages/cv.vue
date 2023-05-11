<template>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>DevFolio Bootstrap Portfolio Template - Index</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="~/assets/images/logo.png" rel="icon">
    <link href="~/assets/images/logo.png" rel="apple-touch-icon">



    <!-- =======================================================
    * Template Name: DevFolio
    * Updated: Mar 10 2023 with Bootstrap v5.2.3
    * Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== -->
  </head>

  <body>

    <!-- ======= Header ======= -->
    <header class="fixed-top headerCv">
      <div class="container d-flex align-items-center justify-content-between">

        <h1 class="logo"><NuxtLink class="nav-link scrollto" to="/"><img src="~/assets/images/logo.png" width="200" height="100" alt=""></NuxtLink></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo"><img src="~/assets/images/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar">
          <ul>
            <li><NuxtLink class="nav-link scrollto" to="/">Acceuil</NuxtLink></li>
            <li><NuxtLink class="nav-link scrollto" to="/#about">À propos de moi</NuxtLink></li>
            <li><NuxtLink class="nav-link scrollto " to="/#work">Projets</NuxtLink></li>
            <li><NuxtLink class="nav-link scrollto" to="/#services">Services</NuxtLink></li>
            <li><a class="nav-link scrollto " href="https://www.linkedin.com/in/axel-coyere/">Linkedin</a></li>
            <li> <NuxtLink class="nav-link scrollto" href="#cv" to="/cv">Curiculum vitae
          </NuxtLink></li>
          <!--   <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li> -->
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->

      </div>
    </header><!-- End Header -->


    <main id="main">
      <br>
      <br>
      <br>
      <br>

      <!-- ======= About Section ======= -->
      <section id="cv" class="about-mf sect-pt4 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div>

                        <div class="about-img">
                          <span class="d-none d-lg-block">
                            <img
                              src="https://media.licdn.com/dms/image/C4E2DAQHZ0z2Mg2oiYQ/profile-treasury-image-shrink_1280_1280/0/1678053243373?e=1684429200&v=beta&t=HC9qRg6kXf8X7qOon21vCbpwkrhMPZUXGE7HmNc8L90"
                              alt="">
                          </span>
                        </div>
                      </div>
                     
                    </div>
                    <div class="row">

                    </div>
                  </div>


                </div>

              </div>

            </div>

          </div>
        </div>
      </section><!-- End About Section -->



    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="copyright-box">
              <div class="credits">
                <!--
                All the links in the footer should remain intact.
                You can delete the links only if you purchased the pro version.
                Licensing information: https://bootstrapmade.com/license/
                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio
              -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer><!-- End  Footer -->

    <div id="preloader"></div>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>


  </body>

  </html>
</template>

<script>
/* import PureCounter from "../vendor/purecounter/purecounter_vanilla.js";
import BootstrapBundle from "../vendor/bootstrap/js/bootstrap.bundle.min.js";
import GLightbox from "../vendor/glightbox/js/glightbox.min.js";
import SwiperBundle from "../assets/vendor/swiper/swiper-bundle.min.js";
import Typed from "../vendor/typed.js/typed.min.js";
import ValidateForm from "../vendor/php-email-form/validate.js";
import MainJS from "../assets/js/main.js"; */

export default {
  name: 'IndexPage',
}
</script>

<style scoped>
/* Importation du fichier bootstrap.min.css */
@import '~/vendor/bootstrap/css/bootstrap.min.css';

/* Importation du fichier bootstrap-icons.css */
@import '~/vendor/bootstrap-icons/bootstrap-icons.css';

/* Importation du fichier glightbox.min.css */
@import '~/vendor/glightbox/css/glightbox.min.css';

/* Importation du fichier swiper-bundle.min.css */
@import '~/vendor/swiper/swiper-bundle.min.css';


@import '~/vendor/devicons/css/devicons.min.css';


@import 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css';</style>


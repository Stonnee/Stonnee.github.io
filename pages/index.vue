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
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-between">

        <h1 class="logo"><a href="index.html"><img src="~/assets/images/logo.png" width="200" height="100" alt=""></a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo"><img src="~/assets/images/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="#hero">Acceuil</a></li>
            <li><a class="nav-link scrollto" href="#about">À propos de moi</a></li>
            <li><a class="nav-link scrollto " href="#work">Projets</a></li>
            <li><a class="nav-link scrollto" href="#services">Services</a></li>
            <li><a class="nav-link scrollto " href="https://www.linkedin.com/in/axel-coyere/">Linkedin</a></li>
            <li> <NuxtLink class="nav-link scrollto" to="/cv">Curiculum vitae
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

    <!-- ======= Hero Section ======= -->
    <div id="hero" class="hero route bg-image">
      <div class="overlay-itro"></div>
      <div class="hero-content display-table">
        <div class="table-cell">
          <div class="container">
            <!--<p class="display-6 color-d">Hello, world!</p>-->
            <h1 class="hero-title mb-4">Axel Coyere</h1>
            <p class="hero-subtitle"><span class="typed" data-typed-items="Designer, Développeur, Freelancer"></span></p>
            <!-- <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> -->
          </div>
        </div>
      </div>
    </div><!-- End Hero Section -->

    <main id="main">

      <!-- ======= About Section ======= -->
      <section id="about" class="about-mf sect-pt4 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-sm-6 col-md-5">

                        <div class="about-img">
                          <span class="d-none d-lg-block">
                            <img class="img-fluid img-profile rounded-circle mx-auto mb-2"
                              src="https://media.discordapp.net/attachments/757916336046211102/1003768760034922597/unknown.png?width=478&height=670"
                              alt="">
                          </span>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-7">
                        <div class="about-info">
                          <p><span class="title-s">Nom: </span> <span>Coyere axel</span></p>
                          <p><span class="title-s">Profile: </span> <span>developer fullstack</span></p>
                          <p><span class="title-s">Email: </span> <span>axel.co@hotmail.fr</span></p>
                          <p><span class="title-s">Phone: </span> <span>0769495193</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="row">

                    </div>
                  </div>



                  <div class="col-md-6">
                    <div class="about pt-4 pt-md-0">
                      <div class="title-box-2">
                        <h5 class="title-left">
                          À propos de moi
                        </h5>
                      </div>
                      <p class="">
                        Je m'appelle Axel Coyere, j'ai 23 ans.

                        Après 4 ans de formation à l'Ecole
                        d'Ingénierie Informatique ETNA Ionis,
                        1 an chez la start-up Kalima
                        et 1 an chez TROOV en collaboration
                        avec les Mairies de Paris,

                        je suis maintenant à la recherche
                        de missions et de projets pour
                        développer mon potentiel et
                        mes compétences.

                        J'aime créer et développer des
                        outils/logiciels fonctionnels
                        à partir de rien.
                      </p>
                      <p class="lead">
                       
                      </p>
                    </div>
                  </div>

                  <section class="resume-section col-12" id="skills">
                    <div class="my-auto">
                      <h2 class="mb-5">COMPÉTENCES</h2>

                      <div class="subheading mb-3">LANGAGES &amp; OUTILS DE PROGRAMMATION </div>
                      <ul class="list-inline list-icons">
                        <li class="list-inline-item">
                          <i class="devicon-vuejs-plain-wordmark"></i>
                        </li>

                        <li class="list-inline-item">
                          <i class="devicon-nuxtjs-plain"></i>
                        </li>

                        <li class="list-inline-item">

                          <i class="devicon-react-original-wordmark"></i>

                        </li>
                        <li class="list-inline-item">

                          <i class="devicon-androidstudio-plain"></i>

                        </li>
                        <li class="list-inline-item">


                          <i class="devicon-angularjs-plain"></i>


                        </li>

                        <li class="list-inline-item">
                          <i class="devicon-mongodb-plain-wordmark"></i>
                        </li>

                        <li class="list-inline-item">
                          <i class="devicon-mysql-plain-wordmark"></i>
                        </li>
                        <li class="list-inline-item">

                          <i class="devicon-nodejs-plain-wordmark"></i>

                        </li>

                        <li class="list-inline-item">
                          <i class="devicon-nginx-original"></i>
                        </li>
                        <br>
                        <li class="list-inline-item">

                          <i class="devicon-javascript-plain"></i>

                        </li>
                        <li class="list-inline-item">
                          <i class="devicon-java-plain-wordmark"></i>
                        </li>

                        <li class="list-inline-item">
                          <i class="devicon-php-plain"></i>
                        </li>
                        <li class="list-inline-item">

                          <i class="devicon-html5-plain-wordmark"></i>

                        </li>
                        <li class="list-inline-item">

                          <i class="devicon-css3-plain-wordmark"></i>

                        </li>
                        <br>



                        <li class="list-inline-item">
                          <i class="devicon-gitlab-plain-wordmark"></i>
                        </li>
                        <li class="list-inline-item">

                          <i class="devicon-jira-plain-wordmark"></i>

                        </li>




                        <li class="list-inline-item">
                          <i class="devicons devicons-bootstrap"></i>
                        </li>


                        <li class="list-inline-item">
                          <i class="devicons devicons-npm"></i>
                        </li>








                      </ul>

                      <div class="subheading mb-3">Workflow</div>
                      <ul class="fa-ul mb-0">
                        <li>
                          <i class="fa-li fa fa-check"></i>
                          Mobile-First, Responsive Design
                        </li>
                        <li>
                          <i class="fa-li fa fa-check"></i>
                          Cross Browser Testing &amp; Debugging
                        </li>
                        <li>
                          <i class="fa-li fa fa-check"></i>
                          Développement Agile &amp; Scrum
                        </li>
                      </ul>
                    </div>
                  </section>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section><!-- End About Section -->

      <!-- ======= Portfolio Section ======= -->
      <section id="work" class="portfolio-mf sect-pt4 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box text-center">
                <h3 class="title-a">
                  Portfolio
                </h3>
                <div class="line-mf"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="work-box">
                <a href="~/assets/images/work-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                  <div class="work-img">
                    <img
                      src="~/assets/images/ezgif.com-crop.gif"
                      alt="" class="img-fluid">
                  </div>
                </a>
                <div class="work-content">
                  <div class="row">
                    <div class="col-sm-8">
                      <h2 class="w-title">Lorem impsum dolor</h2>
                      <div class="w-more">
                        <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="w-like">
                        <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="work-box">
                <a href="~/assets/images/work-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                  <div class="work-img">
                    <img
                      src="~/assets/images/ezgif.com-crop (1).gif"
                      alt="" class="img-fluid">
                  </div>
                </a>
                <div class="work-content">
                  <div class="row">
                    <div class="col-sm-8">
                      <h2 class="w-title">Républic française</h2>
                      outils de prise de rendez-vous dans les mairie et ambassades
                      <div class="w-more">
                        <span class="w-ctegory">Web Design</span> / <span class="w-date">12 Jav. 2023</span>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="w-like">
                        <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section><!-- End Portfolio Section -->

      <!-- ======= Services Section ======= -->
      <section id="services" class="services-mf pt-5 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box text-center">
                <h3 class="title-a">
                  Services
                </h3>
                <div class="line-mf"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="service-box">
                <div class="service-ico">
                  <span class="ico-circle"><i class="bi bi-briefcase"></i></span>
                </div>
                <div class="service-content">
                  <h2 class="s-title">Web Design</h2>
                
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-box">
                <div class="service-ico">
                  <span class="ico-circle"><i class="bi bi-card-checklist"></i></span>
                </div>
                <div class="service-content">
                  <h2 class="s-title">Web Development</h2>
                
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-box">
                <div class="service-ico">
                  <span class="ico-circle"><i class="bi bi-bar-chart"></i></span>
                </div>
                <div class="service-content">
                  <h2 class="s-title">Application mobile</h2>
                
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-box">
                <div class="service-ico">
                  <span class="ico-circle"><i class="bi bi-binoculars"></i></span>
                </div>
                <div class="service-content">
                  <h2 class="s-title">Designe Responsive</h2>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-box">
                <div class="service-ico">
                  <span class="ico-circle"><i class="bi bi-brightness-high"></i></span>
                </div>
                <div class="service-content">
                  <h2 class="s-title">Graphic Design</h2>
       
                </div>
              </div>
            </div>
          </div>
        </div>
      </section><!-- End Services Section -->


      <!-- ======= Portfolio Section 2 ======= -->
      <section id="work" class="portfolio-mf sect-pt4 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box text-center">
                <h3 class="title-a">
                  Portfolio
                </h3>
                <div class="line-mf"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="work-box">
                <a href="~/assets/images/work-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                  <div class="work-img">
                    <img
                      src="~/assets/images/ezgif.com-crop (2).gif"
                      alt="" class="img-fluid">
                  </div>
                </a>
                <div class="work-content">
                  <div class="row">
                    <div class="col-sm-8">
                      <h2 class="w-title">Lorem impsum dolor</h2>
                      <div class="w-more">
                        <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="w-like">
                        <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="work-box">
                <a href="~/assets/images/work-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox">
                  <div class="work-img">
                    <img
                      src="~/assets/images/ezgif.com-crop (3).gif"
                      alt="" class="img-fluid">
                  </div>
                </a>
                <div class="work-content">
                  <div class="row">
                    <div class="col-sm-8">
                      <h2 class="w-title">Républic française</h2>
                      outils de prise de rendez-vous dans les mairie et ambassades
                      <div class="w-more">
                        <span class="w-ctegory">Web Design</span> / <span class="w-date">12 Jav. 2023</span>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="w-like">
                        <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section><!-- End Portfolio Section 2 -->

      <!-- ======= Counter Section ======= -->
      <div class="section-counter paralax-mf bg-image" style="background-image: url(~/assets/images/counters-bg.jpg)">
        <div class="overlay-mf"></div>
        <div class="container position-relative">
          <div class="row">
            <div class="col-sm-3 col-lg-3">
              <div class="counter-box counter-box pt-4 pt-md-0">
                <div class="counter-ico">
                  <span class="ico-circle"><i class="bi bi-check"></i></span>
                </div>
                <div class="counter-num">
                  <p data-purecounter-start="0" data-purecounter-end="450" data-purecounter-duration="1"
                    class="counter purecounter"></p>
                  <span class="counter-text">WORKS COMPLETED</span>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3">
              <div class="counter-box pt-4 pt-md-0">
                <div class="counter-ico">
                  <span class="ico-circle"><i class="bi bi-journal-richtext"></i></span>
                </div>
                <div class="counter-num">
                  <p data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1"
                    class="counter purecounter"></p>
                  <span class="counter-text">YEARS OF EXPERIENCE</span>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3">
              <div class="counter-box pt-4 pt-md-0">
                <div class="counter-ico">
                  <span class="ico-circle"><i class="bi bi-people"></i></span>
                </div>
                <div class="counter-num">
                  <p data-purecounter-start="0" data-purecounter-end="550" data-purecounter-duration="1"
                    class="counter purecounter"></p>
                  <span class="counter-text">TOTAL CLIENTS</span>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3">
              <div class="counter-box pt-4 pt-md-0">
                <div class="counter-ico">
                  <span class="ico-circle"><i class="bi bi-award"></i></span>
                </div>
                <div class="counter-num">
                  <p data-purecounter-start="0" data-purecounter-end="48" data-purecounter-duration="1"
                    class="counter purecounter"></p>
                  <span class="counter-text">AWARD WON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!-- End Counter Section -->

      <!-- ======= Contact Section ======= -->
<!--       <section id="contact" class="paralax-mf footer-paralax bg-image sect-mt4 route"
        style="background-image: url(~/assets/images/overlay-bg.jpg)">
        <div class="overlay-mf"></div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="contact-mf">
                <div id="contact" class="box-shadow-full">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="title-box-2">
                        <h5 class="title-left">
                          Send Message Us
                        </h5>
                      </div>
                      <div>
                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                          <div class="row">
                            <div class="col-md-12 mb-3">
                              <div class="form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name"
                                  required>
                              </div>
                            </div>
                            <div class="col-md-12 mb-3">
                              <div class="form-group">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"
                                  required>
                              </div>
                            </div>
                            <div class="col-md-12 mb-3">
                              <div class="form-group">
                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"
                                  required>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <textarea class="form-control" name="message" rows="5" placeholder="Message"
                                  required></textarea>
                              </div>
                            </div>
                            <div class="col-md-12 text-center my-3">
                              <div class="loading">Loading</div>
                              <div class="error-message"></div>
                              <div class="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div class="col-md-12 text-center">
                              <button type="submit" class="button button-a button-big button-rouded">Send Message</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="title-box-2 pt-4 pt-md-0">
                        <h5 class="title-left">
                          Get in Touch
                        </h5>
                      </div>
                      <div class="more-info">
                        <p class="lead">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                          expedita aperiam aliquid at.
                          Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                          mollitia inventore?
                        </p>
                        <ul class="list-ico">
                          <li><span class="bi bi-geo-alt"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                          <li><span class="bi bi-phone"></span> (617) 557-0089</li>
                          <li><span class="bi bi-envelope"></span> contact@example.com</li>
                        </ul>
                      </div>
                      <div class="socials">
                        <ul>
                          <li><a href=""><span class="ico-circle"><i class="bi bi-facebook"></i></span></a></li>
                          <li><a href=""><span class="ico-circle"><i class="bi bi-instagram"></i></span></a></li>
                          <li><a href=""><span class="ico-circle"><i class="bi bi-twitter"></i></span></a></li>
                          <li><a href=""><span class="ico-circle"><i class="bi bi-linkedin"></i></span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> -->
      
      
      <!-- End Contact Section -->

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



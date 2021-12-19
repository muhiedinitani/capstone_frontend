<template>
  <div id="app">
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">

        <h1 class="logo me-auto"><a href="/">SHRED</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="active" href="/">Home</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/trips">My Trips</a></li>
            <!-- <li><a href="trainers.html">Trainers</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="pricing.html">Pricing</a></li> -->

            <!-- <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
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
            <!-- <li><a href="contact.html">Contact</a></li> -->
          </ul>
          <!-- <i class="bi bi-list mobile-nav-toggle"></i> -->
        </nav><!-- .navbar -->

        <!-- <a href="courses.html" class="get-started-btn">Get Started</a> -->

      </div>
    </header>
    <!-- End Header -->

    <!-- ======= Hero Section ======= -->
    <!-- <section id="hero" class="d-flex justify-content-center align-items-center">
      <div class="container position-relative" data-aos="zoom-in" data-aos-delay="100">
        <h1>Learning Today,<br>Leading Tomorrow</h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
        <a href="courses.html" class="btn-get-started">Get Started</a>
      </div>
    </section> -->
    <!-- End Hero -->

    <router-view/>
    
  </div>
</template>

<style></style>

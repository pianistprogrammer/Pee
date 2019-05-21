<template>
  <div id="app" class="page">
    <Header />
    <section class="banner-area-wraper">
      <div class="banner-slider-area">
       <Appslider/>
      </div>
      <p class="text-center">
        KELECHI AMADI OBI
      </p>
    </section><!-- end agency banner section -->
    <section class="xs-section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="agency-section-title text-center section-title-style2">
              <h2 class="main-title">Beyond Photography</h2>
              <p>
                Quick and easy way to find World class photographers to capture and preserve your beautiful
                memories combining human creativity and artificial intelligence.
              </p>

              <button class="btn btn-p btn-rounded btn-peexoo">Explore Photos</button>
            </div>
          </div>
        </div><!-- .row end -->

      </div><!-- .container END -->
    </section><!-- end business info section -->
    <Booking />
    <Testimony />
    <section class="xs-section-padding" style="padding-bottom:80px">
      <div class="container">
        <div class="row pexo-bg">
          <div class="col-md-6 pexo-pad">
            <p>
              DON’T MISS OUT!
              DOWNLOAD OUR MOBILE APP
              FOR A FULL MOBILE
              EXPERIENCE
            </p>
            <div class="pad-top-30">
              <span>
                <img style="width:40%" src="./assets/images/ww_app-store.png" alt="download from app store">
              </span>
              <span>
                <img style="width:45%" src="./assets/images/google-play.png" alt="download from google store">
              </span>
            </div>
          </div>
          <div class="col-md-6 pexo-pad">
            <img src="./assets/images/app-screen-mockup.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <Footer />
    <Menu />
  </div>
</template>

<script>
  import Header from './components/Header'
  import Booking from './components/Booking'
  import Testimony from './components/Testimony'
  import Footer from './components/Footer'
  import Menu from './components/Menu'
  import Appslider from './components/App-slider'
  export default {
    name: "app",
    components: {
      Header,
      Booking,
      Testimony,
      Footer,
      Menu,
      Appslider
    }
   
}

</script>
<style <style scoped>
 
</style>
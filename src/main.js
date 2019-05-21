import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import Popper from 'popper.js'
import 'bootstrap'
const $ = jQuery;
window.$ = $;
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
// css
import './assets/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import './assets/css/animate.css'
import './assets/css/magnific-popup.css'
import './assets/css/swiper.min.css'
import './assets/css/plugins.css'
import './assets/css/style.css'
import './assets/css/newstyle.css'
import './assets/css/responsive.css'

// scripts
import './assets/js/jquery-3.2.1.min.js'
import './assets/js/plugins.js'
import './assets/js/jquery.magnific-popup.min.js'
import './assets/js/owl.carousel.min.js'
import './assets/js/scrollax.js'
import './assets/js/delighters.js'
import './assets/js/jquery.parallax.js'
import './assets/js/skrollr.min.js'
import './assets/js/main.js'
 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


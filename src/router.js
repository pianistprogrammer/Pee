import Vue from 'vue'
import Router from 'vue-router'
import Photographers from './views/Photographers.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/SignUp.vue'
import Pricing from './views/Pricing.vue'
import Faqs from './views/Faqs.vue'
import MobileFaqs from './views/MobileFaqs.vue'
import Community from './views/Community.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/photographers',
      name: 'photographers',
      component: Photographers
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: Faqs
    },
    {
      path: '/faqs/mobile/:id',
      name: 'mobilefaqs',
      component: MobileFaqs
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})




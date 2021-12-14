import Vue from 'vue'
import VueRouter from 'vue-router'
import homeComponent from '../views/homeComponent.vue'
import searchComponent from '../views/searchComponent.vue'
import resultsComponent from '../views/resultsComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homeComponent
  },
  {
    path: '/search',
    name: 'Search',
    component: searchComponent
  },
  {
    path: '/nearby_resorts',
    name: 'Results',
    component: resultsComponent
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/aboutComponent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

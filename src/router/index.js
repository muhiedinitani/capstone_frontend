import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import ResultsView from '../views/ResultsView.vue'
import TripsView from '../views/TripsView.vue'
import ResortsShow from '../views/ResortsShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView
  },
  {
    path: '/nearby_search',
    name: 'Results',
    component: ResultsView
  },
  {
    path: '/trips',
    name: 'Trips',
    component: TripsView
  },
  {
    path: '/place_details/:place_id?',
    name: 'ResortsShow',
    component: ResortsShow
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

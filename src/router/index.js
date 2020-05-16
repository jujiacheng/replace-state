import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import designBuilder from '../views/designBuilder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/designBuilder',
    name: 'designBuilder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: designBuilder
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/help',
      name: 'help',
      component: () => import(/* webpackChunkName: "help" */ './views/Help.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/responsibility',
      name: 'responsibility',
      component: () => import(/* webpackChunkName: "responsibility" */ './views/ResponsibilityStatement.vue'),
      meta: {
        requireAuth: false
      }
    }
  ]
})

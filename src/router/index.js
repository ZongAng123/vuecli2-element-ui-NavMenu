import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShouYe from '../views/ChuLiView.vue'
import XiaoXi from '../views/XiaoXiView.vue'
import ButView from '../views/LeoFit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/shouye',
        name: 'shouye',
        component: ShouYe
      },
      {
        path: '/xiaoxi',
        name: 'xiaoxi',
        component: XiaoXi
      },
      {
        path: '/zhanwei',
        name: 'zhanwei',
        component: () => import('../views/NotPage.vue')
      },
      {
        path: '/guanyu',
        name: 'guanyu',
        component: ButView
      },
      {
        path: '/join',
        name: 'join',
        component: () => import('../views/PinPaiJuZhen.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import messageCenter from '../views/messageCenter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: messageCenter
  },
  {
    path: '/resourceLibrary',
    name: 'resourceLibrary',
    component: () => import('../views/resourceLibrary.vue')
  },
  {
    path: '/addressBook',
    name: 'addressBook',
    component: () => import('../views/addressBook.vue')
  },
  {
    path: '/unfinished',
    name: 'unfinished',
    component: () => import('../views/unfinished.vue')
  },
  {
    path: '/projectDetail',
    name: 'projectDetail',
    component: () => import('../views/projectDetail.vue')
  },
  {
    path: '/fileDetail',
    name: 'fileDetail',
    component: () => import('../views/fileDetail.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

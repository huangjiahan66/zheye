import { createRouter, createWebHistory  } from 'vue-router'
import Home  from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/column/:id',
    name: 'column',
    component: () => import(/* webpackChunkName: "about" */ '../views/ColumnDetail.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreatePost.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

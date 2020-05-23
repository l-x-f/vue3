import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/login'
import Layout from '@/layout'
import children from './children'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '',
    name: '',
    component: Layout,
    children: [...children]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

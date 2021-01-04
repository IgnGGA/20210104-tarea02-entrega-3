import { createRouter, createWebHistory } from 'vue-router'
import Cover from '../components/Cover.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Info from '../views/Info.vue'
import Rules from '../views/Rules.vue'

const routes = [
  {
    path:'/',
    name: 'Cover',
    component: Cover
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/contact',
    name:'Contact',
    component: Contact
  },
  {
    path:'/info',
    name:'Info',
    component: Info
  },
  {
    path:'/rules',
    name:'Rules',
    component:Rules
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

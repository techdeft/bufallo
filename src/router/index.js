import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Council from '../views/Council.vue'
import Directory from '../views/Directory.vue'
import Events from '../views/Events.vue'
import Summit from '../views/Summit.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/council', name: 'Council', component: Council },
  { path: '/directory', name: 'Directory', component: Directory },
  { path: '/events', name: 'Events', component: Events },
  { path: '/summit', name: 'Summit', component: Summit },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Council from '../views/Council.vue'
import Directory from '../views/Directory.vue'
import Events from '../views/Events.vue'
import Summit from '../views/Summit.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home,
    meta: { 
      title: 'Buffalo Narrows Economic Development Corporation',
      description: 'Driving sustainable economic growth, community empowerment, and long-term prosperity in Northern Saskatchewan.'
    }
  },
  { 
    path: '/about', 
    name: 'About', 
    component: About,
    meta: { 
      title: 'About Us | Buffalo Narrows EDC',
      description: 'Learn about the Buffalo Narrows Economic Development Corporation, our mission, vision, and dedication to our community.'
    }
  },
  { 
    path: '/council', 
    name: 'Council', 
    component: Council,
    meta: { 
      title: 'Council & Board Members | Buffalo Narrows EDC',
      description: 'Meet the dedicated leaders committed to the sustainable growth and prosperity of Buffalo Narrows.'
    }
  },
  { 
    path: '/directory', 
    name: 'Directory', 
    component: Directory,
    meta: { 
      title: 'Business Directory | Buffalo Narrows EDC',
      description: 'Discover the businesses and services driving our community forward in Northern Saskatchewan.'
    }
  },
  { 
    path: '/events', 
    name: 'Events', 
    component: Events,
    meta: { 
      title: 'Community Events | Buffalo Narrows EDC',
      description: 'Stay updated on the latest events, news, and community gatherings in Buffalo Narrows.'
    }
  },
  { 
    path: '/summit', 
    name: 'Summit', 
    component: Summit,
    meta: { 
      title: 'Northwest Economic Summit 2026 | BNEDC',
      description: 'Connecting Communities: A high-impact forum for regional leaders, industry experts, and entrepreneurs.'
    }
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    component: Contact,
    meta: { 
      title: 'Contact Us | Buffalo Narrows EDC',
      description: 'Get in touch with the Buffalo Narrows Economic Development Corporation to learn more about investment and partnership opportunities.'
    }
  },
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

// Global navigation guard for updating document title and meta description
router.beforeEach((to, from, next) => {
  // Update document title
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  }

  // Update meta description
  const nearestWithDescription = to.matched.slice().reverse().find(r => r.meta && r.meta.description)
  if (nearestWithDescription) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = nearestWithDescription.meta.description
  }

  next()
})

export default router

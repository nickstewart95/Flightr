import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Results from '@/pages/Results'
import Saved from '@/pages/Saved'
import Settings from '@/pages/Settings'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    },
    {
      path: '/saved',
      name: 'Saved',
      component: Saved
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

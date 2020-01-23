import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Transcript from '@/components/Transcript.vue'

import About from '@/components/static_pages/About.vue'
import Info from '@/components/static_pages/Info.vue'
import FAQ from '@/components/static_pages/FAQ.vue'
import History from '@/components/static_pages/History.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      name: 'home',
      path: '/', 
      component: Home 
    },
    {
      name: 'search',
      path: '/search/:keyword',
      component: Home
    },
    {
        name:'transcript',
        path: '/transcript/:id',
        component: Transcript
    },
    {
      name: 'search_transcript',
      path: '/search/:keyword/transcript/:id',
      component: Transcript
    },
    {
      name: 'browse',
      path: '/browse/:legislature/:term/:session',
      component: Home
    },
    //static pages
    {
      name: 'about',
      path: '/about',
      component: About
    },
    {
      name: 'info',
      path: '/info',
      component: Info
    },
    {
      name: 'faq',
      path: '/faq',
      component: FAQ
    },
    {
      name: 'history',
      path: '/history',
      component: History
    }
  ]
})

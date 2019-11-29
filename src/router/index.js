import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Transcript from '@/components/Transcript.vue'

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
    }
  ]
})

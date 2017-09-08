import Vue from 'vue'
import Router from 'vue-router'
import AudioPlayer from '@/components/AudioPlayer'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/:id?',
      name: 'AudioPlayer',
      component: AudioPlayer
    }
  ]
})

export default router;
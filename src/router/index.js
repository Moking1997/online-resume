import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Default from '@/components/default'
import White from '@/components/white'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/white',
      name: 'White',
      component: White
    },
    {
      path: '/default',
      name: 'Default',
      component: Default
    },
  ]
})

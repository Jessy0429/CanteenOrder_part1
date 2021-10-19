import Vue from 'vue'
import Router from 'vue-router'
import main_order from '@/components/main_order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main_order',
      component: main_order
    }
  ]
})

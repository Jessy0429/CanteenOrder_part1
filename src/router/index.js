import Vue from 'vue'
import Router from 'vue-router'
import app_user from '@/components/app_user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app_user',
      component: app_user
    }
  ]
})

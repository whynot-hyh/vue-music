import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routers: [
    {
      path: '/',
      name: '',
      component: Recommend
    },
    {
      path: '/',
      name: '',
      component: Singer
    },
    {
      path: '/',
      name: '',
      component: Rank
    },
    {
      path: '/',
      name: '',
      component: Search
    },
 
  ]
})
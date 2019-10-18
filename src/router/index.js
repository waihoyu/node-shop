import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShoppingMall from '@/components/pages/ShoppingMall'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/shop' 
    },
    {
        path: '/shop',
        name: 'ShoppingMall',
        component: ShoppingMall
    }
    ]
})

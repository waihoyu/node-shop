import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import ShoppingMall from '@/components/pages/ShoppingMall';
import Register from '@/components/pages/Register.vue';
import Login from '@/components/pages/Login.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',  redirect: '/shop' },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register }, 
    { path: '/shop', name: 'ShoppingMall', component: ShoppingMall }
    ]
});

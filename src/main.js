// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { Button, Row, Col, Swipe, SwipeItem, Lazyload, List, Field, NavBar } from 'vant';
import axios from 'axios';

Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Field).use(NavBar);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue (
    {
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
    }
);

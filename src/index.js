import Vue from 'vue';
import Router from 'vue-router';


 import login from "./pages/login.vue"
 import home from "./pages/home.vue"



Vue.user(Router);

export default new Router({
    routes: [
        {
            path: "/login",
            name :'login',
            component: login
        },
        {
            path: "/home",
            name :'home',
            component: home
        }
    ]
})
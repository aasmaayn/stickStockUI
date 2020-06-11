
import login from "../pages/login.vue"
import home from "../pages/home.vue"
import searchtest from "../pages/searchTest.vue"


export const routes =  [
        {
            path: "/login",
            component: login
        },
        {
            path: "/home",
            component: home
        },
        {
            path: "/searchtest",
            component: searchtest
        }
    ]

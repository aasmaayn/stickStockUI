import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import Vuetify from 'vuetify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Router from 'vue-router';
import {routes} from './data/routes'

import { fas, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


//compoenents
import search from "./components/search.vue";
import stockItem from "./components/stockItem.vue";
import tableTop from "./components/tableTop.vue";



library.add(faCircle);
library.add(faArrowCircleUp);
library.add(faArrowCircleDown);
library.add(fas);
library.add(faPlus);


Vue.component('icon', FontAwesomeIcon); // Register component globally
Vue.use(Router);
Vue.use(Buefy);
Vue.use(Vuetify, {
  iconfont: 'faSvg',
});

Vue.component('search', search);
Vue.component('stock', stockItem);
Vue.component('tableTop', tableTop);

const router = new Router({
  routes // short for `routes: routes`
});


new Vue({
  el: '#app',
  router,
  render: h => h(App),
});



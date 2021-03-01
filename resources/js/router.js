import Vue from 'vue';
import VueRouter from 'vue-router';
import compHome from './components/comp-home.vue'
import compLogin from './components/comp-login.vue'

Vue.use(VueRouter);

const routes = [
  {	path: '/home', component: compHome },
  { path: '/login', component: compLogin },
  { path: '*', redirect: '/home'}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
export default router;

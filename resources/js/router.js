import Vue from 'vue';
import VueRouter from 'vue-router';
import compHome from './components/comp-home.vue'
import compLogin from './components/comp-login.vue'
import compDashboard from './components/comp-dashboard.vue'

Vue.use(VueRouter);

const routes = [
  {	path: '/home', component: compHome },
  { path: '/login', component: compLogin },
  { path: '/dashboard', component: compDashboard },
  { path: '*', redirect: '/home'}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
export default router;

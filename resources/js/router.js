//import { createRouter, createWebHistory } from "vue-router";
import Vue from 'vue';
import VueRouter from 'vue-router';
import compHome from './components/comp-home.vue'
import compLogin from './components/comp-login.vue'
import compDashboard from './components/comp-dashboard.vue'
import store from "./store/index";

Vue.use(VueRouter);

const routes = [
  {	path: '/', component: compHome },
  { path: '/login', component: compLogin },
  { path: '/dashboard', component: compDashboard },
  { path: '*', redirect: '/'}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})
export default router;
// export const routeConfig = createRouter({
//   history: createWebHistory(),
//   routes: routes,
// });
/* router.beforeEach((to,from, next) => {
    console.log('checking isTokenActive');
    if(to.meta.requiredAuth){

        const auth = store.getters["auth/isTokenActive"];
        if(!auth){

           return next({path: '/login'});
        }
    }
    return next();
});

router.beforeEach((to,from, next) => {
    console.log('getting auth Data');
    console.log(store.getters["auth/getAuthData"].token);

    if(!store.getters["auth/getAuthData"].token){

        const access_token = localStorage.getItem("access_token");
        const refresh_token = localStorage.getItem("refresh_token");
        if(access_token){
            const data = {
                access_token:access_token,
                refresh_token:refresh_token
            };
            store.commit('auth/saveTokenData',data);
        }
    }
    const auth = store.getters["auth/isTokenActive"];
 
    if(to.fullPath == "/"){
        return next();
    }
    else if(auth && !to.meta.requiredAuth){
        return next({path:"/dashboard"});
    }
    else if(!auth && to.meta.requiredAuth){
        return next({path: '/login'});
    }
 
    return next();
});*/
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component:  () => import('./components/pages/about.vue')
    },

    {
        path: '/projects',
        component:  () => import('./components/pages/projects.vue')
    },

    {
        path: '/reviews',
        component:  () => import('./components/pages/reviews.vue')
    }

];


export default new VueRouter({ 
    routes
 });
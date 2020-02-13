import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import about from './components/pages/about.vue';
import projects from './components/pages/projects.vue';
import reviews from './components/pages/reviews.vue';
import login from './components/pages/login.vue';
const routes = [
    {
        path: '/',
        component:  about
    },

    {
        path: '/login',
        component:  login
    },


    {
        path: '/projects',
        component: projects
    },

    {
        path: '/reviews',
        component:  reviews
    }

];


export default new VueRouter({ 
    routes
 });
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default [
    {
        path: '/',
        component:  () => import('@/components/pages/about.vue')
    },

    {
        path: '/projects',
        component:  () => import('@/components/pages/projects.vue')
    },

    {
        path: '/reviews',
        component:  () => import('@/components/pages/reviews.vue')
    },

    {
        path: '/login',
        component:  () => import('@/components/pages/login.vue'),

        meta: {
            public: true
        }
    }
];
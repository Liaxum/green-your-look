import Vue from 'vue';
import VueRouter from 'vue-router';
import { isLogged } from './guard.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/backoffice',
    name: 'backoffice',
    meta: { isSecureAdmin: true },
    component: () => import('../views/BackOffice.vue'),
  },
  {
    path: '/Compte',
    name: 'compte',
    component: () => import('../views/ProfilViews/Compte.vue'),
  },
  {
    path: '/Blog',
    name: 'blog',
    component: () => import('../views/StaticViews/Blog.vue'),
  },
  {
    path: '/Identite',
    name: 'identite',
    component: () => import('../views/StaticViews/Identite.vue'),
  },
  {
    path: '/Commandes',
    name: 'Commandes',
    component: () => import('../views/ProfilViews/Commandes.vue'),
  },
  {
    path: '/Commander',
    name: 'commander',
    component: () => import('../views/CommandViews/Commander.vue'),
  },
  {
    path: '/Message',
    name: 'Message',
    component: () => import('../views/CommandViews/Message.vue'),
  },
  {
    path: '/Favoris',
    name: 'favoris',
    component: () => import('../views/ProfilViews/Favoris.vue'),
  },
  {
    path: '/Panier',
    name: 'panier',
    component: () => import('../views/ProfilViews/Panier.vue'),
  },
  {
    path: '/:type',
    name: 'type',
    component: () => import('../views/ListStyles.vue'),
  },
  {
    path: '/:type/:style',
    name: 'style',
    component: () => import('../views/Style.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const logged = isLogged();
  if (!logged && to.matched[0].meta.isSecureAdmin) {
    next({
      path: '/',
    });
  } else {
    next();
  }
});

export default router;

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  routes: [
    {
      path: '/',
      name: 'chat-page',
      // eslint-disable-next-line global-require
      component: require('./pages/Chat.vue').default,
      meta: {},
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

export default router;

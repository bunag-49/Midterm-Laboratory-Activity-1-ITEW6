import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

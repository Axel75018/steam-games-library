import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import GamesList from './views/GamesList.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/games', component: GamesList }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

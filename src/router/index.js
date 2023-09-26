import { createRouter, createWebHistory } from 'vue-router';
import HomeCard from '../views/HomeCard.vue';
import CardOutput from '../views/CardOutput.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeCard,
    },
    {
      path: '/:cardId',
      name: 'CardOutput',
      component: CardOutput,
    },
    
  ],
});

export default router

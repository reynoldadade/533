import { createRouter, createWebHistory } from 'vue-router'
import RecipePage from '../pages/RecipePage.vue'
import FavoritesPage from '../pages/FavoritesPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'recipes', component: RecipePage },
    { path: '/favorites', name: 'favorites', component: FavoritesPage },
  ],
})

export default router

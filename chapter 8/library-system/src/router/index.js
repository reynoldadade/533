import { createRouter, createWebHistory } from 'vue-router'
import Books from '../views/Books.vue'
import Members from '../views/Members.vue'
import Lend from '../views/Lend.vue'
import Overdue from '../views/Overdue.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'books', component: Books },
    { path: '/members', name: 'members', component: Members },
    { path: '/lend', name: 'lend', component: Lend },
    { path: '/overdue', name: 'overdue', component: Overdue },
  ],
})

export default router

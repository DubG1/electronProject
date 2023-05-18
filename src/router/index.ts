import {createRouter, createWebHistory} from 'vue-router'
import home from '../views/home.vue'

const routes = [
    {path: '/', component: home},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;
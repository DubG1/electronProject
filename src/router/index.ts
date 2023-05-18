import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'

const routes = [
    { path: '/', component: home },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
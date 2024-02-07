import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'chartJs',
        component: () => import('../views/chartJs.vue')
    },
    {
        path: '/apexCharts',
        name: 'apexCharts',
        component: () => import('../views/apexCharts.vue')
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})
export default router
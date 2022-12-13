import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/home/Home.vue')
        },
        {
            path: '/character',
            name: 'character',
            component: () => import('@/views/character/Character.vue'),
        },
        {
            path: '/character/:characterId',
            name: 'character-details',
            component: () => import('@/views/character-details/CharacterDetails.vue')
        }
    ]
})

export default router

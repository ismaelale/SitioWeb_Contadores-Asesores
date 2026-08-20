import { createWebHistory, createRouter } from 'vue-router'

import HelloWorld from '../views/HelloWorld.vue'
import Movies from '../views/Movies.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path : '/',
            name : 'home',
            component : HelloWorld
        },
        {
            path: '/movie',
            name : 'movies',
            component : Movies
        }
    ]
})

export default router
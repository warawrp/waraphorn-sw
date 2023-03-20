
import { createRouter , createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/Resume.vue'

const routes =[
        {path: '/', name:'Home' , component:Home},
        {path: '/resume', name:'Resume' , component:About}
    ]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
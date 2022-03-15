import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WorksDetails from '../views/WorksDetails.vue'
import About from '../views/About.vue'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:title',
        name: 'WorksDetails',
        component: WorksDetails,
        props: true
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior() {
        document.querySelector('html').scrollIntoView();
    },
    routes

})

export default router
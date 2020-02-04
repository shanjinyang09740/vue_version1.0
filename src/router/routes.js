
import Msite from './../page/msite.vue'
import Login from './../page/login.vue'

export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path:'/msite',
        component:Msite,
    },
    {
        path:'/login',
        component:Login,
    }
]
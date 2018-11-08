import Layout from './components/Layout.vue'
import Contain from './components/Contain.vue'
import Char from './components/Char.vue'
//1. 定义路由
const routers = [
    {
        path: '/layout',
        name: 'layout',
        component: Layout
    }, {
        path: '/container',
        name: 'container',
        component: Contain
    },{
        path:'/char',
        name:'char',
        component:Char
    }

]
export default routers
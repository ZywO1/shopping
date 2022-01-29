//引入路由
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
//路由配置信息
export default [{
    path: '/home',
    component: Home,
    meta: { showFooter: true }
},
{
    name: 'search',
    path: '/search/:keyword?',
    component: Search,
    meta: { showFooter: true }
},
{
    path: '/login',
    component: Login,
    meta: { showFooter: false }
},
{
    path: '/register',
    component: Register,
    meta: { showFooter: false }
},
{
    path: '/detail/:skuid',
    component: Detail,
    meta: { showFooter: true }
},
{
    name:'addcartsuccess',
    path: '/addcartsuccess',
    component: AddCartSuccess,
    meta: { showFooter: true }
},
{
    path: '/shopcart',
    component: ShopCart,
    meta: { showFooter: true }
},
//重定向,默认是在首页
{
    path: '*',
    redirect: '/home'
}
]
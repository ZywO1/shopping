//引入一级路由
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
//引入二级路由
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
//路由配置信息
export default [{
    path: '/home',
    component: Home,
    meta: { showFooter: true },
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
    name: 'addcartsuccess',
    path: '/addcartsuccess',
    component: AddCartSuccess,
    meta: { showFooter: true }
},
{
    path: '/shopcart',
    component: ShopCart,
    meta: { showFooter: true }
},
{
    path: '/trade',
    component: Trade,
    meta: { showFooter: true }
},
{
    path: '/pay',
    component: Pay,
    meta: { showFooter: true }
},
{
    path: '/paysuccess',
    component: PaySuccess,
    meta: { showFooter: true }
},
{
    path: '/center',
    component: Center,
    meta: { showFooter: true },
    //二级路由
    children: [
        {
            path: 'myorder',
            component: MyOrder
        },
        {
            path: 'grouporder',
            component: GroupOrder
        },
        {
            path:'/center',
            redirect:'/center/myorder'
        }
    ]
},
//重定向,默认是在首页
{
    path: '*',
    redirect: '/home'
}
]
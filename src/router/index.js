//配置路由

import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter)
    //引入路由
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//重写push|replace，消除一个警告
let originPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}

let originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}

//配置路由
export default new VueRouter({
    //引入配置路由
    routes: [{
            path: '/home',
            component: Home,
            meta: { showFooter: true }
        },
        {
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
        //重定向,默认是在首页
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
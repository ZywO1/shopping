//配置路由

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
//使用插件
Vue.use(VueRouter)


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
    routes,
    scrollBehavior (to, from, savedPosition) {
        return {  y: 0 }
      }
})
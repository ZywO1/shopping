//配置路由

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import store from '@/store'
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
let router = new VueRouter({
    //引入配置路由
    routes,
    scrollBehavior (to, from, savedPosition) {
        return {  y: 0 }
      }
})

router.beforeEach(async (to,from,next)=>{
    let token=store.state.user.token
    let name=store.state.user.userInfo.name
    if(token){
        if(to.path=='/login'||to.path=="/register"){
            next('/home')
        }else{
            if(name){
                next()
            }else{
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    //token失效
                    await store.dispatch("userLogout")
                    next('/login')
                }
            }
        }
    }else{
        next()
    }
})

export default router
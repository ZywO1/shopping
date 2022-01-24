import Vue from 'vue'
import App from './App.vue'
//引入配置路由
import router from '@/router'
//引入全局組件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
//引入vuex
import store from '@/store'
//引入mock
import "@/mcok/mockServe"
//引入swiper样式
import 'swiper/css/swiper.css'


Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name,Pagination)

new Vue({
    render: h => h(App),
    //全局事件总线：
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    //注册路由
    router,
    store
}).$mount('#app')
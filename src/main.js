import Vue from 'vue'
import App from './App.vue'
//引入配置路由
import router from '@/router'
//引入全局組件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
//引入api方法
import { reqCategoryList } from '@/api/index'
//引入vuex
import store from '@/store'
//引入mock
import "@/mcok/mockServe"
//引入swiper样式
import 'swiper/css/swiper.css'
//reqCategoryList();

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)

new Vue({
    render: h => h(App),
    //注册路由
    router,
    store
}).$mount('#app')
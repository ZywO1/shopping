import Vue from 'vue'
import App from './App.vue'
//引入配置路由
import router from '@/router'
//引入全局組件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import { Button,MessageBox } from 'element-ui'
//引入vuex
import store from '@/store'
//引入mock
import "@/mcok/mockServe"
//引入swiper样式
import 'swiper/css/swiper.css'

import * as API from '@/api'

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name,Button)
Vue.prototype.$msgbox=MessageBox
Vue.prototype.$alert=MessageBox.alert

new Vue({
    render: h => h(App),
    //全局事件总线：
    beforeCreate() {
        Vue.prototype.$bus = this
        Vue.prototype.$API=API
    },
    //注册路由
    router,
    store
}).$mount('#app')
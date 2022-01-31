//对axios进行二次封装
import axios from "axios"
//引入进度条组件以及进度条样式
import nprogress from 'nprogress'

import store from '@/store'

import "nprogress/nprogress.css"
const requests = axios.create({
    //基础路径
    baseURL: "/api",
    //超时时间
    timeout: 5000.
})

//请求拦截器，在发送请求之前，请求拦截器可以检测到，可以在请求前完成某些事务
requests.interceptors.request.use((config) => {
    if (store.state.detail.uuid_token) {
        //请求头添加字段
        config.headers.userTempId = store.state.detail.uuid_token
    }
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    }
    //进度条开始
    nprogress.start()

    //config:配置对象，里面有一个重要属性，headers请求头
    return config
})

//响应拦截器
requests.interceptors.response.use((res) => {
    //进度条结束
    nprogress.done()

    //成功回调函数
    return res.data
}, (error) => {
    //失败回调函数
    return Promise.reject(new Error('fail'))
})

//对外暴露
export default requests
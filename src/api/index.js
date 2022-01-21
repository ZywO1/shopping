//对API进行统一管理
import requests from './request'

//首页三级联动接口
///api/product/getBaseCategoryList get请求
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
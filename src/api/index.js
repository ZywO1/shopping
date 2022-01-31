//对API进行统一管理
import requests from './request'
import mockRequests from "./mockAjax"
//首页三级联动接口
///api/product/getBaseCategoryList get请求
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
export const reqGetBannerList = () => mockRequests({ url: '/banner', method: 'get' })
export const reqGetFloorList = () => mockRequests({ url: '/floor', method: 'get' })

//获取搜索模块数据，请求方法post
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })
//获取商品详情
export const reqGoodsInfo = (skuid) => requests({ url: `/item/${skuid}`, method: 'get' })
//将产品信息添加到购物车
export const reqAddUpdateShopCart = (skuid, skuNum) => requests({ url: `/cart/addToCart/${skuid}/${skuNum}`, method: 'post' })
//获取购物车信息
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })
//删除购物产品的接口
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })
//修改商品选中状态
export const reqUpdateCheckedById = (skuid, isChecked) => requests({ url: `/cart/checkCart/${skuid}/${isChecked}`, method: 'get' })
//获取验证码
export const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
//注册
export const reqUserRegister=(userdata)=>requests({url:'/user/passport/register',data:userdata,method:'post'})
//登录
export const reqUserLogin=(data)=>requests({url:'/user/passport/login',data,method:'post'})
//通过token获取用户信息
export const reqUserInfo=()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})
//退出登录
export const reqLogout=()=>requests({url:'/user/passport/logout',method:'get'})
//获取用户地址
export const reqAddressInfo=()=>requests({url:"/user/userAddress/auth/findUserAddressList",method:"get"})
//获取结算商品信息
export const reqOrderInfo=()=>requests({url:"/order/auth/trade",method:"get"})
//提交订单
export const reqSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})
//获取支付信息
export const reqPayInfo=(orderId)=>requests({url:`payment/weixin/createNative/${orderId}`,method:'get'})
//获取支付订单信息
export const reqPayStatus=(orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})
//获取个人订单
export const reqMyOrderList=(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})
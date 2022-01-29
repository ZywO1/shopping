import { reqGoodsInfo,reqAddUpdateShopCart } from "@/api"
import {getUUID} from '@/utils/uuid_token'
const actions = {
    async getGoodInfo(context, skuid) {
        let result = await reqGoodsInfo(skuid)
        if (result.code === 200) {
            context.commit("GOODINFO", result.data)
        }
    },
    //添加购物车
    async addOrUpdateShopCart(context,{skuid,skuNum}){
        let result = await reqAddUpdateShopCart(skuid,skuNum)
        if (result.code === 200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    }
}
const mutations = {
    GOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const state = {
    goodInfo: {},
    uuid_token:getUUID()
}

const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    }
}

export default ({
    actions,
    mutations,
    state,
    getters
})
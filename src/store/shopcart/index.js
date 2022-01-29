import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api"
const actions = {
    async getCartList(context) {
        let result = await reqCartList()
        if (result.code === 200) {
            context.commit("GETCARTLIST", result.data)
        }
    },
    async deleteCartListBySkuId(context, skuid) {
        let result = await reqDeleteCartById(skuid)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async updateCheckedById(context, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //删除勾选:
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll=[]
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : ''
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    },
    updateAllCartIsChecked({ dispatch, getters },isChecked){
        let promiseAll=[]
        getters.cartList.cartInfoList.forEach(item=>{
            let promise=dispatch("updateCheckedById",{skuId:item.skuId,isChecked:isChecked})
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
const state = {
    cartList: []
}

const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },
}

export default ({
    actions,
    mutations,
    state,
    getters
})
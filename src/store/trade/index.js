import {reqAddressInfo,reqOrderInfo} from "@/api"
const actions={
    async userAddressInfo({commit}){
        let result =await reqAddressInfo()
        if(result.code==200){
            commit("GETUSERADDRESSINFO",result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async userOrderInfo({commit}){
        let result =await reqOrderInfo()
        if(result.code==200){
            commit("GETORDERINFO",result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
}
const mutations={
    GETUSERADDRESSINFO(state,userAddressInfo){
        state.address=userAddressInfo
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo=orderInfo
    }
}
const state={
    address:[],
    orderInfo:{}
}
export default{
    actions,
    mutations,
    state
}
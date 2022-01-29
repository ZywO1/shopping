import { reqGetCode,reqUserRegister,reqUserLogin } from "@/api"

const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        if(result.code==200){
            commit("GETCODE",result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    //注册操作
    async userRegister({commit},data){
        let result =await reqUserRegister(data)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async userLogin({commit},data){
        let result =await reqUserLogin(data)
        if(result.code==200){
            commit("USERLOGIN",result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    }
}
const mutations = {
    GETCODE(state,code){
        state.code=code
    },
    USERLOGIN(state,token){
        state.token=token
    }
}
const state = {
    code:'',
    token:''
}

export default ({
    actions,
    mutations,
    state

})
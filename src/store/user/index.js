import { reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout } from "@/api"

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
            localStorage.setItem("TOKEN",result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    //通过token获取用户信息
    async getUserInfo({commit}){
        let result =await reqUserInfo()
        if(result.code==200){
            commit("USERINFO",result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async userLogout({commit}){
        let result =await reqLogout()
        if(result.code==200){
            commit("CLEAR")
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
    },
    USERINFO(state,data){
        state.userInfo=data
    },
    CLEAR(state){
        state.token='',
        state.userInfo={};
        localStorage.removeItem("TOKEN")
    }
}
const state = {
    code:'',
    token:localStorage.getItem('TOKEN'),
    userInfo:{}
}

export default ({
    actions,
    mutations,
    state

})
import { reqGetSearchInfo } from "@/api"
const actions = {
    async getSearchList(context, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code === 200) {
            context.commit("SEARCHINFO", result.data)
        }
    },
}
const mutations = {
    SEARCHINFO(state, searchList) {
        state.searchList = searchList
    },
}
const state = {
    searchList: {}
}

const getters = {
    goodsList(state){
        return state.searchList.goodsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    }
}

export default ({
    actions,
    mutations,
    state,
    getters
})
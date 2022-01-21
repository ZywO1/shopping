import { reqCategoryList } from "@/api"

const actions = {
    async categoryList(context) {
        let result = await reqCategoryList()
        if (result.code === 200) {
            context.commit("CATEGORYLIST", result.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}
const state = {
    categoryList: []
}

export default ({
    actions,
    mutations,
    state
})
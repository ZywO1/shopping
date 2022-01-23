import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"

const actions = {
    async categoryList(context) {
        let result = await reqCategoryList()
        if (result.code === 200) {
            context.commit("CATEGORYLIST", result.data)
        }
    },
    async getBannerList(context) {
        let result = await reqGetBannerList();
        if (result.code === 200) {
            context.commit("GETBANNERLIST", result.data)
        }
    },
    async getFloorList(context) {
        let result = await reqGetFloorList();
        if (result.code === 200) {
            context.commit("GETFLOORLIST", result.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}
const state = {
    categoryList: [],
    //轮播图数据
    bannerList: [],
    //展示楼层
    floorList: []
}

export default ({
    actions,
    mutations,
    state
})
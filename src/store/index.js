import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//引入仓库
import home from './home'
import search from './search'

export default new Vuex.Store({
    modules: {
        home,
        search
    }
})
//声明一个store
import Vuex from 'vuex';
//actions: 可被分配的动作（预处理，申请ajax）
const actions = {}
//动作调用的实现方法(改变state)
const mutations = {
    //参数1 state 所有组件都可访问到的空间，2 action传递的参数
    SET_LOGIN_STATE(state, flag) {
        state.isLogin = flag;
    },
    SET_USER(state, user) {
        state.userInfo = user;
    },

}
const state = {
    isLogin: false,
    userInfo: {},
}
export const store = Vuex.createStore({
    state,
    mutations,
    actions,
})

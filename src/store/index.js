import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);
console.log(mutations);
//sada
export default new Vuex.Store({
    state: {
        //页面
        page: "index",
        //用户信息
        userinfo: null,
        //游戏名列表
        gameList: null
    },
    getters,
    mutations
});

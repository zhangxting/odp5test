import Vue from "vue";
import Vuex from "vuex";
import "normalize.css";
import getters from "./getters";
import mutations from "./mutations";
import modules from "./modules";
import lang from "../lang/langpack";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //页面
        page: "index",
        //用户信息
        userinfo: null,
        //游戏名列表
        gameList: null,
        //语言包
        lang: lang
    },
    getters,
    mutations,
    modules
});

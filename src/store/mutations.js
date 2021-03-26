import * as types from "./mutation-types";

export default {
    [types.CHANGE_USERINFO](state, userInfo) {
        state.userinfo = userInfo;
    },
    [types.CHANGE_GAMELIST](state, gameList) {
        state.gameList = gameList;
    },
    [types.CHANGE_PAGE](state, page) {
        state.page = page;
    },
    [types.CHANGE_LEFTOPEN](state, asidedBtn) {
        state.asidedBtn = asidedBtn;
    }
};

//import mutationTypes from "./mutationTypes";
// const CHANGE_USERINFO = "CHANGE_USERINFO";
// const CHANGE_GAMELIST = "CHANGE_GAMELIST";// const CHANGE_GAMELIST = "CHANGE_GAMELIST";// const CHANGE_GAMELIST = "CHANGE_GAMELIST";
const CHANGE_PAGE = "CHANGE_PAGE";
export default {
    // CHANGE_USERINFO(state, userInfo) {
    //     state.userinfo = userInfo;
    // },
    // CHANGE_GAMELIST(state, gameList) {
    //     state.gameList = gameList;
    //     state.gameList = gameList;
    // },
    [CHANGE_PAGE](state, page) {
        state.page = page;
    }
};

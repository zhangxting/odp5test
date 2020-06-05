import Vue from "vue";
import store from "./store";
Vue.config.productionTip = false;

export default {
    mount(App, page = "index") {
        store.commit("CHANGE_PAGE", page);
        new Vue({
            store,
            render: h => h(App)
        }).$mount("#app");
    }
};

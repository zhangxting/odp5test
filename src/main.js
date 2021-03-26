import Vue from "vue";
import store from "./store";
import ElementUI from "element-ui";
import "./assets/element-variables.scss";
//import VueRouter from "vue-router";
import router from "./router";

Vue.config.productionTip = false;
//Vue.use(VueRouter);
Vue.use(ElementUI, { size: "small" });

export default {
    mount(App, page = "index") {
        store.commit("CHANGE_PAGE", page);
        new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount("#app");
    }
};

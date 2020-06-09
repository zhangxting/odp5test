import Vue from "vue";
import store from "./store";
import ElementUI from "element-ui";
import "./assets/element-variables.scss";
Vue.config.productionTip = false;
// console.log(process.env.NODE_ENV);
Vue.use(ElementUI, { size: "small" });
export default {
    mount(App, page = "index") {
        store.commit("CHANGE_PAGE", page);
        new Vue({
            store,
            render: h => h(App)
        }).$mount("#app");
    }
};

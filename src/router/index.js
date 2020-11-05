import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import error404 from "../views/error404";
//import GameInfoConf from "../views/GameInfoConf.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/home",
        name: "游戏信息配置",
        component: Home,
        children: [
            {
                path: "jichu",
                name: "游戏基础配置",
                // component: GameInfoConf,
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ "../views/GameInfoConf.vue"
                    )
            },
            {
                path: "canshu",
                name: "游戏参数配置",
                component: Home
            },
            {
                path: "baomin",
                name: "包名计划管理",
                component: Home
            },
            {
                path: "fu",
                name: "服列表管理",
                component: Home
            }
        ]
    },
    {
        path: "/about",
        name: "SDK配置发行",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
        children: [
            {
                path: "sokpei",
                name: "SDK配置文件",
                component: Home
            },
            {
                path: "faxin",
                name: "发行管理",
                component: Home
            },
            {
                path: "adjust",
                name: "adjust token",
                component: Home
            }
        ]
    },
    {
        path: "*",
        name: "adjust token",
        component: error404
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

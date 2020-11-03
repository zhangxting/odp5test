import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "游戏信息配置",
        component: Home,
        children: [
            {
                path: "jichu",
                name: "游戏信息配置",
                component: Home
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
                path: "jichu",
                name: "游戏信息配置",
                component: Home
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
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

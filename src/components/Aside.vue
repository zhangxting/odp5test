<template>
    <el-aside class="leftnav" v-show="asidedBtn">
        <div id="nav">
            <router-link to="/home">基础信息匹配</router-link>
            <router-link to="/home/jichu">基础配置</router-link>
            <router-link to="/home/canshu">SDK配置发行</router-link>
            <router-link to="/about">SDK配置发行</router-link>
        </div>
    </el-aside>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "leftNav",
    computed: {
        ...mapState(["asidedBtn"])
    },
    methods: {}
};
</script>

<style scoped lang="scss">
.leftnav {
    color: #ccc;
    width: 200px;
    height: 100vh;
    border-right: 1px solid #cdcdcd;
}
#nav {
    padding: 30px;
    display: flex;
    flex-direction: column;

    a {
        text-align: center;
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
        padding-top: 20px;
        padding-bottom: 20px;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>

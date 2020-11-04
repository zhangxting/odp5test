<template>
    <el-aside class="leftnav">
        <div id="nav">
            <router-link to="/home">基础信息匹配</router-link>
            <router-link to="/home/jichu">基础配置</router-link>
            <router-link to="/about">SDK配置发行</router-link>
        </div>
    </el-aside>
</template>

<script>
export default {
    name: "leftNav",
    created() {
        console.log(this.$route.query);
    }
};
</script>

<style scoped lang="scss">
.leftnav {
    background: darkcyan;
    width: 200px;
    height: 100vh;
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

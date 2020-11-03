<template>
    <el-aside class="leftnav">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </el-aside>
</template>

<script>
export default {
    name: "leftNav"
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

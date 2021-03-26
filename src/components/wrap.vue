<template>
    <el-container class="is-vertical">
        <Header></Header>
        <el-container>
            <Aside></Aside>
            <el-main>
                <slot></slot>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Aside from "./Aside";
import Header from "./Header";
export default {
    name: "wrap",
    components: {
        Aside,
        Header
    }
};
</script>

<style scoped lang="scss">
.el-main {
    background-color: #fbe9e7;
    border: 20px solid #ffffff;
}
</style>

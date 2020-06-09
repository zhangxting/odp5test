<template>
    <el-container class="is-vertical">
        <Webheader></Webheader>
        <el-container>
            <leftnav></leftnav>
            <el-main>
                <slot>
                    <el-button type="danger">dafdsa</el-button>
                </slot>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import leftnav from "./leftNav";
import Webheader from "./webheader";
export default {
    name: "wrap",
    components: {
        leftnav,
        Webheader
    }
};
</script>

<style scoped lang="scss">
/*@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");*/
/*.el-header, .el-footer {*/
/*background-color: #B3C0D1;*/
/*color: #333;*/
/*text-align: center;*/
/*line-height: 60px;*/
/*}*/

/*.el-aside {*/
/*background-color: #D3DCE6;*/
/*color: #333;*/
/*text-align: center;*/
/*line-height: 200px;*/
/*}*/

/*.el-main {*/
/*background-color: #E9EEF3;*/
/*color: #333;*/
/*text-align: center;*/
/*line-height: 160px;*/
/*}*/

/*body > .el-container {*/
/*margin-bottom: 40px;*/
/*}*/

/*.el-container:nth-child(5) .el-aside,*/
/*.el-container:nth-child(6) .el-aside {*/
/*line-height: 260px;*/
/*}*/

/*.el-container:nth-child(7) .el-aside {*/
/*line-height: 320px;*/
/*}*/
</style>

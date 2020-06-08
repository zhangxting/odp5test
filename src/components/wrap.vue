<template>
    <div>
        <Webheader></Webheader>
        <div class="box">
            <leftnav></leftnav>
            <slot></slot>
        </div>
    </div>
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
.box {
    display: flex;
    flex-direction: row;
}
</style>

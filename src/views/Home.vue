<template>
    <div class="home">
        我是标题君哦！这里会有面包也会有屑，听说有人模仿我
        <router-view />
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {}
};
</script>
<style lang="scss">
.home {
    background-color: #fbe9e7;
}
</style>

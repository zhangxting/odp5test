<template>
    <wrap>
        <div id="app">
            <router-view />
        </div>
    </wrap>
</template>
<script>
import wrap from "../components/wrap";

export default {
    name: "App",
    components: {
        wrap
    }
};
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>

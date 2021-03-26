<template>
    <el-header class="webheader">
        <div class="menu" @click="leftshow" :class="{ active: isactive }">
            <div class="hamburger"></div>
        </div>
        <div class="headerbtnlist">
            <el-button class="gamesbtn"></el-button>
        </div>
    </el-header>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "webheader",
    data() {
        return {
            isactive: false
        };
    },
    methods: {
        leftshow() {
            this.isactive = !this.isactive;
            this.$store.commit("CHANGE_LEFTOPEN", this.isactive);
        }
    },
    computed: {
        ...mapState(["asidedBtn"])
    }
};
</script>

<style scoped lang="scss">
.webheader {
    background: cornflowerblue;
    display: flex;
    .menu {
        position: relative;
        top: 10%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        border-radius: 6%;
        color: #cecece;

        &.active {
            .hamburger {
                background-color: transparent;
                box-shadow: none;

                &::before {
                    top: 0;
                    transform: rotate(45deg);
                }

                &::after {
                    top: 0;
                    transform: rotate(135deg);
                }
            }
        }
    }

    .hamburger {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &,
        &::before,
        &::after {
            content: "";
            position: absolute;
            width: 50px;
            height: 6px;
            background: #ffffff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            transition: 0.5s;
        }

        &::before {
            top: -16px;
            right: 0;
        }

        &::after {
            top: 16px;
            left: 0px;
        }
    }
    .headerbtnlist {
        text-align: center;
        .gamesbtn {
            height: 30px;
            width: 120px;
            margin-left: 30px;
            margin-top: 14px;
            padding: 0;
        }
    }
}
</style>

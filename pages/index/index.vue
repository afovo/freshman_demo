<template>
    <reg v-if="isRegistering" @close="isRegistering = false"></reg>
    <div class="bg">
        <div class="sign">
            <span class="fast-flicker">B</span><span class="flicker">L</span>an<span class="fast-flicker">k</span> &nbsp;
            <span class="flicker">S</span>p<span class="fast-flicker">ace</span>
        </div>
        <div class="login-box">
            <form>
                <div class="user-box">
                    <input type="text" name="userName" required>
                    <label>用户名</label>
                </div>
                <div class="user-box" style="padding-top: 10px;">
                    <input type="text" name="password" required>
                    <label>密码</label>
                </div>
                <div style="padding-top: 30px;">
                    <a href="/user">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        登录
                    </a>
                    <a @click="isRegistering = true;" style="left: 160px;">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        注册
                    </a>
                </div>
            </form>
        </div>
    </div>
    <h1>首页</h1>
</template>

<script setup lang="ts">
import reg from '../user/reg.vue';
const isRegistering = ref(false)
</script>

<style scoped>
@import url("~/assets/css/login.css");
</style>
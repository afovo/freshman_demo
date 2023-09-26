<template>
    <div class="bg">
        <div>
            <Button1 :text="'关于'" @click="toPage('login')" style="position: absolute;top:1%;right:10%"></Button1>
            <Button1 :text="'登录/注册'" @click="toPage('login')" style="position: absolute;top:1%;right: 2%" ></Button1>
        </div>
        <div class="sign">
            <span class="fast-flicker">B</span><span class="flicker">L</span>an<span class="fast-flicker">k</span> &nbsp;
            <span class="flicker">S</span>p<span class="fast-flicker">ace</span>
        </div>
        <div class="login-box" id="login">
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
                    <a href="/user/reg" style="left: 160px;">
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
</template>

<script setup lang="ts">
import reg from '../user/reg.vue';
import axios from "axios";

var users;
function toPage(id: string): void {
    document.getElementById(id)!.scrollIntoView({ behavior: "smooth" });
}
//同样需要在create中调用
// async function getTest() {
//     const mockData = await axios.get("user.json")
//     console.log("mockData", mockData)
//     // axios.get("/puge/test")
//     // .then(res => console.log(res.data))
//     // .catch(err => console.log(err));
// }
// getTest()
</script>

<style scoped>
@import url("~/assets/css/login.css");
</style>
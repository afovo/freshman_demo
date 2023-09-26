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
            <form @submit.prevent="login">
                <div class="user-box">
                    <input type="text" name="uname" property="uname" v-model="loginForm.uname" required>
                    <label>用户名</label>
                </div>
                <div class="user-box" style="padding-top: 10px;">
                    <input type="text" name="password" property="password" v-model="loginForm.password" required>
                    <label>密码</label>
                </div>
                <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
                <div style="padding-top: 30px;">
                    <button type="submit">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        登录
                    </button>
                    <button @click="$router.push('/user/reg')" style="left: 160px;">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        注册
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usersStore } from '@/stores/users';
import { useRouter } from 'vue-router';
const usersAPI = usersStore()
const router = useRouter()
const loginForm = ref({
    uname: '',
    password:''
})
const errorMessage = ref('')
async function login(event:any) {
    event.preventDefault();
    const flag = usersAPI.$state.find(user => user.uname === loginForm.value.uname && user.password === loginForm.value.password);
    if (flag) {
        // 用户验证成功，执行相关操作
        // 1. 存储用户的 token（假设 token 存在 user 对象中）
        // 2. 跳转到 /user 页面并显示当前用户的信息
        // 你可以使用路由库来进行页面跳转和参数传递
        // 这里假设你已经配置好了路由
        // 如果你使用的是 Vue Router，可以像下面这样使用：
        // this.$router.push({ path: '/user', query: { user: JSON.stringify(user) } });
        console.log(router)
        router.push('/user')
        // 清空错误消息
        errorMessage.value = '';
    } else {
        // 用户验证失败，显示错误消息
        errorMessage.value = '用户名或密码错误';
    }
}
function toPage(id: string): void {
    document.getElementById(id)!.scrollIntoView({ behavior: "smooth" });
}

</script>

<style scoped>
@import url("~/assets/css/login.css");
</style>
<template>
    <div class="bg">
        <div>
            <Button1 :text="'关于'" @click="toPage('login')" style="position: absolute;top:1%;right:10%"></Button1>
            <Button1 :text="'登录/注册'" @click="toPage('login')" style="position: absolute;top:1%;right: 2%"></Button1>
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
                    <button @click="$router.push('/reg')" style="left: 160px;">
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
    password: ''
})
const errorMessage = ref('')

async function login(event: any) {
    event.preventDefault();
    await usersAPI.getAllUsers;
    if (usersAPI.data !== null) {
        const users: Array<any> = usersAPI.data;
        var flag: boolean = false;
        var token: string = '';
        // const flag = users.find(user => user.uname === loginForm.value.uname && user.password === loginForm.value.password);
        users.forEach((user) => {
            if (user.uname === loginForm.value.uname && user.password === loginForm.value.password) {
                flag = true;
                token = user.id + '';
            }
        })
        if (flag) {
            localStorage.setItem('token', token);
            router.push('/user')
            errorMessage.value = '';
        } else {
            errorMessage.value = '用户名或密码错误';
        }
    } else {
        console.error(usersAPI.error)
    }

}
function toPage(id: string): void {
    document.getElementById(id)!.scrollIntoView({ behavior: "smooth" });
}

</script>

<style scoped>
@import url("~/assets/css/login.css");
</style>
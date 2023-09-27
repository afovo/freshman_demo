<template>
  <NavBar></NavBar>
  <div style="margin-left: 170px;margin-top: 50px;">
    <div class="px-4 sm:px-0">
      <h3 class="text-base font-semibold leading-7 text-gray-900">个人信息</h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details</p>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">姓名</dt>
          <div class="relative mt-2 rounded-md shadow-sm">
            <input type="text" name="price" id="price"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="0.00">
          </div>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ info.uname }}
            <ElButton :icon="ElIconEditPen" style="margin-left: 20px;" />
          </dd>

        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">学号</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ info.uid }}
            <ElButton :icon="ElIconEditPen" style="margin-left: 20px;" />
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">年级</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ info.grade }}
            <ElButton :icon="ElIconEditPen" style="margin-left: 20px;" />
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">密码</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ info.password }}
            <ElButton :icon="ElIconHide" style="margin-left: 20px;" />
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { usersStore } from '@/stores/users';
import { useRouter } from 'vue-router';
const usersAPI = usersStore();
const router = useRouter();
const info = ref({
  uname: '',
  uid: '',
  grade: '',
  password: ''
})
if (usersAPI.data !== null) {
  const users: Array<any> = usersAPI.data
  if (typeof localStorage != 'undefined' && localStorage.getItem('token') != null) {
    console.log(localStorage.getItem('token'))
    const id = localStorage.getItem('token');
    users.forEach((user) => {
      if (user.id === Number(id)) {
        info.value.uid = user.uid;
        info.value.uname = user.uname;
        info.value.grade = user.grade;
        info.value.password = user.password;
        return;
      }
    })
  }
} else {
  ElMessage({
      showClose: true,
      message: '出错：数据库中暂无用户，请联系管理员',
      type: 'error',
    });
}

</script>

<style scoped></style>
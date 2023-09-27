<template>
  <NavBar></NavBar>
  <div style="margin-left: 170px;margin-top: 50px;">
    <div class="px-4 sm:px-0">
      <h3 class="text-xl font-semibold leading-7 text-gray-900">个人信息</h3>
      <p class="mt-1 max-w-2xl text-xm leading-6 text-gray-500">Personal details</p>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-l font-medium leading-6 text-gray-900">姓名</dt>
          <div class="relative mt-2 rounded-md shadow-sm" v-if="isEditing.uname">
            <input type="text" name="uname" id="uname"
              class="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6"
              v-model="info.uname">
            <ElButton :icon="ElIconCheck" @click="isEditing.uname = false" style="margin-left: 20px;" />
          </div>
          <dd class="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0" v-else>
            {{ info.uname }}
            <ElButton :icon="ElIconEditPen" @click="isEditing.uname = true" style="margin-left: 20px;" />
          </dd>

        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-l font-medium leading-6 text-gray-900">学号</dt>
          <div class="relative mt-2 rounded-md shadow-sm" v-if="isEditing.uid">
            <input type="text" name="uid" id="uid"
              class="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6"
              v-model="info.uid">
            <ElButton :icon="ElIconCheck" @click="isEditing.uid = false" style="margin-left: 20px;" />
          </div>
          <dd class="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0" v-else>{{ info.uid }}
            <ElButton :icon="ElIconEditPen" @click="isEditing.uid = true" style="margin-left: 20px;" />
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-l font-medium leading-6 text-gray-900">年级</dt>
          <dd class="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ info.grade }}
            <ElButton :icon="ElIconEditPen" @click="isEditing.password = true" style="margin-left: 20px;" />
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-l font-medium leading-6 text-gray-900">密码</dt>
          <div class="relative mt-2 rounded-md shadow-sm" v-if="isEditing.password">
            <input type="text" name="password" id="password"
              class="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6"
              v-model="info.password">
            <ElButton :icon="ElIconCheck" @click="isEditing.password = false" style="margin-left: 20px;" />
          </div>
          <dd class="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0" v-else>{{ info.password }}
            <ElButton :icon="ElIconEditPen" @click="isEditing.password = true" style="margin-left: 20px;" />
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usersStore } from '@/stores/users';
import { useRouter } from 'vue-router';
const usersAPI = usersStore();
const router = useRouter();
const info = ref({
  id: 0,
  uname: '',
  uid: '',
  grade: '',
  password: ''
})
const isEditing = ref({
  uname: false,
  uid: false,
  grade: false,
  password: false
})
const users: Array<any> = usersAPI.getAllUsers
if (typeof localStorage != 'undefined' && localStorage.getItem('token') != null) {
  console.log(localStorage.getItem('token'))
  const id = localStorage.getItem('token');
  console.log(users)
  users.forEach((user) => {
    if (user.id === Number(id)) {
      info.value.id = user.id;
      info.value.uid = user.uid;
      info.value.uname = user.uname;
      info.value.grade = user.grade;
      info.value.password = user.password;
      console.log(info.value)
      return;
    }
  })
}

watch(info.value, (newValue, oldValue) => {
  usersAPI.updateInfo(info.value);
  console.log(usersAPI.getAllUsers);
});
</script>

<style scoped></style>
<template>
  <NavBar></NavBar>
  <!-- left panel -->
  <div style="position:absolute;left:12%;top:20%;width:15%;height:100%;">
    <div class="rounded-full bg-gray-400 flex items-center justify-center"
      style="width: 200px;height:200px;font-size: 30pt;">{{ info.uname[0] }}</div>
    <div v-if="!isEditing">
      <ElButton :icon="ElIconEdit" @click="isEditing = true;" style="width: 200px;margin-top: 20px;">
        修改个人信息</ElButton>
      <p v-if="info.lastEdited.length === 0" class="mt-1 text-xs leading-5 text-gray-500">Never edited</p>
      <p v-else class="mt-1 text-xs leading-5 text-gray-500">Last Edited: {{ info.lastEdited }}</p>
    </div>

    <div v-else>
      <ElButton :icon="ElIconCheck" @click="isEditing = false; updateInfo();" style="width:90px;margin-top: 20px;">确定
      </ElButton>
      <ElButton :icon="ElIconDelete" @click="isEditing = false;" style="width:90px;margin-top: 20px;">取消</ElButton>
    </div>
  </div>

  <!-- right panel -->
  <div style="position:absolute;left:32%;top:20%;width:60%;padding-left:70px;border-left: thin solid #b4b4b4;">
    <div class="px-4 sm:px-0">
      <h3 class="text-xl font-semibold leading-7 text-gray-900">个人信息</h3>
      <p class="mt-1 max-w-2xl text-xm leading-6 text-gray-500">Personal details</p>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-l font-medium leading-6 text-gray-900">姓名</dt>
          <div class="relative mt-2 rounded-md shadow-sm" v-if="isEditing">
            <input type="text" name="uname" id="uname"
              class="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6"
              v-model="info.uname">
          </div>
          <dd class="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0" v-else>
            {{ info.uname }}
          </dd>

        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-l font-medium leading-6 text-gray-900">学号</dt>
          <div class="relative mt-2 rounded-md shadow-sm" v-if="isEditing">
            <input type="text" name="uid" id="uid"
              class="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6"
              v-model="info.uid">
          </div>
          <dd class="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0" v-else>{{ info.uid }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-l font-medium leading-6 text-gray-900">年级</dt>

          <el-select :size="'large'" style="width: 290px;" v-if="isEditing" v-model="info.grade" placeholder="请选择年级">
            <el-option label="大一" value="1" />
            <el-option label="大二" value="2" />
            <el-option label="大三" value="3" />
            <el-option label="大四" value="4" />
            <el-option label="研究生" value="5" />
            <el-option label="博士生" value="6" />
          </el-select>
          <dd v-else class="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ info.grade }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-l font-medium leading-6 text-gray-900">密码</dt>
          <div class="relative mt-2 rounded-md shadow-sm" v-if="isEditing">
            <input type="text" name="password" id="password"
              class="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6"
              v-model="info.password">
          </div>
          <dd v-if="showPassword" class="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ info.password }}
            <ElButton :icon="ElIconHide" @click="showPassword = false" style="margin-left: 20px;" />
          </dd>
          <dd v-else-if="!isEditing" class="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">******
            <ElButton :icon="ElIconHide" @click="showPassword = true" style="margin-left: 20px;" />
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
import { getCurrentTime } from '~/utils/utils';

const usersAPI = usersStore();
const router = useRouter();
var info = ref({
  id: 0,
  uname: '',
  uid: '',
  grade: '',
  password: '',
  lastEdited: ''
});
const isEditing = ref(false)
const showPassword = ref(false)

if (typeof localStorage != 'undefined' && localStorage.getItem('token') != null) {
  console.log(localStorage.getItem('token'))
  const id = localStorage.getItem('token');
  info = ref(usersAPI.getUserByID(Number(id)))
}

async function updateInfo() {
  info.value.lastEdited = getCurrentTime();
  usersAPI.updateInfo(info.value);
  console.log(usersAPI.getAllUsers);
}
</script>

<style scoped></style>
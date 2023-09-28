<template>
  <div class="p-8 sm:p-10 lg:flex-auto">
    <h4 v-if="!isEditing" class="text-2xl font-bold tracking-tight text-gray-900">{{ info.uname }}</h4>
    <div class="relative mt-1 rounded-md shadow-sm" v-else>
          <input type="text" name="grade" id="grade"
            class="w-2/3 rounded-md border-0 py-1.5 pl-6 pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6"
            v-model="info.uname">
    </div>

    <div class="mt-10 flex items-center gap-x-4">
      <h4 class="flex-none text-sm font-semibold leading-6 text-indigo-600">详细信息</h4>
      <div class="h-px flex-auto bg-gray-100"></div>
    </div>
    <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
      <li class="flex gap-x-3">
        <p style="white-space: nowrap">学号：</p>
        <p v-if="!isEditing">{{ info.uid }}</p>
        <div class="relative mt-1 rounded-md shadow-sm" v-else>
          <input type="text" name="uname" id="uname"
            class="w-2/3 rounded-md border-0 py-1.5 pl-6 pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6"
            v-model="info.uid">
        </div>
      </li>
      <li class="flex gap-x-3">
        <p style="white-space: nowrap">年级：</p>
        <p v-if="!isEditing">{{ info.grade }}</p>
        <el-select :size="'large'" style="width: 120px;" v-else v-model="info.grade" placeholder="请选择年级">
            <el-option label="大一" value="1" />
            <el-option label="大二" value="2" />
            <el-option label="大三" value="3" />
            <el-option label="大四" value="4" />
            <el-option label="研究生" value="5" />
            <el-option label="博士生" value="6" />
          </el-select>
      </li>
      <li class="flex gap-x-3">
        <p style="white-space: nowrap">密码：</p>
        <p v-if="!isEditing">密码：{{ info.password }}</p>
        <div class="relative mt-1 rounded-md shadow-sm" v-else>
          <input type="text" name="password" id="password"
            class="w-2/3 rounded-md border-0 py-1.5 pl-6 pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6"
            v-model="info.password">
        </div>
      </li>
    </ul>
    <div>
      <div v-if="!isEditing">
        <ElButton :icon="ElIconEdit" @click="isEditing = true;" style="width: 100%;margin-top: 20px;">
          修改个人信息</ElButton>
      </div>
      <div v-else>
        <ElButton :icon="ElIconCheck" @click="isEditing = false;updateInfo()" style="width:45%;margin-top: 20px;">确定
        </ElButton>
        <ElButton :icon="ElIconDelete" @click="isEditing = false;" style="width:45%;margin-top: 20px;">取消</ElButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usersStore } from '@/stores/users';
import { useRouter } from 'vue-router';
const usersAPI = usersStore();
import { toRefs } from "vue";
import { getCurrentTime } from '~/utils/utils';
const props = defineProps({
  id: Number
})

var info = ref({
  id: 0,
  uname: '',
  uid: '',
  grade: '',
  password: '',
  lastEdited: ''
})
const isEditing = ref(false)
info = ref(usersAPI.getUserByID(Number(props.id)))

async function updateInfo() {
  info.value.lastEdited = getCurrentTime();
  usersAPI.updateInfo(info.value);
  console.log(usersAPI.getAllUsers);
}

</script>

<style scoped></style>
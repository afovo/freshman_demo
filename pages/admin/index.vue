<template>
  <NavBar></NavBar>
  <div style="margin-left:90px; margin-top: 50px; width: 85%; height: 80%;">
    <ul role="list" class="divide-y divide-gray-100"
      style="margin-left: 70px;margin-right: 70px;margin-top: 50px;width: 85%; height: 80%;">
      <li v-for="user in usersAPI.getAllUsers" class="flex justify-between gap-x-6 py-5">
        <el-popover placement="bottom" :width="600" trigger="hover" :offset="0">
          <!-- 弹窗详细信息 -->
          <template #default>
            <UserInfo :id="user.id"></UserInfo>
          </template>
          <!-- 用户列表内容 -->
          <template #reference>
            <div class="flex min-w-0 gap-x-4" style="width: 100%;">
              <div class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center">
                {{ user.uname[0] }}
              </div>
              <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">{{ user.uname }}</p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ user.uid }}</p>
              </div>
              <div style="position: absolute;right: 10%;" class="text-sm leading-6 text-gray-900">
                <ElButton :icon="ElIconDelete" @click="usersAPI.deleteUser(user.id)" style="position: absolute;width:90px;right:0">删除</ElButton>
                <p v-if="user.lastEdited.length === 0" style="position: absolute;right: 100px;width:100px" class="mt-1 text-xs leading-5 text-gray-500">Never edited</p>
                <p v-else class="mt-1 text-xs leading-5 text-gray-500" style="position: absolute;right: 100px;width:200px">Last Edited: {{ user.lastEdited }}</p>
              </div>
            </div>
          </template>
        </el-popover>
      </li>
    </ul>
    <ElButton :icon="ElIconPlus" @click="" style="position:absolute;right:10%;width:200px;">添加用户</ElButton>
  </div>
</template>
  
<script lang="ts" setup>
import { usersStore } from '~/stores/users';
import { getCurrentTime } from '~/utils/utils';

const usersAPI = usersStore();
const router = useRouter();


</script>
  
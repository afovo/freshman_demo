<template>
  <NavBar></NavBar>
  <div style="margin-left:90px; margin-top: 50px; width: 85%; height: 80%;">
    
    <ul role="list" class="divide-y divide-gray-100" style="margin-left: 70px;margin-right: 70px;margin-top: 50px;width: 85%; height: 80%;">

      <li v-for="user in usersAPI.getAllUsers" class="flex justify-between gap-x-6 py-5">
        <el-popover placement="top" title="Title" :width="200" trigger="hover" :offset="0">
          <!-- 弹窗详细信息 -->
          <template #default>
        <UserInfo></UserInfo>
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
              <div style="position: absolute;right: 10%;">
                <p class="text-sm leading-6 text-gray-900">
                <ElButton :icon="ElIconEditPen" @click="" style="margin-left: 20px;" />
              </p>
              <p class="mt-1 text-xs leading-5 text-gray-500">Last Edit <time datetime="2023-01-23T13:23Z">3h ago</time>
              </p>
              </div>
            </div>
            <div class="shrink-0 sm:flex sm:flex-col sm:items-end">
              <p class="text-sm leading-6 text-gray-900">
                <ElButton :icon="ElIconEditPen" @click="" style="margin-left: 20px;" />
              </p>
              <p class="mt-1 text-xs leading-5 text-gray-500">Last Edit <time datetime="2023-01-23T13:23Z">3h ago</time>
              </p>
            </div>
          </template>
        </el-popover>
      </li>
    </ul>
  </div>

  <!-- <el-table :data="tableData" style="width: 100%">
      <el-table-column label="Date" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Name" width="180">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default>
              <div>name: {{ scope.row.name }}</div>
              <div>address: {{ scope.row.address }}</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.name }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table> -->
</template>
  
<script lang="ts" setup>
import { usersStore } from '~/stores/users';

const usersAPI = usersStore();
const router = useRouter();

</script>
  
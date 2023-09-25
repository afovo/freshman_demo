<template>
    <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
    <el-descriptions title="User Info">
        <el-descriptions-item label="姓名">{{ user.uname }}</el-descriptions-item>
        <el-descriptions-item label="学号">{{ user.id }}</el-descriptions-item>
        <el-descriptions-item label="年级">{{ user.grade }}</el-descriptions-item>
        
        <el-descriptions-item label="密码">
            <el-button type="primary">
                <el-icon :size="20">
                    <Edit />
                </el-icon>
            </el-button>
        </el-descriptions-item>
        <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
            Province</el-descriptions-item>
    </el-descriptions>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const user = reactive(
    {
        uname: 'afovo',
        id: '',
        grade: '',
        password: ''
    }
)
</script>

<style scoped></style>
<script setup lang="ts">
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  uname: '',
  id: '',
  grade: '',
  password: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <div class="form-grid" @mousewheel.prevent>
    <el-form :model="form" label-width="90px" size="large" style="padding-top: 20px;">
      <el-form-item label="姓名">
        <el-input v-model="form.uname" />
      </el-form-item>
      <el-form-item label="学号">
        <el-input v-model="form.id" />
      </el-form-item>
      <el-form-item label="年级">
        <el-select v-model="form.grade" placeholder="请选择你的年级">
          <el-option label="大一" value="1" />
          <el-option label="大二" value="2" />
          <el-option label="大三" value="3" />
          <el-option label="大四" value="4" />
          <el-option label="研究生" value="5" />
          <el-option label="其它" value="6" />
        </el-select>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">注册</el-button>
        <el-button @click="$emit('close')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="page" @mousewheel.prevent></div>
</template>

<style scoped>
.page {
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 150%;
  z-index: 100;
  background-color: #000000;
  opacity: 0.5;
}

.form-grid {
  z-index: 101;
  position: absolute;
  background-color: #FFFFFF;
  /*border: 3px solid #FAC46E;*/
  box-shadow: 0px 3px 7px 2px #696058;
  top: 20%;
  left: 18%;
  width: 60%;
  height: 40%;
  margin: 20px;
  padding: 20px;
  overflow-y: scroll;
}
</style>
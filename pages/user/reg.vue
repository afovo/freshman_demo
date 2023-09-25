<template>
  <div class="form-grid">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
      status-icon style="padding-top: 40px;">
      <el-form-item label="姓名" prop="uname">
        <el-input v-model="ruleForm.uname" />
      </el-form-item>
      <el-form-item label="学号" prop="id">
        <el-input v-model="ruleForm.id" />
      </el-form-item>

      <el-form-item label="年级" prop="grade">
        <el-select v-model="ruleForm.grade" placeholder="请选择年级">
          <el-option label="大一" value="shanghai" />
          <el-option label="大二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          注册
        </el-button>
        <el-button @click="$emit('close')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="bg"></div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  uname: string
  id: string
  grade: string
  password: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  uname: '',
  id: '',
  grade: '',
  password: ''
})

const rules = reactive<FormRules<RuleForm>>({
  uname: [
    { required: true, message: '姓名不能为空', trigger: 'blur' },
    { min: 3, max: 5, message: '姓名长度需在3到5之间', trigger: 'blur' },
  ],
  id: [
    {
      required: true,
      message: '学号不能为空',
      trigger: 'blur',
    },
  ],
  grade: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur',
    },
    {
      
    }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>

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
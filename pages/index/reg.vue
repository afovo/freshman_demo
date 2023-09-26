<template>
  <div class="form-grid">
    <el-form ref="ruleFormRef" :size="'large'" :rules="rules" :model="ruleForm" label-width="120px" class="demo-ruleForm" status-icon
      style="padding-top: 50px;">
      <el-form-item label="姓名" prop="uname">
        <el-input v-model="ruleForm.uname" />
      </el-form-item>
      <el-form-item label="学号" prop="uid">
        <el-input v-model="ruleForm.uid" />
      </el-form-item>

      <el-form-item label="年级" prop="grade">
        <el-select v-model="ruleForm.grade" placeholder="请选择年级">
          <el-option label="大一" value="1" />
          <el-option label="大二" value="2" />
          <el-option label="大三" value="3" />
          <el-option label="大四" value="4" />
          <el-option label="研究生" value="5" />
          <el-option label="博士生" value="6" />
        </el-select>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item label="确认密码" prop="password1">
        <el-input v-model="ruleForm.password1" />
      </el-form-item>
      <el-form-item>
        <Button1 :text="'注册'" @click="submitForm(ruleFormRef)" style="padding: 5px;" />
        <NuxtLink to="/">
          <Button2 :text="'取消'" />
        </NuxtLink>
      </el-form-item>
    </el-form>
  </div>
  <div class="wave" style="height: 31px;opacity: 60%"></div>
  <div class="wave" style="height: 19px;"></div>
  <div class="page"></div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { usersStore } from '@/stores/users'
import {useRouter} from 'vue-router'
const usersAPI = usersStore()
const router = useRouter()
interface RuleForm {
  uname: string
  uid: string
  grade: string
  password: string
  password1: string
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  uname: '',
  uid: '',
  grade: '',
  password: '',
  password1: ''
})

const uniqueID = (rule: any, value: string, callback: any) => {
  if (usersAPI.data !== null) {
    const a: Array<any> = usersAPI.data
    for (let item of a) {
      if (item.uid === value) {
        return callback('该学号已被 ' + item.uname + ' 注册');
      }
    }
  }
  callback();
}
const passwordCheck = (rule: any, value: string, callback: any) => {
  if (ruleForm.password !== value) {
    return callback('两次输入的密码不一致');
  }
  callback();
}
const rules = reactive<FormRules<RuleForm>>({
  uname: [
    { required: true, message: '姓名不能为空', trigger: 'blur' },
    { min: 3, max: 5, message: '姓名长度需在3到5之间', trigger: 'blur' },
  ],
  uid: [
    {
      required: true,
      message: '学号不能为空',
      trigger: 'blur',
    },
    { validator: uniqueID, trigger: 'blur' }
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
  ],
  password1: [
    {
      required: true,
      message: '请再次输入密码',
      trigger: 'blur',
    },
    { validator: passwordCheck, trigger: 'blur' }
  ]
})


const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      const id = usersAPI.addUser(ruleForm);
      localStorage.setItem('token', id+'');
      router.push('/user');
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
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: #141114;
}

.form-grid {
  z-index: 101;
  position: absolute;
  background-color: #FFFFFF;
  /*border: 3px solid #FAC46E;*/
  box-shadow: 0px 3px 7px 2px #dbd4e4;
  top: 15%;
  left: 18%;
  width: 60%;
  height: 65%;
  margin: 20px;
  padding: 20px;
  overflow-y: scroll;
}

.wave {
  position: absolute;
  width: 100%;
  z-index: 12;
  left: 0;
  bottom: 0;
  background: url('../../assets/pic/wave.png') 0 0 repeat-x;
  -webkit-animation: wave-animation1 6.3s infinite linear;
  /* Safari 4+ */
  -moz-animation: wave-animation1 6.3s infinite linear;
  /* Fx 5+ */
  -o-animation: wave-animation1 6.3s infinite linear;
  /* Opera 12+ */
  animation: wave-animation1 6.3s infinite linear;
  /* IE 10+ */
}

@-webkit-keyframes wave-animation1 {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 1601px 0;
  }
}

@-moz-keyframes wave-animation1 {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 1601px 0;
  }
}

@-o-keyframes wave-animation1 {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 1601px 0;
  }
}

@keyframes wave-animation1 {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 1601px 0;
  }
}
</style>
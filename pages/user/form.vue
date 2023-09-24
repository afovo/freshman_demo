<script setup lang="ts">
const form = reactive({
      name: '',
      gender: '',
      qq: '',
      wx: '',
      province: '',
      school: '',
      major: [],
      hobby: [],
      restTime: '',
      cleanFreq: '',
      gameFreq: '',
      scores: [1, 1, 1, 1, 1],
      selfDescription: ''
    });
const provinces = [
      {label: "北京市", value: "北京市"},

      {label: "天津市", value: "天津市"},

      {label: "河北省", value: "河北省"},

      {label: "山西省", value: "山西省"},

      {label: "内蒙古自治区", value: "内蒙古自治区"},

      {label: "辽宁省", value: "辽宁省"},

      {label: "吉林省", value: "吉林省"},

      {label: "黑龙江省", value: "黑龙江省"},

      {label: "上海市", value: "上海市"},

      {label: "江苏省", value: "江苏省"},

      {label: "浙江省", value: "浙江省"},

      {label: "安徽省", value: "安徽省"},

      {label: "福建省", value: "福建省"},

      {label: "江西省", value: "江西省"},]
</script>

<template>
    <div class="form-grid">
      <a-form ref="formRef" :model="form" :size="'large'" :style="{width:'100%',height:'100%'}">
        <!--    header        @submit="handleSubmit" -->

        <a-space direction="vertical" size="medium" fill style="width:800px;height: 130px;">
          <a-form-item>
            <template #extra>
              <div>系统将分析下列内容为您推荐室友，请认真填写哦！（登陆后可在个人主页进行更改）</div>
            </template>
            <div style="font-size: 12pt">请先完善一下个人信息吧~</div>
          </a-form-item>
        </a-space>

        <!--     name, gender   -->
        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-item field="name" label="姓名"
                         :rules="[{required:true,message:'姓名不能为空'},{minLength:2,message:'至少输入两个词'}]"
                         :validate-trigger="['change','input']">
              <a-input v-model="form.name" placeholder="请输入您的姓名..."/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item field="gender" label="性别"
                         :rules="[{required:true,message:'性别不能为空'}]"
                         :validate-trigger="['change','input']">
              <a-radio-group v-model="form.gender">
                <a-radio value="女">女</a-radio>
                <a-radio value="男">男</a-radio>
              </a-radio-group>
              <a-upload :limit="1">
                <template #upload-button>
                  <div class="arco-upload-picture-card">
                    <div class="arco-upload-picture-card-text">
                      <IconPlus/>
                      <div style="margin-top: 10px; font-weight: 600">上传头像</div>
                    </div>
                  </div>
                </template>
              </a-upload>
            </a-form-item>

          </a-col>
          <!--    qq,wx    -->
        </a-row>
        <!--     qq,wx   -->
        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-item field="qq" label="QQ号"
                         :rules="[{required:true,message:'QQ号不能为空'},{minLength:2,message:'至少输入两个词'}]"
                         :validate-trigger="['change','input']">
              <a-input v-model="form.qq" placeholder="请输入您的QQ号..."/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item field="wx" label="微信号"
                         :rules="[{required:true,message:'微信号不能为空'},{minLength:2,message:'至少输入两个词'}]"
                         :validate-trigger="['change','input']">
              <a-input v-model="form.wx" placeholder="请输入您的微信号..."/>
            </a-form-item>
          </a-col>

        </a-row>
        <!--     province,school   -->
        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-item field="province" label="省份" :rules="[{required:true,message:'请选择您的省份'}]">
              <a-cascader v-model="form.province" :options="provinces" :allow-search="{ retainInputValue: true }"
                          placeholder="请选择您的省份..." allow-clear/>
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item field="school" label="毕业院校"
                         :rules="[{required:true,message:'请输入您的毕业院校'},{minLength:2,message:'至少输入两个词'}]">
              <a-input v-model="form.school" placeholder="请输入您的母校..."/>
            </a-form-item>
          </a-col>
        </a-row>
        <!--     major   -->
        <a-row :gutter="16">
          <a-col :span="11" min-width="180">
            <a-form-item field="major" label="意向专业" :rules="[{required:true,message:'请选择您的意向专业'}]">
              <a-tree-select
                  v-model="form.major"
                  :allow-clear="true"
                  :tree-checkable="true"
                  :tree-check-strictly="false"
                  :tree-checked-strategy="'child'"
                  placeholder="请选择您的意向专业..."
              ></a-tree-select>
            </a-form-item>
          </a-col>
          <a-col :span="11">
            <a-form-item v-if="form.major.length!==0" field="scores0" label="Score0">
              <a-rate v-model="form.scores[0]" allow-clear/>
              <template #extra>
                <div>请选择您[想要相同专业的舍友]的程度</div>
              </template>
            </a-form-item>
          </a-col>
        </a-row>
        <!--     hobby-->
        <a-row :gutter="16">
          <a-col :span="11" min-width="180">
            <a-form-item field="hobby" label="兴趣爱好" :rules="[{required:true,message:'请选择您的兴趣爱好'}]">
              <a-tree-select
                  v-model="form.hobby"
                  :allow-clear="true"
                  :tree-checkable="true"
                  :tree-check-strictly="false"
                  :tree-checked-strategy="'child'"
                  placeholder="请选择您的兴趣爱好..."
              ></a-tree-select>
            </a-form-item>
          </a-col>
          <a-col :span="11">
            <a-form-item v-if="form.hobby.length!==0" field="scores1" label="Score1">
              <a-rate v-model="form.scores[1]" allow-clear/>
              <template #extra>
                <div>请选择您[想要相同爱好的舍友]的程度</div>
              </template>
            </a-form-item>
          </a-col>
        </a-row>
        <!--     resting time-->
        <a-row :gutter="16">
          <a-col :span="7">
            <a-form-item :style="{width:'650px'}" field="restTime" label="最晚睡觉时间"
                         :rules="[{required:true,message:'请选择最晚睡觉时间'}]">
              <a-time-picker
                  v-model="form.restTime"
              />
            </a-form-item>
          </a-col>
          <a-col :span="11">
            <a-form-item v-if="form.restTime!==''" field="scores2" label="Score2">
              <a-rate v-model="form.scores[2]" allow-clear/>
              <template #extra>
                <div>请选择您[想要相似作息的舍友]的程度</div>
              </template>
            </a-form-item>
          </a-col>
        </a-row>
        <!--      cleaning frequency-->
        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-item :style="{width:'910px'}" field="cleanFreq" label="平均每周打扫卫生次数"
                         :rules="[{required:true,message:'请选择打扫卫生频率'}]">
              <a-select :style="{width:'220px'}" v-model="form.cleanFreq" placeholder="请选择每周打扫卫生次数..."
                        allow-clear>
                <a-option>[7]</a-option>
                <a-option>[5,7)</a-option>
                <a-option>[3,5)</a-option>
                <a-option>[1,3)</a-option>
                <a-option>[0]</a-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="11">
            <a-form-item v-if="form.cleanFreq!==''" field="scores3" label="Score3">
              <a-rate v-model="form.scores[3]" allow-clear/>
              <template #extra>
                <div>请选择您[想要相同卫生习惯舍友]的程度</div>
              </template>
            </a-form-item>
          </a-col>
        </a-row>
        <!--      gaming frequency-->
        <a-row :gutter="16">
          <a-col :span="10">
            <a-form-item :style="{width:'970px'}" field="gameFreq" label="平均每周宿舍打游戏次数"
                         :rules="[{required:true,message:'请选择宿舍打游戏频率'}]">
              <a-select :style="{width:'280px'}" v-model="form.gameFreq" placeholder="请选择每周宿舍打游戏次数..."
                        allow-clear>
                <a-option>[7]</a-option>
                <a-option>[5,7)</a-option>
                <a-option>[3,5)</a-option>
                <a-option>[1,3)</a-option>
                <a-option>[0]</a-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="11">
            <a-form-item v-if="form.gameFreq!==''" field="scores4" label="Score4">
              <a-rate v-model="form.scores[4]" allow-clear/>
              <template #extra>
                <div>请选择您[重视宿舍打游戏行为]的程度</div>
              </template>
            </a-form-item>
          </a-col>
        </a-row>
        <!--        selfDescription-->
        <a-row :gutter="16">
          <a-col>
            <a-space direction="vertical" size="large" fill style="height: 115px;">
              <a-textarea v-model="form.selfDescription" style="height: 100px;" placeholder="请简单介绍一下自己吧~"
                          :max-length="200"
                          allow-clear show-word-limit/>
            </a-space>
          </a-col>
        </a-row>
        <a-space>
          <!-- <a-button status="success" html-type="submit" @click="submitForm([id, this.form])">提交</a-button>
          <a-button status="warning" @click="$refs.formRef.resetFields()">重置</a-button> -->
        </a-space>
      </a-form>
    </div>
</template>

<style scoped>

</style>
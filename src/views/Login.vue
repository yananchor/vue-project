<template>
  <el-container>
    <el-header>
    </el-header>
    <el-main>
      <div class="login-header">
        <div class="login-top">
          <img src="../assets/logo.png" width="50" />
          <span>Element Plus</span>
        </div>
        <p>Element Plus and Vue3</p>
      </div>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="账号密码登陆" name="userName">
          <el-form :rules="rules" :model="formData" ref="ruleFormRef">
            <el-form-item prop="userName">
              <el-input v-model="formData.userName" prefix-icon="User" placeholder="用户名: admin" size="large" />
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="formData.password" prefix-icon="Lock" placeholder="密码: admin" size="large"
                :show-password="true" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="手机号登陆" name="phoneNumber">
          <el-form :rules="rules" :model="formData" ref="ruleFormRef">
            <el-form-item prop="phoneNumber">
              <el-input v-model="formData.phoneNumber" prefix-icon="Cellphone" placeholder="请输入手机号" size="large" />
            </el-form-item>
            <el-form-item class="verify-code">
              <el-input v-model="formData.verificationCode" prefix-icon="Lock" placeholder="请输入验证码" size="large">
              </el-input>
              <el-button size="large">获取验证码</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <el-form-item class="auto-content">
        <el-checkbox label="自动登录" name="type" />
        <el-link type="primary" :underline="false">忘记密码？</el-link>
      </el-form-item>
      <el-button type="primary" class="login-btn" @click="login(ruleFormRef)">登录</el-button>
    </el-main>
    <el-footer>Element-Plus</el-footer>
  </el-container>
</template>
<script setup lang="ts">
import { FormInstance, FormRules } from "element-plus";
const ruleFormRef = ref<FormInstance>()
const checkPhoneNumber = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback()
  }
  let reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  if (!reg.test(value)) {
    callback(new Error('不合法的手机号！'))
  } else {
    callback()
  }
}
const rules = reactive<FormRules>({
  userName: [
    { required: true, message: '用户名是必填项！', trigger: 'blur' },
    { min: 3, max: 8, message: '用户名称长度在3-8之间', trigger: ['blur', 'change'] },
  ],
  password: [
    { required: true, message: '密码是必填项！', trigger: 'blur' }
  ],
  phoneNumber: [
    { required: true, message: '手机号是必填项！', trigger: 'blur' },
    { validator: checkPhoneNumber, trigger: ['blur', 'change'] }
  ]
})
</script>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "Login",
  data() {
    return {
      activeName: 'userName',
      formData: {
        userName: '',
        password: '',
        phoneNumber: '',
        verificationCode: ''
      }
    }
  },
  methods: {
    handleClick() {

    },
    login(formRef: any) {
      this.$router.push('/home')
      formRef.validate((valid: boolean) => {
        if (!valid) return;

      })
    }
  }
});
</script>
<style lang="scss">
.container {
  height: 100vh;
  background-color: #f0f2f5;
  align-items: center;
}

.el-main {
  width: 380px;

  .login-header {
    margin-bottom: 30px;
  }

  .login-top {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 30px;
      font-weight: 600;
      margin-left: 10px;
    }
  }
}


.el-footer {
  color: rgba(0, 0, 0, .45)
}

.demo-tabs {
  .el-tabs__content {
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }

  .el-tabs__header {
    margin-bottom: 10px;
  }

  .el-tabs__nav {
    float: none;
  }
}


.auto-content>.el-form-item__content {
  justify-content: space-between;
}

.verify-code .el-form-item__content {
  justify-content: space-between;

  .el-input {
    width: 65%;
  }
}

.login-btn {
  width: 100%;
}
</style>
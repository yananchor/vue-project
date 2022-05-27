<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header>
      </el-header>
      <el-main>
        <h1>Element Plus</h1>
        <p>Element Plus and Vue3</p>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="账号密码登陆" name="userName">
            <el-form>
              <el-input v-model="formData.userName" />
              <el-input v-model="formData.password" />
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="手机号登陆" name="phoneNumber">phoneNumber</el-tab-pane>
        </el-tabs>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Login",
  data() {
    return {
      activeName: 'userName',
      formData: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    handleClick() {

    }
  }
});
</script>
<style>
.container {
  width: 400px;
  margin: 0 auto;
}
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
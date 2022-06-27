<template>
  <div>
    <img src="../assets/logo.png" alt="" width="30" height="30">
    <span>Element Plus</span>
  </div>
  <div>
    <el-icon>
      <Search />
    </el-icon>
    <el-icon>
      <Bell />
    </el-icon>
    <el-dropdown>
      <div class="el-dropdown-link">
        <el-avatar src="../assets/initAvatar.png" size="small"></el-avatar>
        <span>{{ userName }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="user">个人中心</el-dropdown-item>
          <el-dropdown-item icon="setting">个人设置</el-dropdown-item>
          <el-dropdown-item icon="switchButton" divided>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown>
      <div class="el-dropdown-link">
        <i class="iconfont translate"></i>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>简体中文</el-dropdown-item>
          <el-dropdown-item>English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      userName: 'Emily'
    }
  }
});
</script>

<style scoped>
</style>

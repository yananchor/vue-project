<template>
  <div>
    <img src="../assets/logo.png" alt="" width="30" height="30">
    <span>Element Plus</span>
  </div>
  <div>
    <el-icon>
      <Search />
    </el-icon>
    <i class="iconfont icon-question-circle"></i>
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
        <i class="iconfont icon-translate"></i>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click.native="toggleLang('zh')">简体中文</el-dropdown-item>
          <el-dropdown-item @click.native="toggleLang('en')">English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {

  },
  data() {
    return {
      userName: 'Emily'
    }
  },
  methods: {
    toggleLang(lang: string) {
      if (lang == 'zh') {
        localStorage.setItem('locale', 'zh')
        this.$i18n.locale = localStorage.getItem('locale') || 'zh-CN'
        this.$message({
          message: '切换为中文！',
          type: 'success'
        })
      } else if (lang == 'en') {
        localStorage.setItem('locale', 'en')
        this.$i18n.locale = localStorage.getItem('locale') || 'en-US';
        this.$message({
          message: 'Switch to English!',
          type: 'success'
        })
      }
    }
  }
})
</script>

<style scoped>
</style>

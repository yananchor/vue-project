<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container class="main-container">
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <h1 class="text-3xl font-bold underline">
            Hello world!
          </h1>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
  }
});
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100vh;
}

.main-container {
  height: calc(100vh - 50px);
}

.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #001529;
  color: #FFF;
  cursor: pointer;

  div {
    width: auto;
    height: 100%;
    line-height: 50px;
    display: flex;
    align-items: center;

    img,
    i,
    span {
      color: #FFF;
      margin-right: 15px;
    }
  }
}

.el-main {
  background-color: #f0f2f5;
}
</style>

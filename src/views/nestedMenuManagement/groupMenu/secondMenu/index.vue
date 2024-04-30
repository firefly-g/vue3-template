<template>
  <div class="about">
    <h1>路由传参设置</h1>
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
    <el-radio-button value="tabList">group 1</el-radio-button>
    <el-radio-button value="right">group 2</el-radio-button>
    <el-radio-button value="bottom">group 3</el-radio-button>
  </el-radio-group>
  <div v-if="tabPosition=='tabList'">
    <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
  </div>
  <div v-if="tabPosition=='right'">
    right
  </div>
  <div v-if="tabPosition=='bottom'">
    bottom
  </div>
  </div>
</template>
<script setup>
defineOptions({
  name: 'secondMenu'
})
import { ref } from 'vue'
const tabPosition = ref('tabList')
const activeName = ref('first')
</script>

<style></style>

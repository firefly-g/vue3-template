<template>
    <div class="about">
      <h1>首页</h1>
      <el-input v-model="test"></el-input>
    </div>
  </template>

 <script setup>
  import {ref,onActivated,onDeactivated} from 'vue'
  defineOptions({
    name: 'dashboard'
  });
  let  test=ref('')
  onActivated(() => {
    console.log('激活态--')
  })
  onDeactivated(() => {
    console.log('移除--')
  })
  </script>

  <style>
  </style>
  
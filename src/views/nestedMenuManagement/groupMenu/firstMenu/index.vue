<template>
  <div class="about">
    <h1>菜单1-2</h1>
    <el-input v-model="test"></el-input>
  </div>
</template>
<script setup>
import { ref ,getCurrentInstance} from 'vue'
  defineOptions({
    name: 'firstMenu'
  });
const test=ref('test')
console.log(getCurrentInstance(),'getCurrentInstance')
</script>

<style></style>

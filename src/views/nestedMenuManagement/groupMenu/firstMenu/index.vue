<template>
  <div class="about">
    <h1>菜单1-2</h1>
    <el-input v-model="test"></el-input>
  </div>
</template>
<script setup>
import { ref ,getCurrentInstance,onActivated,onDeactivated} from 'vue'
defineOptions({
  name: 'firstMenu'
});

// onActivated() {
//   console.log('firstMenu activated')
// }
// onDeactivated() {
//   console.log('firstMenu deactivated')
// }

const test=ref('test')
console.log(getCurrentInstance(),'getCurrentInstance')
</script>

<style></style>

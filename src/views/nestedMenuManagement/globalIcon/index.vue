<template>
  <div>
    <el-card class="h-full">
      <el-alert :title="info" type="success" class="mb-10"/>
        <el-form class="ml-40">
          <el-form-item label="图标">
            <SelectIcon v-model="currentIcon"></SelectIcon>
          </el-form-item>
        </el-form>
      </el-card>
  </div>
  </template>
<script setup lang="ts">
  defineOptions({
    name: 'globalIcon'
  });
  import SelectIcon from "@/components/selectIcon/index.vue"
  import {ref} from 'vue'
  const currentIcon = ref<string>('Setting')
  const info='定义了一个基于element plus 图标的选择组件 用于目录前面的icon'
</script>
  
<style scoped>
.el-icon-picker {
  height: 256px;
  overflow-y: scroll;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  color: var(--el-text-color-regular);
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  line-height: 45px;
  margin: 5px;
}
 
.icon:hover {
  color: var(--el-color-primary);
}
 
.icon-active {
  color: var(--el-color-primary);
}
  </style>
  
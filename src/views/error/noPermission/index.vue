<template>
  <div>
    暂无权限页面
  </div>
  </template>

<script setup lang="ts">
  defineOptions({
    name: "error"
  });
  import { useRouterStore } from '@/pinia/modules/router'
  const routerStore = useRouterStore()
</script>

<style>

</style>

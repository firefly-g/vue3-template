<template>
    暂无权限
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

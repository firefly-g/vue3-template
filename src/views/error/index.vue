<template>
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade-transform">
        <component :is="Component" />
      </transition>
	</router-view>
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

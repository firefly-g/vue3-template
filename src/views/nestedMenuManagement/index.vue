<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade-transform">
        <keep-alive :include="routerStore.keepAliveRouters">
          <component :is="Component" />
        </keep-alive>
      </transition>
	  </router-view>
  </div>
  </template>

<script setup lang="ts">
  defineOptions({
    name: 'nestedMenuManagement'
  });
  import { useRouterStore } from '@/pinia/modules/router'
  import { useRoute, useRouter } from 'vue-router'
  const routerStore = useRouterStore()
  const route = useRoute()
</script>

<style>

</style>

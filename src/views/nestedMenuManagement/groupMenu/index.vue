<template>
  <!-- <div>
    这是公共父路由 -->
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade-transform">
        <keep-alive :include="routerStore.keepAliveRouters">
          <component :is="Component" />
        </keep-alive>
      </transition>
	  </router-view>
  <!-- </div> -->
  </template>
  <script setup lang="ts">
  import { useRouterStore } from '@/pinia/modules/router'
  defineOptions({
    name: 'groupMenu'
  });
  const routerStore = useRouterStore()
  console.log(routerStore.keepAliveRouters,'routerStore.keepAliveRouters')

  </script>
  
  <style>

  </style>
  
<template>
	<el-breadcrumb style="padding-left: 14px" separator="/">
		<el-breadcrumb-item v-for="(item, index) in dataList" :key="index">
			<span :style="{ color: index === dataList.length - 1 ? '#1A1A1A' : 'rgba(0,0,0,0.4)' }">{{
				item.meta.title
			}}</span>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const dataList = computed(() => {
	return route.matched?.slice(1, route.matched.length)
})
</script>

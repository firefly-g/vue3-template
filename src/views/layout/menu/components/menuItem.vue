<template>
	<el-menu-item v-if="!isHide" :index="routerInfo.name">
		<el-icon v-if="routerInfo.meta?.icon"><Location /></el-icon>
		<span>{{ routerInfo.meta.title }}</span>
	</el-menu-item>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Location } from '@element-plus/icons-vue'
interface Props {
	routerInfo: any
	collapse?: boolean
}
const props = defineProps<Props>()

// 是否显示菜单
const isHide = computed(() => {
	return props.routerInfo?.hidden
})
</script>

<style lang="scss" scoped>

</style>

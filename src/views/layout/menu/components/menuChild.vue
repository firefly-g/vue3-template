<template>
	<template v-for="(menu,index) in data" :key="index">
		<el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.name">
			<template #title>
				<SvgIcon v-if="menu.meta?.icon" :name="menu.meta?.icon" :size="18" color="#fff" ></SvgIcon>
				<span>{{ menu.meta.title }}</span>
			</template>
			<menuChild :data="menu.children" />
		</el-sub-menu>
		<menuItem v-else :router-info="menu" />
	</template>
</template>

<script setup lang="ts" name="menuChild">
import { ref, onMounted,defineAsyncComponent} from 'vue'
import {
  Location
} from '@element-plus/icons-vue'
import menuItem from './menuItem.vue'
interface Props {
	data: any
}
const props = defineProps<Props>()


onMounted(()=>{
})
</script>

<style lang="scss" scoped>
:deep(.el-sub-menu__title) {
	&:hover {
		color: var(--el-color-primary);
	}
}
</style>

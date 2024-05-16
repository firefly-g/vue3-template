<template>
	<div v-for="(menu,index) in data" :key="index">
		<el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.name">
			<template #title>
				<SvgIcon v-if="menu.meta?.icon" :name="menu.meta?.icon"></SvgIcon>
				<span>{{ menu.meta.title }}</span>
			</template>
			<menuChild :data="menu.children" />
		</el-sub-menu>
		<menuItem v-else :router-info="menu" />
	</div>
</template>

<script setup lang="ts" name="menuChild">
import { ref, onMounted,defineAsyncComponent} from 'vue'
import menuItem from './menuItem.vue'
const SvgIcon = defineAsyncComponent(() => import("@/components/SvgIcon/index.vue"))
interface Props {
	data: any
}
const props = defineProps<Props>()


onMounted(()=>{
	
})
</script>

<style lang="scss" scoped>
</style>

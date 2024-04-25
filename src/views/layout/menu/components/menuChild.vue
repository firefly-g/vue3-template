<template>
	<template v-for="menu in data" :key="menu.name">
		<el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.name">
			<template #title>
				<!-- <SvgIcon name="demo"></SvgIcon> -->
				<!-- <el-icon v-if="menu.meta?.icon"><Location /></el-icon> -->
				<!-- <SelectIcon v-model="menu.meta?.icon"></SelectIcon> -->
				<span>{{ menu.meta.title }}</span>
			</template>
			<menuChild :data="menu.children" />
		</el-sub-menu>
		<menuItem v-else :router-info="menu" />
	</template>
</template>

<script setup lang="ts" name="menuChild">
import { ref, onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import menuItem from './menuItem.vue'
import { Location } from '@element-plus/icons-vue'
import SelectIcon from "@/components/selectIcon/index.vue"
const route = useRoute()
interface Props {
	data: any
}
const props = defineProps<Props>()


onMounted(()=>{
	
})
</script>

<style lang="scss" scoped>
</style>

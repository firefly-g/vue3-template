<template>
	<el-container class="layout" >
		<el-container>
			<el-aside>
				<Menu ref="menuRef" v-model="collapseValue" :windowWidth="windowWidth"/>
			</el-aside>
			<el-container direction="vertical" :style="{ paddingLeft: offsetLeft + 'px' }">
				<el-header>
					<Header />
				</el-header>
				<History />
				<el-main style="overflow:hidden;">
					<Main />
				</el-main>
			</el-container>
		</el-container>
	</el-container>
</template>
<script setup lang="ts">
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import History from './history/index.vue'
import Header from './header/index.vue'
import { computed,ref,onMounted,watchEffect } from 'vue'
import { useWindowSize } from '@vueuse/core'
const { width: windowWidth } = useWindowSize()
// 是否收起菜单，默认不收起
const collapseValue = ref(false)
const menuRef = ref<InstanceType<typeof Menu>>(null)

// 菜单宽度 (hide:收起后的宽度)
const asideWidth = {
	open_width: 193,
	hide_width: 64,
}
onMounted(() => {});

watchEffect(() => {
	if (windowWidth.value < 1150) {
		collapseValue.value= true
	} else if (windowWidth.value < 1366) {
		collapseValue.value = true
	} else {
		collapseValue.value = false
	}
	console.log(windowWidth.value,'windowWidth.value')
})

const offsetLeft = computed(() => {
	return collapseValue.value?asideWidth.hide_width:asideWidth.open_width
})
</script>
<style lang="scss" scoped>
@import '@/style/basics.scss';
.layout {
	width: 100%;
	height: 100%;
	min-width: 1150px;
}

.el-container {
	box-sizing: border-box;
	.el-aside {
		display: flex;
		width: auto;
	}

	.el-header {
		height: $height-header;
		padding-left: 0;
		padding-right: 0;
		background-color: #fff;
	}

	.el-main {
		display: flex;
		flex-direction: column;
		padding: 12px;
	}
}
</style>

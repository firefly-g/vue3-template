<template>
	<div class="main-menu">
		<el-scrollbar class="flex-1" view-class="overflow-hidden">
			<el-menu
				:collapse="isCollapse"
				background-color="#545c64"
				text-color="#fff"
				:default-active="menuActive"
				:collapse-transition="false"
				@select="selectMenu"
			>
				<menuChild :data="menuData" />
			</el-menu>
			
		</el-scrollbar>
        <div class="menu-footer">
			<div class="footer-item">
				<el-icon @click="handleCollapse">
					<Expand v-if="isCollapse" />
					<Fold v-else />
				</el-icon>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch, computed ,reactive} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import menuChild from './components/menuChild.vue'
import { useRouterStore } from '@/pinia/modules/router'
import { emitter, MittType } from '@/utils/bus'
import { Fold, Expand} from '@element-plus/icons-vue'
const route = useRoute()
const router = useRouter()
const isCollapse = ref(false)
const routerStore = useRouterStore()
const menuData =computed(() => {
	return routerStore.asyncRouters?.[0]?.children
})

const menuActive = computed(() => {
	return  route.meta.activeName || route.name
})

const handleCollapse = () => {
	isCollapse.value = !isCollapse.value
}

const selectMenu = (index) => {
	const query = {}
	const params = {}
	routerStore.routeMap[index]?.parameters &&
		routerStore.routeMap[index]?.parameters.forEach((item) => {
			if (item.type === 'query') {
				query[item.key] = item.value
			} else {
				params[item.key] = item.value
			}
		})
	if (index === route.name) return
	if (index.indexOf('http://') > -1 || index.indexOf('https://') > -1) {
		window.open(index)
	} else {
		router.push({ name: index, query, params })
        console.log(router,'{ name: index, query, params }之后')
	}
}
</script>

<style lang="scss" scoped>
.main-menu {
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #545c64;
	color: #ffffff;
}
.menu-footer {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 20px;
	.footer-item {
		height: 60px;
		line-height: 60px;
		cursor: pointer;
	}
}
</style>

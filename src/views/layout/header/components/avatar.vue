<template>
	<el-dropdown>
		<div class="flex items-center">
			<el-avatar :size="30" :src="userStore.userInfo.headerImg">
				<img v-if="!userStore.userInfo.headerImg" :src="noAvatarPng" alt="" />
			</el-avatar>
			<span class="mx-2">{{ userStore.userInfo.nickName }}</span>
			<el-icon>
				<ArrowDown />
			</el-icon>
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item v-for="item in dropdownList" :key="item.value" @click="handleItem(item.value)">
					{{ item.label }}
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
import { useUserStore } from '@/pinia/modules/user'

import noAvatarPng from '@/assets/noBody.png'

const userStore = useUserStore()

const dropdownList = [
	{ label: '退出登录', value: 'loginOut' },
]
const logOut=()=>{
	ElMessageBox.confirm('确认退出登录吗?', '提示', {
		confirmButtonText: '确认',
		cancelButtonText: '取消',
		type: 'warning',
	})
	.then(() => {
		userStore.LoginOut()
	})
	.catch(() => {})
}
const handleItem = (type) => {
	switch (type) {
		case 'loginOut':
			logOut()
			break
		default:
	}
}
</script>

<style scoped></style>

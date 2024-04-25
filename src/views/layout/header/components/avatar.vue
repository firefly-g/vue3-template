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

	<!-- <personalInfo v-if="showPersonalInfo" v-model="showPersonalInfo" />
	<jobSwitch v-if="showJobSwitch" v-model="showJobSwitch" />
	<changePassword v-model="showChangePwd" /> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
import { useUserStore } from '@/pinia/modules/user'

import noAvatarPng from '@/assets/noBody.png'

const userStore = useUserStore()

const dropdownList = [
	{ label: '退出登录', value: 'loginOut' },
]

const showPersonalInfo = ref<boolean>(false)
const showJobSwitch = ref<boolean>(false)
const showChangePwd = ref<boolean>(false)

const handleItem = (type) => {
	switch (type) {
		case 'loginOut':
			ElMessageBox.confirm('确认退出登录吗?', '提示', {
				confirmButtonText: '确认',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					userStore.LoginOut()
				})
				.catch(() => {})
			break
		default:
	}
}
</script>

<style scoped></style>

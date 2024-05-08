<template>
    <div class="flex items-center gap-x-6 mr-6">
        <el-tooltip effect="dark" content="刷新" placement="bottom">
			<div class="user-box">
				<el-icon :size="16" :class="[reload ? 'reloading' : '']" @click="handleReload">
					<RefreshRight />
				</el-icon>
			</div>
		</el-tooltip>
		<div class="user-box">
			<Screenfull class="search-icon" :style="{ cursor: 'pointer' }" />
		</div>
    </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import { emitter, MittType } from '@/utils/bus'
import { RefreshRight } from '@element-plus/icons-vue'
import Screenfull from './screenfull.vue'

const reload = ref<boolean>(false)

// 刷新
const handleReload = () => {
	reload.value = true
	console.log('开始进行刷新操作---')
	emitter.emit(MittType.Reload)
	setTimeout(() => {
		reload.value = false
	}, 500)
}

</script>
<style scoped lang="scss">
@import '@/style/main.scss';
.user-box {
	position: relative;
	display: inline-flex;
	align-items: center;
	min-height: 20px;
	color: var(--el-text-color-regular);
	cursor: pointer;

	.el-badge {
		width: 6px;
		height: 6px;
		background: var(--el-color-danger);
		border-radius: 50%;
		position: absolute;
		top: 0;
		right: 0;
	}
}
</style>
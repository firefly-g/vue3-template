<template>
	<div @click="clickFull" class="screenfull-svg">
		<el-tooltip v-if="isShow" effect="dark" content="全屏" placement="bottom">
			<div class="gvaIcon gvaIcon-fullscreen-expand" />
		</el-tooltip>
		<el-tooltip v-else effect="dark" content="退出全屏" placement="bottom">
			<div class="gvaIcon gvaIcon-fullscreen-shrink" />
		</el-tooltip>
	</div>
</template>

<script lang="ts" setup>
import screenfull from 'screenfull'
import { onMounted, onUnmounted, ref } from 'vue'

defineProps({
	width: {
		type: Number,
		default: 22,
	},
	height: {
		type: Number,
		default: 22,
	},
	fill: {
		type: String,
		default: '#48576a',
	},
})

onMounted(() => {
	if (screenfull.isEnabled) {
		screenfull.on('change', changeFullShow)
	}
})

onUnmounted(() => {
	screenfull.off('change', null)
})

const clickFull = () => {
	if (screenfull.isEnabled) {
		screenfull.toggle()
	}
}

const isShow = ref(true)
const changeFullShow = () => {
	isShow.value = !screenfull.isFullscreen
}
</script>

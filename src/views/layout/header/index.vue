<template>
	<div class="flex justify-between items-center h-full">
		<!-- <div class="left-box" :class="{ 'is-hide ': !showText }">
			<img class="logo-img" :class="{ 'mr-2': showText }" src="@/assets/logo-mini.png" />
			<span v-show="showText">景云销</span>
		</div> -->

		<div class="right-box">
			<Breadcrumb />
			
			<div class="flex items-center">
				<Operate />
				<Avatar />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { emitter, MittType } from '@/utils/bus'
import { ref, defineAsyncComponent, watch, onMounted } from 'vue'

const showText = ref<boolean>(true)
const content = ref('')
const Breadcrumb = defineAsyncComponent(() => import('./components/breadcrub.vue'))
const Operate = defineAsyncComponent(() => import('./components/operate.vue'))
const Avatar = defineAsyncComponent(() => import('./components/avatar.vue'))
//监听菜单的折叠
// emitter.on(MittType.Collapse, (isCollapse) => {
// 	showText.value = !isCollapse
// })


</script>

<style lang="scss" scoped>
@import '@/style/basics.scss';

.left-box {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 149px;
	// background-color: #100101;
	color: #fff;
	font-size: 16px;
	border-bottom: 1px solid #383838;

	.logo-img {
		width: 30px;
		height: 30px;
	}

	&.is-hide {
		width: 63px;
	}
}

.right-box {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	padding-right: 12px;
	border-bottom: 1px solid #f4f4f4;
}
</style>

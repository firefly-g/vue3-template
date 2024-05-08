<template>
	<div class="flex justify-between items-center h-full">
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
import { ref, defineAsyncComponent, watch, onMounted } from 'vue'

const showText = ref<boolean>(true)
const content = ref('')
const Breadcrumb = defineAsyncComponent(() => import('./components/breadcrub.vue'))
const Operate = defineAsyncComponent(() => import('./components/operate.vue'))
const Avatar = defineAsyncComponent(() => import('./components/avatar.vue'))



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

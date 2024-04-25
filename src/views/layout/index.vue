<template>
	<el-container class="layout" >
		<el-container>
			<el-aside>
				<Menu />
			</el-aside>
			<el-container direction="vertical">
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
</script>
<style lang="scss" scoped>
@import '@/style/basics.scss';
.layout {
	width: 100%;
	height: 100%;
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

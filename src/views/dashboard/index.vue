<template>
  <div class="about">
    <h1>自定义按钮主题色</h1>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from "vue";
import initIconfont from '@/utils/getStyleSheets'
defineOptions({
  name: "dashboard",
})
onMounted(() => {
	initFontIconData('ali')
})
const initFontIconData = async (name: string) => {
  if (name === 'ali') {
		// 阿里字体图标使用 `iconfont xxx`
		await initIconfont.ali().then((res: any) => {
      console.log( res ,'阿里字体图标')
		})
	} else if (name === 'ele') {
		// element plus 图标
		await initIconfont.ele().then((res: any) => {
      console.log( res ,'element plus 字体图标')
		})
	}
}
</script>

<style></style>

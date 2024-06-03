<script setup lang="ts">
import { ref,reactive,onMounted,defineAsyncComponent } from 'vue'
import { ComponentInternalInstance, defineEmits, defineProps, getCurrentInstance } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import initIconfont from '@/utils/getStyleSheets'
const IconList = defineAsyncComponent(() => import('@/components/selectIcon/list.vue'))

const { appContext: {app: { config: { globalProperties } } } } = getCurrentInstance() as ComponentInternalInstance
// console.log(globalProperties,'globalProperties');
 
interface Props {
  modelValue: string
}
const props = defineProps<Props>()
const state = reactive({
  fontIconTabActive: 'ali',
  fontIconList: {
    ali: [],
    ele: [],
  }
})
const emits = defineEmits(['update:modelValue'])

onMounted(() => {
	initFontIconData(initFontIconName())
  console.log(state.fontIconList,'fontIconList')
})
//获取icon列表
const initFontIconData = async (name: string) => {
	if (name === 'ali') {
		// 阿里字体图标使用 `iconfont xxx`
		if (state.fontIconList.ali.length > 0) return
		await initIconfont.ali().then((res: any) => {
			state.fontIconList.ali = res.map((i: string) => `iconfont ${i}`)
		})
	} else if (name === 'ele') {
		// element plus 图标
		if (state.fontIconList.ele.length > 0) return
		await initIconfont.ele().then((res: any) => {
			state.fontIconList.ele = res
		})
	}
}
//切换tab栏
const handleClick = (pane: TabsPaneContext) => {
  initFontIconData(pane.paneName as string)
}
//判断选中图标的类型
const initFontIconName = () => {
	let name = 'ali'
	if (props.modelValue!.indexOf('iconfont') > -1) name = 'ali'
	else if (props.modelValue!.indexOf('ele-') > -1) name = 'ele'
	// 初始化 tab 高亮回显
	state.fontIconTabActive = name
	return name
}
</script>
 
<template>
  <el-popover trigger="focus" :width="500">
    <template #reference>
      <el-button :icon="modelValue">{{ modelValue }}</el-button>
    </template>
    <div class="">
      <div class="icon-selector-warp-title">请选择图标</div>
      <el-tabs v-model="state.fontIconTabActive" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="ali" name="ali">
          <IconList :list="state.fontIconList.ali"/>
        </el-tab-pane>
        <el-tab-pane label="ele" name="ele">
          <IconList :list="state.fontIconList.ele"/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-popover>
</template>
 
<style scoped>
.el-icon-picker {
  height: 256px;
  overflow-y: scroll;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
 
.icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  color: var(--el-text-color-regular);
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  line-height: 45px;
  margin: 5px;
}
 
.icon:hover {
  color: var(--el-color-primary);
}
 
.icon-active {
  color: var(--el-color-primary);
}
</style>
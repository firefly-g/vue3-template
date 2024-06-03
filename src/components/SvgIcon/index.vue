<template>
	<img v-if="outputType==='img'" :src="getIconName" :style="iconStyle"/>
	<component v-else-if="outputType==='element'" :is="getIconName" :style="iconStyle"></component>
	<i v-else-if="outputType==='ali'" :class="getIconName" :style="iconStyle" />
	<svg v-else aria-hidden="true" class="svg-icon" :fill="props.color" :width="width" :height="height">
		<use :xlink:href="symbolId" :fill="props.color" />
	</svg>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  const props = defineProps({
	name: {
	  type: String,
	  required: true
	},
	size: {
	  type: Number,
	  default: 20
	},
	width: {
	  type: Number,
	  default: 18
	},
	height: {
	  type: Number,
	  default: 18
	},
	color: {
	  type: String,
	  default: '#fff'
	}
  })
  //判断当前传入的图标类型
  const outputType=computed(() => {
	if (/^https?:\/\//.test(props.name)) {
    	return 'img'
  	}
	//图标首字母大写的默认为element plus 图标
	else if (props?.name?.startsWith('ele-')) {
		return 'element'
	}else if(props?.name?.startsWith('iconfont')){
		return 'ali'
	}
	else {
		return 'svg'
	}
  })

  const iconStyle=computed(() => {
	return {
		...{width: props.width ? `${props.width}px` :`${props.size}px`},
		...{height: props.height ? `${props.height}px` :`${props.size}px`},
		'display': 'inline-block',
		'font-size': `${props.size}px`,
		'color': `${props.color}?${props.color}:'#409efc'`
	}
  })
  const getIconName=computed(()=>{
	if (props?.name?.startsWith('icon-') && props?.name?.indexOf('iconfont') === -1) {
		return `iconfont ${props?.name}`
	}
	return props?.name
  })
  const symbolId = computed(() => `${props.name}`)
  </script>
  
  <style lang="scss" scoped>
  .svg-icon {
	fill: currentColor;
	outline: none;
  	&.default-font-size {
	  font-size: 14px;
	}
  }
  </style>
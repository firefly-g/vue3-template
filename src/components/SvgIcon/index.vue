<template>
	<img v-if="outputType==='img'" :src="props.name" :style="iconStyle"/>
	<component v-else-if="outputType==='element'"  :is="props.name" :class="[props.name]" :style="iconStyle"></component>
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
	else if (/[A-Z]/.test(props.name.charAt(0))) {
		return 'element'
	}else{
		return 'svg'
	}
  })

  const iconStyle=computed(() => {
	return {
		...{width: props.width ? `${props.width}px` :`${props.size}px`},
		...{height: props.height ? `${props.height}px` :`${props.size}px`},
		'display': 'inline-block',
		'font-size': `${props.size}px`,
		'color': `${props.color}`
	}
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
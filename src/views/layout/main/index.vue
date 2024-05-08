<template>
	<router-view
		v-slot="{ Component }"
		element-loading-text="正在加载中"
		class="content-box"
	>
		<transition :duration="500"  mode="out-in" name="fade-transform" >
			<keep-alive>
				<component :key="route.name" :is="Component" />
			</keep-alive>
		</transition>	
	</router-view>	
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRouterStore } from '@/pinia/modules/router.ts'
import { emitter, MittType } from '@/utils/bus'
defineOptions({
  name: 'layout',
})
const routerStore = useRouterStore()
const route = useRoute()
const router = useRouter()
const reloadFlag = ref<boolean>(true)
let reloadTimer=null

//刷新
const reload = async () => {
	if (reloadTimer) {
		window.clearTimeout(reloadTimer)
	}
	reloadTimer = window.setTimeout(async () => {
		if (route.meta.keepAlive) {
			reloadFlag.value = false
			await nextTick()
			reloadFlag.value = true
		} else {
			router.push({ name: 'Reload' })
		}
	}, 400)
}

onMounted(() => {
	emitter.on(MittType.Reload, reload)
})

onUnmounted(() => {
	emitter.off(MittType.Reload)
})




</script>

<style lang="scss" scoped>
fade-transform
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>

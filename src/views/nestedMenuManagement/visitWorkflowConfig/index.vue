<script setup lang="ts">
import { ref,watch } from 'vue'
import { useRoute,useRouter } from 'vue-router'
defineOptions({
    name: 'visitWorkflowConfig'
  });
const activeTab=ref('htmlCom')
const lists=ref(
  [
  {name: 'htmlCom'},
  {name: 'javascriptCom'},
  {name: 'cssCom'},
  ]
)
const router = useRouter()
const route = useRoute()
const handleChange=(val)=>{
  router.push({name:val})
}
watch(
	() => route,
	(to, now) => {
    activeTab.value=to?.name
	},
	{ immediate: true ,deep:true}
)
</script>

<template>
  <div class="demo">
    <el-radio-group v-model="activeTab" @change=handleChange>
      <el-radio-button
        v-for="item in lists"
        :key="item.name"
        :label="item.name"
        :value="item.name"
        />
      >
    </el-radio-group>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

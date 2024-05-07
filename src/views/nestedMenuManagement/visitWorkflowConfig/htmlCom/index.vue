<template>
  <div class="about">
    Tab栏：
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane  v-for="item in tabLists" :key="item" :label="item" :name="item">
        <component :is="activeName"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
import type { TabsPaneContext } from "element-plus";
const tabLists=ref(["first","second","third"])
const activeName = ref("first");
const router = useRouter()
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
  router.push({name:'htmlCom',query:{activeName:activeName.value}})
  
}
// onMounted(()=>{
//   updateActiveTab()
// })
// const updateActiveTab=()=>{

// }
</script>
<script lang="ts">
import first from './components/first.vue'
import second from './components/second.vue'
import third from './components/third.vue'
export default {
  components:{
    first,
    second,
    third
  }
}
</script>


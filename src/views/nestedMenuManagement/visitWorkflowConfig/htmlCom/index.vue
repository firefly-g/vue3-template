<template>
  <div class="about">
    <div>Tab栏：</div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane  v-for="item in tabLists" :key="item" :label="item" :name="item">
        <component :is="activeName"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref ,onMounted,watch} from "vue";
import { useRoute, useRouter } from 'vue-router'
import type { TabsPaneContext } from "element-plus";
const tabLists=ref(["first","second","third"])
const activeName = ref("first");
const router = useRouter()
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
  activeName.value=tab.paneName
  router.push({name:'htmlCom',query:{activeName:activeName.value}})
  
}

watch(()=>router.currentRoute.value,(currentRoute)=>{
  activeName.value=currentRoute.query?.activeName||'first'
})

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


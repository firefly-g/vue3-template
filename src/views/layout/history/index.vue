<template>
    <view class="tab-history">
        <el-tabs
            type="card"
            class="flex-1 overflow-hidden"
            v-model="activeRouter"
            :closable="!(historys.length === 1 && $route.name === defaultRouter)"
            @tab-click="changeTab"
            @tab-remove="removeTab"
        >
            <el-tab-pane
                v-for="item in historys"
                :key="item.name"
                :label="item.meta.title"
                :name="item.name"
            >
            </el-tab-pane>
        </el-tabs>
        <el-divider direction="vertical" class="!mx-3" />
        <el-dropdown trigger="click" style="left: 0; top: 0">
			<el-button size="small" link>
				更多
                <!-- <el-icon class="ml-1"><CaretBottom /></el-icon> -->
			</el-button>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item v-for="(item, index) in moreList" :key="index" @click="item.handle">{{
						item.label
					}}</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
    </view>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { emitter, MittType } from '@/utils/bus'
const activeRouter = ref('')
const historys = ref([])
const route=useRoute()
const router = useRouter()
const defaultRouter = ref('dashboard')
//路由是否相同
const isSameRouteName=(oldRoute,newRoute)=>{
    return oldRoute.name===newRoute.name?true:false
}
//设置tab对应路由
const setTab=(route)=>{
    if(!historys.value.some(item=>isSameRouteName(item,route))){
        const obj={
            name:route.name,
            meta:Object.assign({},route.meta),
            query:route.query,
            params:route.params
        }
        delete obj.meta.matched
        historys.value.push(obj)
    }
    activeRouter.value =route.name
}
watch(()=>route,
    (to,now)=>{
        setTab(to)
        sessionStorage.setItem('historys', JSON.stringify(historys.value))
        window.sessionStorage.setItem('activeRouter', JSON.stringify(route.name))
    },
{ deep: true,immediate:true })

// watch(
// 	() => historys.value,
// 	() => {
// 		emitter.emit(MittType.SetKeepAlive, historys.value)
// 	},
// 	{
// 		deep: true,
// 	}
// )

//切换tab
const changeTab = (TabsPaneContext) => {
    let currentTab = historys.value.find(item=>item?.name===TabsPaneContext?.props?.name)
    router.push({
		name: currentTab.name,
		query: currentTab.query,
		params: currentTab.params,
	})
}
//删除tab
const removeTab = (tab) => {
    let deleteIndex:number=0
	const index = historys.value.findIndex((item) =>item?.name === tab)
    if (index===-1) return
    if(route?.name===tab){
        if(historys.value.length===1){
            router.push({ name: defaultRouter.value })
        } else{
            deleteIndex=(index < historys.value.length - 1) ? index + 1 : index - 1
            router.push({
                name: historys.value[deleteIndex].name,
                query: historys.value[deleteIndex].query,
                params: historys.value[deleteIndex].params,
            })
        }
    }
	historys.value.splice(index, 1)
}
//关闭所有tab
const closeAll = () => {
    //只有默认tab时不做处理
    let isOnlyDefalutRouter=historys.value?.length===1&&activeRouter.value===defaultRouter.value
    if(isOnlyDefalutRouter) return
    historys.value=[]
    router.push({ name: defaultRouter.value })
}
//关闭左侧tab
const closeLeft=()=>{
    if(historys.value?.length===1) return
    let activeIndex = getActiveTabIndex()
    deleteTabs(0,activeIndex)
    saveHistorys()
}
// 关闭右侧
const closeRight = () => {
	if(historys.value?.length===1) return
    let activeIndex = getActiveTabIndex()
    deleteTabs(activeIndex+1,historys.value.length)
    saveHistorys()
}
// 关闭其他
const closeOther = () => {
	historys.value = historys.value.filter((item) => item?.name === activeRouter.value)
}
//删除要关闭的tab
const deleteTabs=(start:number,end:number)=>{
    historys.value.splice(start, end)
}
//当前选中tab索引
const getActiveTabIndex=()=>{
    return historys.value.findIndex((item) =>item?.name=== activeRouter.value)
}
//保存tab栏配置
const saveHistorys=()=>{
    sessionStorage.setItem('historys', JSON.stringify(historys.value))
}
//更多列表
const moreList = [
	{ label: '关闭所有', handle: closeAll },
	{ label: '关闭左侧', handle: closeLeft },
	{ label: '关闭右侧', handle: closeRight },
	{ label: '关闭其他', handle: closeOther },
]

</script>

<style lang="scss" scoped>
.tab-history{
    display: flex;
	align-items: center;
	padding: 0 12px;
	background-color: #fff;
	border-bottom: 1px solid #f4f4f4;
	border-left: 1px solid #f4f4f4;
    :deep(.el-tabs__header) {
		border-bottom: none;
		margin-bottom: 0;
		.el-tabs__nav-prev,
		.el-tabs__nav-next {
			line-height: 42px;
		}
		.el-tabs__nav {
			border: none;
			.el-tabs__item {
				color: rgba(0, 0, 0, 0.4);
				border-left: none;
				&:hover {
					color: rgba(0, 0, 0, 0.4);
				}
				&.is-active {
					color: var(--el-color-primary);
					&::before {
						position: absolute;
						bottom: 0;
						width: 100%;
						height: 0;
						content: '';
						border-bottom: 2px solid var(--el-color-primary);
					}
					&:hover {
						color: var(--el-color-primary);
					}
				}
			}
		}
	}
}
</style>

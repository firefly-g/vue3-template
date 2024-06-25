import { defineStore } from "pinia";
import { ref } from 'vue'
import { asyncRouterHandle } from '@/utils/asyncRouter'
import {getMenu} from '@/api/menu'

//1.调用接口，格式化数据
let asyncRouter = []
//入口路由
let baseRouter = [
    {
        path: '/layout',
        name: 'layout',
        component: 'views/layout/index.vue',
        meta: {
            title: '底层layout',
            keepAlive:true
        },
        children: null,
    },
]
export const useRouterStore=defineStore('router',()=>{
    let keepAliveRouters = ref([])
    const asyncRouters = ref(<any>[])
    let routeMap = {}
    const asyncRouterFlag = ref(0)

    const KeepAliveFilter = (router) => {
        router&&router.forEach(item=>{
            if(item.meta.keepAlive){
                keepAliveRouters.value.push(item.name)
            }
            if (item.children && item.children.length > 0) {
                KeepAliveFilter(item.children)
            }
        })
    }
    const formatRouter = (routes, routeMap) => {
        routes &&
            routes.forEach((item) => {
                item.meta.btns = item.btns
                item.meta.hidden = item.hidden
                routeMap[item.name] = item
                if (item.children && item.children.length > 0) {
                    formatRouter(item.children, routeMap)
                }
            })
    }
    //获取动态路由
    const SetAsyncRouter=async()=>{
        try {
            asyncRouterFlag.value++
            //调用路由接口
            const res=await getMenu()
            if(res?.code!==0) return
            asyncRouter=res?.data
            console.log(asyncRouter,'asyncRouter---获取动态路由')
            //加入刷新路由
            asyncRouter.push({
                path: 'reload',
                name: 'reload',
                hidden: true,
                meta: {
                    title: '',
                    closeTab: true,
                },
                component: 'views/error/reload/index.vue',
            })
            
            formatRouter(asyncRouter, routeMap)
            baseRouter[0].children = asyncRouter
            //将接口中路由位置转为按需引入
            asyncRouterHandle(baseRouter)
            asyncRouters.value = baseRouter
            //收集需要做缓存的路由
            keepAliveRouters.value=[]
            KeepAliveFilter(asyncRouter)
            return true
        } catch (error) {
            console.log('获取动态路由error',error)
        }
    }
    // 清除当前职位账号的权限路由
	const clearAsyncRouters = () => {
		asyncRouters.value[0].children = []
		keepAliveRouters.value = []
		asyncRouterFlag.value = 0
	}
    return {
        routeMap,
        asyncRouters,
        SetAsyncRouter,
        keepAliveRouters,
        clearAsyncRouters,
        asyncRouterFlag
    }
})
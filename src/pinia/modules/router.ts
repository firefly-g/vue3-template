import { defineStore } from "pinia";
import { ref } from 'vue'
import { asyncRouterHandle } from '@/utils/asyncRouter'
import { emitter, MittType } from '@/utils/bus'
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
    let keepAliveRouters = ref(<string>[])
    const asyncRouters = ref(<any>[])
    let flatRouters = ref(<any>[])
    let routeMap = {}

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
                if (item.meta.defaultMenu === true) {
                    notLayoutRouterArr.push({
                        ...item,
                        path: `/${item.path}`,
                    })
                } else {
                    routeMap[item.name] = item
                    if (item.children && item.children.length > 0) {
                        formatRouter(item.children, routeMap)
                    }
                }
            })
    }
    //获取动态路由
    const SetAsyncRouter=async()=>{
        try {
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
            KeepAliveFilter(asyncRouter)
            return true
        } catch (error) {
            console.log('获取动态路由error',error)
        }
    }
    //更新菜单管理下路由配置
    // const updateRouters=(res:{type:string,data:object})=>{
    //     if(res.type=='add'){
    //         if(res.data?.parentId==='0'){
    //             baseRouter[0]?.children.push(res.data) 
    //         }else{
    //             matchParentMenu(baseRouter[0],res.data)
    //         }
    //     }
    //     sessionStorage.setItem('menuRouters', JSON.stringify(baseRouter))
    //     // asyncRouterHandle(baseRouter)
    //     // asyncRouters.value = baseRouter
    // }
    //匹配所属父级路由
    // const matchParentMenu=(routers,data)=>{
    //     routers.children&&routers.children.forEach(item=>{
    //         if(data?.parentId==='0'){
    //             routers.children.push(item.name)
    //         }else{
    //             if(item.ID===Number(data?.parentId)){
    //                 item.children=item.children?[...item.children,data]:[data]
    //             }else if(item.ID!==Number(data?.parentId)&&item.children&& item.children.length > 0){
    //                 matchParentMenu(item,data)
    //             }
    //         }
    //     })
    // }
    // emitter.on(MittType.SetMenuConfig, updateRouters)

    return {
        routeMap,
        asyncRouters,
        flatRouters,
        SetAsyncRouter,
        keepAliveRouters,
        // updateRouters
    }
})
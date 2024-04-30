import { defineStore } from "pinia";
import { ref } from 'vue'
import { asyncRouterHandle } from '@/utils/asyncRouter'
import { emitter, MittType } from '@/utils/bus'
//1.调用接口，格式化数据
let asyncRouter = JSON.parse(sessionStorage.getItem('menuRouters')) ?? [
    {
        "ID": 1,
        "traceId": "",
        "parentId": "0",
        "path": "dashboard",
        "name": "dashboard",
        "hidden": false,
        "component": "views/dashboard/index.vue",
        "sort": 1,
        "meta": {
            "activeName": "",
            "keepAlive": true,
            "defaultMenu": false,
            "title": "首页",
            "icon": "CaretBottom",
            "closeTab": false,
            "mainTable": "",
            "associateTables": ""
        },
        
        "menuBtn": null,
        "menuFiled": null,
        "menuId": "1",
        "children": null,
    },
    {
        "ID": 2,
        "parentId": "0",
        "path": "error",
        "name": "error",
        "hidden": false,
        "component": "views/error/index.vue",
        "sort": 1,
        "meta": {
            "activeName": "",
            "keepAlive": false,
            "defaultMenu": false,
            "title": "错误页面",
            "icon": "Setting",
            "closeTab": false,
            "mainTable": "",
            "associateTables": ""
        },
        "children": [
            {   
                "ID": 300,
                "parentId": "2",
                "path": "notFound",
                "name": "notFound",
                "hidden": false,
                "component": "views/error/notFound/index.vue",
                "sort": 1,
                "meta": {
                    "activeName": "",
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "404",
                    "icon": "iconfont icon-home-page",
                    "closeTab": false,
                    "mainTable": "",
                    "associateTables": ""
                },
                "children": null,
            },
            {
                "ID": 301,
                "parentId": "2",
                "path": "noPermission",
                "name": "noPermission",
                "hidden": false,
                "component": "views/error/noPermission/index.vue",
                "sort": 1,
                "meta": {
                    "activeName": "",
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "401",
                    "icon": "iconfont icon-home-page",
                    "closeTab": false,
                    "mainTable": "",
                    "associateTables": ""
                },
                "children": null,
            }

        ],
    },
    {
        "ID": 40,
        "traceId": "",
        "parentId": "0",
        "path": "nestedMenuManagement",
        "name": "nestedMenuManagement",
        "hidden": false,
        "component": "views/nestedMenuManagement/index.vue",
        "sort": 3,
        "meta": {
            "activeName": "",
            "keepAlive": true,
            "defaultMenu": false,
            "title": "嵌套路由",
            "icon": "Money",
            "closeTab": false,
            "mainTable": "",
            "associateTables": ""
        },
        
        "menuBtn": null,
        "menuFiled": null,
        "menuId": "40",
        "children": [
            {
                "ID": 41,
                "traceId": "",
                "parentId": "40",
                "path": "globalIcon",
                "name": "globalIcon",
                "hidden": false,
                "component": "views/nestedMenuManagement/globalIcon/index.vue",
                "sort": 0,
                "meta": {
                    "activeName": "",
                    "keepAlive": true,
                    "defaultMenu": false,
                    "title": "图标",
                    "icon": "",
                    "closeTab": false,
                    "mainTable": "jt_visited_outworker",
                    "associateTables": ""
                },
                
                "menuBtn": null,
                "menuFiled": null,
                "menuId": "41",
                "children": null,
                "parameters": [],
            },
            {
                "ID": 116,
                "traceId": "",
                "parentId": "40",
                "path": "visitWorkflowConfig",
                "name": "visitWorkflowConfig",
                "hidden": false,
                "component": "views/nestedMenuManagement/visitWorkflowConfig/index.vue",
                "sort": 0,
                "meta": {
                    "activeName": "",
                    "keepAlive": true,
                    "defaultMenu": false,
                    "title": "流程配置",
                    "icon": "",
                    "closeTab": false,
                    "mainTable": "",
                    "associateTables": ""
                },
                
                "menuBtn": null,
                "menuFiled": null,
                "menuId": "116",
                "children": null,
                "parameters": [],
            },
            {
                "ID": 119,
                "traceId": "",
                "parentId": "40",
                "path": "groupeMenu",
                "name": "groupeMenu",
                "hidden": false,
                "component": "views/nestedMenuManagement/groupMenu/index.vue",
                "sort": 0,
                "meta": {
                    "activeName": "",
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "菜单Grpoup",
                    "icon": "Notebook",
                    "closeTab": false,
                    "mainTable": "",
                    "associateTables": ""
                },
                
                "menuBtn": null,
                "menuFiled": null,
                "menuId": "119",
                "children": [
                    {
                        "ID": 120,
                        "traceId": "",
                        "parentId": "119",
                        "path": "firstMenu",
                        "name": "firstMenu",
                        "hidden": false,
                        "component": "views/nestedMenuManagement/groupMenu/firstMenu/index.vue",
                        "sort": 0,
                        "meta": {
                            "activeName": "",
                            "keepAlive": false,
                            "defaultMenu": false,
                            "title": "菜单1-1",
                            "icon": "",
                            "closeTab": false,
                            "mainTable": "",
                            "associateTables": ""
                        },
                        
                        "menuBtn": null,
                        "menuFiled": null,
                        "menuId": "120",
                        "children": null,
                    },
                    {
                        "ID": 125,
                        "traceId": "",
                        "parentId": "119",
                        "path": "secondMenu",
                        "name": "secondMenu",
                        "hidden": false,
                        "component": "views/nestedMenuManagement/groupMenu/secondMenu/index.vue",
                        "sort": 0,
                        "meta": {
                            "activeName": "",
                            "keepAlive": false,
                            "defaultMenu": false,
                            "title": "菜单1-2",
                            "icon": "",
                            "closeTab": false,
                            "mainTable": "jt_store_check",
                            "associateTables": ""
                        },
                        
                        "menuBtn": null,
                        "menuFiled": null,
                        "menuId": "125",
                        "children": null,
                        "parameters": [],
                        "btns": {
                            "export": 0
                        },
                    }
                ],
            }
        ],
        "parameters": [],
    },
    {
        "ID": 3,
        "traceId": "",
        "parentId": "0",
        "path": "superAdmin",
        "name": "superAdmin",
        "hidden": false,
        "component": "views/superAdmin/index.vue",
        "sort": 30,
        "meta": {
            "activeName": "",
            "keepAlive": false,
            "defaultMenu": false,
            "title": "超级管理员",
            "icon": "Avatar",
            "closeTab": false,
            "mainTable": "",
            "associateTables": ""
        },
        
        "menuBtn": null,
        "menuFiled": null,
        "menuId": "3",
        "children": [
            {
                "ID": 5,
                "traceId": "",
                "parentId": "3",
                "path": "menu",
                "name": "menu",
                "hidden": false,
                "component": "views/superAdmin/menu/index.vue",
                "sort": 2,
                "meta": {
                    "activeName": "",
                    "keepAlive": true,
                    "defaultMenu": false,
                    "title": "菜单管理",
                    "icon": "",
                    "closeTab": false,
                    "mainTable": "",
                    "associateTables": ""
                },
                
                "menuBtn": null,
                "menuFiled": null,
                "menuId": "5",
                "children": null,
                "parameters": [],
            }
        ],
    
    }
]
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
        children: [],
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
        console.log(asyncRouter,'asyncRouter---获取动态路由')
        //加入刷新路由
        asyncRouter.push({
            path: 'reload',
            name: 'Reload',
            hidden: true,
            meta: {
                title: '',
                closeTab: true,
            },
            component: 'views/error/reload.vue',
        })
        
        formatRouter(asyncRouter, routeMap)
        baseRouter[0].children = asyncRouter
        //将接口中路由位置转为按需引入
        asyncRouterHandle(baseRouter)
        asyncRouters.value = baseRouter
        //收集需要做缓存的路由
        KeepAliveFilter(asyncRouter)
        return true
    }
    //更新菜单管理下路由配置
    const updateRouters=(res:{type:string,data:object})=>{
        if(res.type=='add'){
            if(res.data?.parentId==='0'){
                baseRouter[0]?.children.push(res.data) 
            }else{
                matchParentMenu(baseRouter[0],res.data)
            }
        }
        sessionStorage.setItem('menuRouters', JSON.stringify(baseRouter))
        // asyncRouterHandle(baseRouter)
        // asyncRouters.value = baseRouter
    }
    //匹配所属父级路由
    const matchParentMenu=(routers,data)=>{
        routers.children&&routers.children.forEach(item=>{
            if(data?.parentId==='0'){
                routers.children.push(item.name)
            }else{
                if(item.ID===Number(data?.parentId)){
                    item.children=item.children?[...item.children,data]:[data]
                }else if(item.ID!==Number(data?.parentId)&&item.children&& item.children.length > 0){
                    matchParentMenu(item,data)
                }
            }
        })
    }
    emitter.on(MittType.SetMenuConfig, updateRouters)

    return {
        routeMap,
        asyncRouters,
        flatRouters,
        SetAsyncRouter,
        keepAliveRouters,
        updateRouters
    }
})
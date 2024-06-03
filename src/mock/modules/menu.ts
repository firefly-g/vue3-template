// localStorage.clear()
const menuData =JSON.parse(localStorage.getItem('menuData'))||[
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
            "icon": "ele-CaretBottom",
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
        "ID": 39,
        "traceId": "",
        "parentId": "0",
        "path": "error",
        "name": "error",
        "hidden": false,
        "component": "views/error/index.vue",
        "sort": 3,
        "meta": {
            "activeName": "",
            "keepAlive": true,
            "defaultMenu": false,
            "title": "错误页面",
            "icon": "ele-Setting",
            "closeTab": false,
            "mainTable": "",
            "associateTables": ""
        },
        
        "menuBtn": null,
        "menuFiled": null,
        "menuId": "39",
        "children": [
            {
                "ID": 45,
                "traceId": "",
                "parentId": "40",
                "path": "notFound",
                "name": "notFound",
                "hidden": false,
                "component": "views/error/notFound/index.vue",
                "sort": 0,
                "meta": {
                    "activeName": "",
                    "keepAlive": true,
                    "defaultMenu": false,
                    "title": "404",
                    "icon": "",
                    "closeTab": false,
                    "mainTable": "",
                    "associateTables": ""
                },
                
                "menuBtn": null,
                "menuFiled": null,
                "menuId": "41",
                "children": null,
                "parameters": [],
            },
            {
                "ID": 45,
                "traceId": "",
                "parentId": "39",
                "path": "noPermission",
                "name": "noPermission",
                "hidden": false,
                "component": "views/error/noPermission/index.vue",
                "sort": 0,
                "meta": {
                    "activeName": "",
                    "keepAlive": true,
                    "defaultMenu": false,
                    "title": "401",
                    "icon": "",
                    "closeTab": false,
                    "mainTable": "",
                    "associateTables": ""
                },
                
                "menuBtn": null,
                "menuFiled": null,
                "menuId": "41",
                "children": null,
                "parameters": [],
            }
        ]
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
            "icon": "ele-Money",
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
                "redirect": '/layout/nestedMenuManagement/visitWorkflowConfig/htmlCom',
                "sort": 0,
                "meta": {
                    "activeName": "",
                    "keepAlive": true,
                    "defaultMenu": false,
                    "title": "动态渲染组件",
                    "icon": "",
                    "closeTab": false,
                    "mainTable": "",
                    "associateTables": ""
                },
                
                "menuBtn": null,
                "menuFiled": null,
                "menuId": "116",
                "children": [
                    {
                        "path": 'htmlCom',
                        "name": 'htmlCom',
                        "component":"views/nestedMenuManagement/visitWorkflowConfig/htmlCom/index.vue",
                        "meta": {
                        "title": '组件1'
                        },
                        "query":{
                            "activeName":'first'
                        }

                    },
                    {
                        "path": 'javascriptCom',
                        "name": 'javascriptCom',
                        "component":"views/nestedMenuManagement/visitWorkflowConfig/javascriptCom/index.vue",
                        "meta": {
                        "title": '组件2'
                        },
                        "query":{
                            "activeName":'second'
                        }
                    },
                    {
                        "path": 'cssCom',
                        "name": 'cssCom',
                        "component":"views/nestedMenuManagement/visitWorkflowConfig/cssCom/index.vue",
                        "meta": {
                            "title": '组件3'
                        },
                        "query":{
                            "activeName":'third'
                        }
                    }
                   
                ],
                "parameters": [],
            },
            {
                "ID": 119,
                "traceId": "",
                "parentId": "40",
                "path": "groupMenu",
                "name": "groupMenu",
                "hidden": false,
                "component": "views/nestedMenuManagement/groupMenu/index.vue",
                "sort": 0,
                "meta": {
                    "activeName": "",
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "菜单Grpoup",
                    "icon": "ele-Notebook",
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
                            "keepAlive": true,
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
            "icon": "ele-Avatar",
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
                "path": "menuManage",
                "name": "menuManage",
                "hidden": false,
                "component": "views/superAdmin/menuManage/index.vue",
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
//匹配所属父级路由
const matchParentMenu=(menuData,newMenu,type="add")=>{
    const searchId= type==="add"? newMenu?.parentId :newMenu?.ID
    menuData.forEach((item,index)=>{
        if(item.ID===Number(searchId)){
            if(type==="delete"){
                menuData.splice(index,1)
            }else if(type==="edit"){
                item.meta=newMenu?.meta
                item.component=newMenu?.component
                item.sort=newMenu?.sort
                item.name=newMenu?.name
                item.path=newMenu?.path
                item.hidden=newMenu?.hidden
            }
            else {
                item.children=item.children?[...item.children,newMenu]:[newMenu]
            }
        }else if(item.ID!==Number(searchId)&&item?.children&& item.children?.length){
            matchParentMenu(item.children,newMenu,type)
        }
    })
}
//保存更新
const saveMenuData = () => {
    localStorage.setItem('menuData', JSON.stringify(menuData));
}
//添加菜单
const addMenu=(options:object)=>{
    const body=JSON.parse(options.body)
    const newMenu=
        {
            "ID": menuData.length*10+1,
            "traceId": "",
            "parentId":body?.parentId,
            "path": body?.path,
            "name": body?.name,
            "hidden": false,
            "component": body?.component,
            "sort":  body?.sort,
            "meta": {
                "activeName": "",
                "keepAlive": true,
                "defaultMenu": false,
                "title": body?.meta?.title,
                "icon": body?.meta?.icon,
                "closeTab": false,
                "mainTable": "",
                "associateTables": ""
            },
            
            "menuBtn": null,
            "menuFiled": null,
            "menuId": "40",
            "children": []
    }
    if(newMenu.parentId=="0"){
        menuData.push(newMenu)
    }else{
        matchParentMenu(menuData,newMenu)
    }
    saveMenuData()
    console.log('接口返回：',menuData)
    return {
        code:0,
        data:{
            ...newMenu,
            msg:'创建成功！'
        }
    }

}

//删除菜单
const deleteMenu=(options:object)=>{
    const body=JSON.parse(options.body)
    matchParentMenu(menuData,{parentId:body?.ID},'delete')
    saveMenuData()
    console.log('接口返回：',menuData)
    return {
        code:0,
        data:{
            msg:'删除成功！'
        }
    }

}
//编辑菜单
const editMenu =(options:object)=>{
    const body=JSON.parse(options.body)
    matchParentMenu(menuData,body,'edit')
    saveMenuData()
    return {
        code:0,
        data:{
            msg:'编辑成功！'
        }
    }

}
export default {
    addMenu,
    deleteMenu,
    editMenu,
    menuData,
}



import mitt from 'mitt'
/**
 * @params Collapse 监听折叠面板
 * @params Reload 刷新
 * @param SetKeepAlive 保存的alive状态栏
 * @param SetMenuConfig 菜单管理页新增菜单
 */

export enum MittType{
    Collapse = 'collapse',
    Reload='reload',
    SetKeepAlive='SetKeepAlive',
    SetMenuConfig='SetMenuConfig'
}
export const emitter = mitt()
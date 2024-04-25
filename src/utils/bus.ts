import mitt from 'mitt'
/**
 * @params Collapse 监听折叠面板
 * @params Reload 刷新
 * @param SetKeepAlive 保存的alive状态栏
 */

export enum MittType{
    Collapse = 'collapse',
    Reload='reload',
    SetKeepAlive='SetKeepAlive'
}
export const emitter = mitt()
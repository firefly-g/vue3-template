import { VNode } from 'vue'
import { TableProps, TableColumnCtx } from 'element-plus'

// 列的属性
export interface TableColumnProps<T = any> extends Partial<TableColumnCtx<T>> {
}
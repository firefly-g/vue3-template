<template>
<!-- Table Content -->
<div class="table-content">
    <XZLTable
        ref="tableRef"
     
        height="100%"
        :rowKey="rowKey"
        :data="tableData"
        :columns="columns"
        v-bind="tableAttrs"
    >
        <template v-for="name in Object.keys(tableSlots)" #[name]="scope">
            <slot :name="name" v-bind="scope || {}"></slot>
        </template>
    </XZLTable>
</div>

</template>
<script setup lang="ts" name="ListProTable">
import { ref, computed, useAttrs, useSlots } from 'vue'
import { isEmpty, slice, omit, concat } from 'lodash-es'
import XZLTable from '@/components/proxyComponents/XZLTable/index.vue'
import { TablePropType} from '@/components/proxyComponents/XZLTable/types'
interface Props extends Pick<TablePropType, 'rowKey' | 'columns' | 'data'> {

}
const props = withDefaults(defineProps<Props>(), {
	rowKey: 'ID',
	dataKey: 'list',
	showSearchForm: true,
	showColSetting: true,
	showPagination: true,
	pageSizes: () => [10, 20, 30],
})

// 表格数据
const tableData = computed(() => {
	const data = props.data
	// 如果data从外部传入，则前端手动分页
	if (data?.length > 0) {
		// 不需要分页
		if (!props.showPagination) {
			return data
		}

		// 手动分页
		const page = pageable.value.page as number
		const pageSize = pageable.value.pageSize as number
		return slice(data, (page - 1) * pageSize, page * pageSize)
	}

	// 使用api接口数据 逻辑
	
})
const attrs = useAttrs()
const slots = useSlots()

// 排除其他插槽，只需要表格的插槽
const tableSlots = omit(slots, 'tableHeader')
// 排除data（需要手动处理data）
const tableAttrs = omit(attrs, 'data')



</script>
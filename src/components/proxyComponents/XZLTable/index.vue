<template>
    <el-table ref="tableRef" v-bind="$attrs">
    </el-table>
</template>

<script setup lang="ts" name="XZLTable">
import { ref, onMounted, useAttrs, useSlots } from 'vue'
import { TableColumnProps } from './types'
interface Props {
	columns: TableColumnProps[]
}
</script>
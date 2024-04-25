<template>
    <el-card class="h-full" :body-style="{ display: 'flex', flexDirection: 'column', height: '100%', padding: '12px' }">
      菜单配置页
    </el-card>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
defineOptions({
    name: "menu"
  });
const columns = ref<TableColumnProps[]>([
    {
		label: '姓名',
		prop: 'name',
    },
    {
        label: '所属组织',
		prop: 'departmentName',
    },
    { 
        label: '所属上级', 
        prop: 'leaderEmpName'
    },
    {
		label: '性别',
		prop: 'sex'
    },
    { 
        label: '工号',
        prop: 'empNo'
    }

])
const data=[
    {
        ID:1,
        name: "本人及下属",
        departmentName: "景田集团",
        leaderEmpName: "ssd",
        sex:"女",
        empNo:'104ea177-9b'
    },
    {
        ID:2,
        name: "test",
        departmentName: "景田集团",
        leaderEmpName: "ssd",
        sex:"女",
        empNo:'104ea177-9b'
    },
    {
        ID:3,
        name: "哈哈",
        departmentName: "景田集团",
        leaderEmpName: "ssd",
        sex:"女",
        empNo:'104ea177-9b'
    }

]
</script>
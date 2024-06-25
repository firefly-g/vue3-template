<template>
  <el-card
    class="h-full"
    :body-style="{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '12px',
      boxSizing: 'border-box',
    }"
  >
    <el-row class="mb-3">
      <el-button type="primary" @click="addSubMenu(0)">
        <template #icon>
          <SvgIcon name="ele-Plus" color="#fff" />
        </template>
        新增根菜单
      </el-button>
    </el-row>
    <el-table class="" :data="tableData" row-key="ID" :border="true">
      <el-table-column align="left" label="ID" min-width="100" prop="ID" />
      <el-table-column
        align="left"
        label="展示名称"
        min-width="120"
        prop="authorityName"
      >
        <template #default="scope">
          <span>{{ scope.row.meta.title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="left"
        label="图标"
        min-width="140"
        prop="authorityName"
      >
        <template #default="scope">
          <div v-if="scope.row.meta.icon" class="icon-column">
            <SvgIcon :name="scope.row.meta.icon" color="#b1b3b8" />
          </div>
        </template>
      </el-table-column>
      <el-table-column
        align="left"
        label="路由Name"
        show-overflow-tooltip
        min-width="160"
        prop="name"
      />
      <el-table-column
        align="left"
        label="路由Path"
        show-overflow-tooltip
        min-width="160"
        prop="path"
      />
      <el-table-column
        align="left"
        label="是否隐藏"
        min-width="100"
        prop="hidden"
      >
        <template #default="scope">
          <span>{{ scope.row.hidden ? "隐藏" : "显示" }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="left"
        label="父节点"
        min-width="90"
        prop="parentId"
      />
      <el-table-column align="left" label="排序" min-width="70" prop="sort" />
      <el-table-column
        align="left"
        label="文件路径"
        min-width="360"
        prop="component"
      />
      <el-table-column align="left" fixed="right" label="操作" width="300">
        <template #default="scope">
          <el-button
            type="primary"
            link
            icon="plus"
            @click="addSubMenu(scope.row.ID)"
            >添加子菜单</el-button
          >
          <el-button
            type="primary"
            link
            icon="edit"
            @click="handleEditMenu(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="primary"
            link
            icon="delete"
            @click="handleDeleteMenu(scope.row.ID)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增菜单弹框 -->
    <el-dialog
      v-model="dialogFormVisible"
      :before-close="handleClose"
      :title="dialogTitle"
    >
      <el-form
        ref="menuForm"
        :inline="true"
        :model="form"
        :rules="rules"
        label-position="top"
        label-width="85px"
      >
        <el-form-item label="路由Name" prop="path" style="width: 30%">
          <el-input
            v-model="form.name"
            autocomplete="off"
            placeholder="唯一英文字符串"
            @change="changeName"
          />
        </el-form-item>
        <el-form-item prop="path" style="width: 30%">
          <template #label>
            <span style="display: inline-flex; align-items: center">
              <span>路由Path</span>
              <el-checkbox
                v-model="checkFlag"
                style="margin-left: 12px; height: auto"
                >添加参数</el-checkbox
              >
            </span>
          </template>
          <el-input
            v-model="form.path"
            :disabled="!checkFlag"
            autocomplete="off"
            placeholder="建议只在后方拼接参数"
          />
        </el-form-item>
        <el-form-item label="是否隐藏" style="width: 30%">
          <el-select v-model="form.hidden" placeholder="是否在列表隐藏">
            <el-option :value="false" label="否" />
            <el-option :value="true" label="是" />
          </el-select>
        </el-form-item>
        <el-form-item label="父节点ID" style="width: 30%">
          <el-cascader
            v-model="form.parentId"
            :disabled="!isEdit"
            style="width: 100%"
            :options="menuOption"
            :props="{
              checkStrictly: true,
              label: 'title',
              value: 'ID',
              disabled: 'disabled',
              emitPath: false,
            }"
            :show-all-levels="false"
            filterable
          />
        </el-form-item>
        <el-form-item label="文件路径" prop="component" style="width: 60%">
          <el-input
            v-model="form.component"
            autocomplete="off"
            placeholder="页面:view/xxx/xx.vue 插件:plugin/xx/xx.vue"
          />
          <span style="font-size: 12px; margin-right: 12px"
            >如果菜单包含子菜单，请创建router-view二级路由页面或者</span
          ><el-button
            style="margin-top: 4px"
            @click="form.component = 'view/routerHolder.vue'"
            >点我设置</el-button
          >
        </el-form-item>
        <el-form-item label="展示名称" prop="meta.title" style="width: 30%">
          <el-input v-model="form.meta.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="图标" prop="meta.icon" style="width: 30%">
          <SelectIcon v-model="form.meta.icon"></SelectIcon>
        </el-form-item>
        <el-form-item label="排序标记" prop="sort" style="width: 30%">
          <el-input v-model.number="form.sort" autocomplete="off" />
        </el-form-item>
        <el-form-item
          label="KeepAlive"
          prop="meta.keepAlive"
          style="width: 30%"
        >
          <el-select
            v-model="form.meta.keepAlive"
            style="width: 100%"
            placeholder="是否keepAlive缓存页面"
          >
            <el-option :value="false" label="否" />
            <el-option :value="true" label="是" />
          </el-select>
        </el-form-item>
        <el-form-item
          v-if="isEdit"
          label="默认重定向"
          prop="meta.redirectRoute"
          style="width: 30%"
        >
          <el-select
            v-model="form.meta.redirectRoute"
            placeholder="请选择子路由名称"
            style="width: 240px"
          >
            <el-option
              v-for="item in childRuteOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="closeDialog">取 消</el-button>
          <el-button type="primary" @click="enterDialog">确 定</el-button>
        </div>
      </template>
    </el-dialog>
  </el-card>
</template>

<script setup lang="tsx">
import { onMounted, ref, defineAsyncComponent, reactive, toRaw } from "vue";
import { getMenu, addMenu, deleteMenu, editMenu } from "@/api/menu";
const SelectIcon = defineAsyncComponent(
  () => import("@/components/selectIcon/index.vue")
);
defineOptions({
  name: "menu",
});
interface Meta {
  activeName: string;
  title: string;
  icon: string;
  defaultMenu?: boolean;
  closeTab?: boolean;
  keepAlive: boolean;
  redirectRoute: string;
}
interface MenuType {
  ID: number;
  path: string;
  name: string;
  hidden: boolean;
  parentId: string;
  component: string;
  meta: Meta;
  parameters: string[];
  menuBtn: string[];
  sort: number;
  children: any[];
}
interface RouterOptions {
  label: string;
  value: string;
}
const menuForm = ref(null);
let tableData = ref([]);

const form = ref<MenuType>({
  ID: 0,
  path: "",
  name: "",
  hidden: false,
  parentId: "",
  component: "",
  meta: {
    activeName: "",
    title: "",
    icon: "",
    defaultMenu: false,
    closeTab: false,
    keepAlive: false,
    redirectRoute: "",
  },
  parameters: [],
  menuBtn: [],
  sort: 1,
  children: [],
});

const menuOption = ref([
  {
    ID: "0",
    title: "根菜单",
  },
]);
const checkFlag = ref(false);
const isEdit = ref(false);
const dialogFormVisible = ref(false);
const dialogTitle = ref("新增菜单");
const rules = reactive({
  path: [{ required: true, message: "请输入菜单name", trigger: "blur" }],
  component: [{ required: true, message: "请输入文件路径", trigger: "blur" }],
  "meta.title": [
    { required: true, message: "请输入菜单展示名称", trigger: "blur" },
  ],
});
const childRuteOptions = ref<RouterOptions[]>([
]);
onMounted(async () => {
  await getTableData();
});

const handleClose = (done) => {
  initForm();
  done();
};
const setMenuOptions = (menuData, optionsData, disabled) => {
  menuData &&
    menuData.forEach((item) => {
      if (item.hidden) return;
      let option = {
        title: item.meta.title,
        ID: String(item.ID),
        disabled: disabled || item.ID === form.value.ID,
      };

      if (item.children && item.children.length) {
        option.children = [];
        setMenuOptions(
          item.children,
          option.children,
          disabled || item.ID === form.value.ID
        );
      }
      optionsData.push(option);
    });
};
const setOptions = () => {
  menuOption.value = [
    {
      ID: "0",
      title: "根目录",
    },
  ];
  setMenuOptions(tableData.value, menuOption.value, false);
};
const initForm = () => {
  checkFlag.value = false;
  menuForm.value.resetFields();
  form.value = {
    ID: 0,
    path: "",
    name: "",
    hidden: false,
    parentId: "",
    component: "",
    meta: {
      title: "",
      icon: "",
      keepAlive: false,
      redirectRoute: "",
    },
    children: [],
  };
};
//获取列表
const getTableData = async () => {
  try {
    const res = await getMenu();
    if (res.code === 0) {
      tableData.value = res?.data;
    }
  } catch (error) {}
};
//添加子菜单弹框
const addSubMenu = (parentId) => {
  dialogTitle.value = "新增菜单";
  isEdit.value = false;
  form.value.parentId = String(parentId);
  setOptions();
  dialogFormVisible.value = true;
};
//关闭弹窗
const closeDialog = () => {
  initForm();
  dialogFormVisible.value = false;
};
//确定
const enterDialog = async () => {
  console.log(form, "form");
  menuForm.value.validate(async (valid) => {
    if (valid) {
      //用mockjs模拟数据
      let res = {};
      if (isEdit.value) {
        res = await editMenu(toRaw(form.value));
      } else {
        res = await addMenu(toRaw(form.value));
      }
      if (res.code === 0) {
        ElMessage({
          type: "success",
          message: res?.data?.msg+'请刷新页面',
        });
        getTableData();
      }
    }
	dialogFormVisible.value = false;
	// initForm();
  });
};
const changeName = () => {
  form.value.path = form.value.name;
};
//删除菜单
const handleDeleteMenu = (ID) => {
  ElMessageBox.confirm("此操作将永久删除所有角色下该菜单, 是否继续?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(async () => {
    const res = await deleteMenu({ ID });
    if (res.code === 0) {
      ElMessage({
        type: "success",
        message: res?.data?.msg,
      });
    }
  });
};
//编辑菜单
const handleEditMenu = (data) => {
  form.value = data;
  console.log(form, "form++++");
  dialogTitle.value = "编辑菜单";
  isEdit.value = true;
  dialogFormVisible.value = true;
  const options = data?.children?.map((item) => {
    return {
      value: item.path,
      label: item.meta.title,
    };
  })??[];
  childRuteOptions.value=[
	...options,
	{
		label: "不重定向",
		value: "",
  	}
]
};
</script>
<style scoped lang="scss">
.warning {
  color: #dc143c;
}
.icon-column {
  display: flex;
  align-items: center;
  .el-icon {
    margin-right: 8px;
  }
}
</style>

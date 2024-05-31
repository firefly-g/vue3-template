<template>
	<div id="userLayout">
		<div class="login_panel">
			<div class="login_panel_form">
				<div class="login_panel_form_title">
					<img class="login_panel_form_title_logo" src="@/assets/logo-mini.png" />
					<p class="login_panel_form_title_p">景田云销</p>
				</div>
				<el-form
					ref="loginForm"
					:model="loginFormData"
					:rules="rules"
					:validate-on-rule-change="false"
					@keyup.enter="submitForm"
				>
					<el-form-item prop="username">
						<el-input
							v-model="loginFormData.username"
							size="large"
							maxlength="20"
							placeholder="请输入用户名"
							suffix-icon="user"
						/>
					</el-form-item>
					<el-form-item prop="password">
						<el-input
							v-model="loginFormData.password"
							show-password
							size="large"
							type="password"
							maxlength="20"
							placeholder="请输入密码"
						/>
					</el-form-item>
					<el-form-item prop="checkoutSecret">
						<el-checkbox v-model="loginFormData.checkoutSecret"
							><span style="color: black">我已阅读并同意</span
							><a style="color: blue" href="https://marketing-oss.g.seakoi.cn/digitizing-admin/service_agreement.html"
								>用户使用协议</a
							><span style="color: black">和</span
							><a style="color: blue" href="https://marketing-oss.g.seakoi.cn/digitizing-admin/privacy_agreement.html"
								>隐私协议</a
							></el-checkbox
						>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" size="large" style="width: 100%" @click="submitForm">登 录</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="login_panel_right" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStorage } from '@vueuse/core'


import { ElMessage } from 'element-plus'

import { useUserStore } from '@/pinia/modules/user'

const router = useRouter()
// 验证函数
const checkUsername = (rule, value, callback) => {
	if (value.length < 5) {
		return callback(new Error('请输入正确的用户名'))
	} else {
		callback()
	}
}
const checkPassword = (rule, value, callback) => {
	if (value.length < 6) {
		return callback(new Error('请输入正确的密码'))
	} else {
		callback()
	}
}

// 登录相关操作
const loginForm = ref(null)
const loginFormData = reactive({
	username: 'admin',
	password: 'admin123456',
	openCaptcha: false,
  	checkoutSecret: true,
	deviceUniqueId:'',
	loginDeviceType:'Windows/Chrome',
	loginIsApp:0,
	loginAppVersion:''
})

const rules = reactive({
	username: [{ validator: checkUsername, trigger: 'blur' }],
	password: [{ validator: checkPassword, trigger: 'blur' }],
})

const userStore = useUserStore()
const login = async () => {
	return await userStore.LoginIn(loginFormData)
}
const submitForm = () => {
	loginForm.value.validate(async (v) => {
		if (v) {
			if (loginFormData.checkoutSecret) {
				await login()
			} else {
				ElMessage.error('请仔细阅读《用户使用协议》和《隐私协议》并勾选同意')
			}
		} else {
			ElMessage({
				type: 'error',
				message: '请正确填写登录信息',
				showClose: true,
			})
			return false
		}
	})
}


</script>

<style lang="scss" scoped>
@import '@/style/newLogin.scss';

:deep(.el-checkbox__inner) {
	//将checkbox的边框变圆
	border-radius: 50%;
}
</style>

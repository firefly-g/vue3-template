import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
const routes = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		name: 'Login',
		component: ()=>import('@/views/login/index.vue'),
    children:[]
	}]
const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router

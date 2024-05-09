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
	},
	{
		path: '/404',
		name: '404',
		component: () => import('@/views/error/notFound/index.vue'),
	},
	{
		path: '/:catchAll(.*)',
		meta: {
			closeTab: true,
		},
		redirect:'/404'
	},]
const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router

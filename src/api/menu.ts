import {service} from '@/utils/request'
//菜单列表
export const getMenu = () => {
	return service.request({
		url: '/getMenu',
		method: 'get',
	})
}

export const addMenu = (data:object) => {
	return service.request({
		url: '/addMenu',
		method: 'post',
		data
	})
}

//删除菜单
export const deleteMenu =(data:object) => {
	return service.request({
		url: '/deleteMenu',
		method: 'post',
		data
	})
}

//编辑菜单
export const editMenu =(data:object) => {
	return service.request({
		url: '/editMenu',
		method: 'post',
		data
	})
}

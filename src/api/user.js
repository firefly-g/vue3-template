import {service} from '@/utils/request'

// 用户登录
export const login = (data) => {
	return service.request({
		url: '/login',
		method: 'post',
		data,
	})
}



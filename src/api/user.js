import {service} from '@/utils/request'
// 用户登录
export const login = (data) => {
	return service.request({
		url: '/base/login',
		method: 'post',
		data,
	})
}



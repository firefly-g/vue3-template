import router from '@/router/index'
import {useUserStore} from "@/pinia/modules/user"
import { useRouterStore } from '@/pinia/modules/router'
import Nprogress from 'nprogress'

const whiteList = ['Login']
router.beforeEach(async (to, from) => {
    Nprogress.remove()
    Nprogress.start()
    const routerStore = useRouterStore()
	const userStore = useUserStore()
	to.meta.matched = [...to.matched]
    const token = userStore.token
    // console.log(to,'即将跳转的路由--')
    //要跳转的页面是登录页时
    if (whiteList.indexOf(to.name) > -1) {
        if (token) {
            if (!routerStore.asyncRouterFlag && whiteList.indexOf(from.name) < 0) {
                await userStore.initMenuRouter()
            }
            if (userStore.userInfo?.authority?.defaultRouter != null) {
				return { name: userStore.userInfo?.authority?.defaultRouter }
			} else {
				// 强制退出账号
				userStore.ClearStorage()
				return {
					name: 'Login',
					query: {
						redirect: to.href,
					},
				}
			}
        }else {
			return true
		}
    }else{
        if (token) {
            // 添加flag防止多次获取动态路由和栈溢出
            if (!routerStore.asyncRouterFlag && whiteList.indexOf(from.name) < 0) {
                const valid = await userStore.initMenuRouter()
				// 如果没有获取到用户信息 不允许执行replace 防止栈溢出
				if (!valid) return
                if (userStore.token) {
					return { ...to, replace: true }
				} else {
					return {
						name: 'Login',
						query: { redirect: to.href },
					}
				}
            }else{
                if (to.matched.length) {
					if(to.meta?.redirectRoute){
						return {
							name: to.meta?.redirectRoute,
						}
					}
					return true
				} else {
					return { path: '/404' }
				}
            }
            
        }else{
            return {
				name: 'Login',
				query: {
					redirect: to.href,
				},
			} 
        }
    }
})
router.afterEach(() => {
    Nprogress.done()
})

router.onError(() => {
	Nprogress.remove()
})
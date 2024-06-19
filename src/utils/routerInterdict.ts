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
    console.log(to,userStore,'即将跳转的路由--')
    //要跳转的页面是登录页时
    if (whiteList.indexOf(to.name) > -1) {
        if (token) {

        }else {
			return true
		}
    }else{
        if (token) {

        }else{
            return {
				name: 'Login',
				query: {
					redirect: to.href,
				},
			} 
        }
    }

    // if(!to.name&&userStore.token){
    //     //获取当前用户的菜单
    //     await userStore.initMenuRouter()
    //     return { ...to, replace: true }
    // }

})
router.afterEach(() => {
    Nprogress.done()
})

router.onError(() => {
	Nprogress.remove()
})
import router from '@/router/index'
import {useUserStore} from "@/pinia/modules/user"
import Nprogress from 'nprogress'
router.beforeEach(async (to, from) => {
	const userStore = useUserStore()
	to.meta.matched = [...to.matched]
    Nprogress.remove()
    Nprogress.start()
    console.log(to,'即将跳转的路由--')
    if(!to.name&&userStore.token){
        //获取当前用户的菜单
        await userStore.initMenuRouter()
        return { ...to, replace: true }
    }

})
router.afterEach(() => {
    Nprogress.done()
})

router.onError(() => {
	Nprogress.remove()
})
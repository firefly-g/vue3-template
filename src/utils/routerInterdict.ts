import router from '@/router/index'
import {useUserStore} from "@/pinia/modules/user"
import Nprogress from 'nprogress'
router.beforeEach(async (to, from) => {
	const userStore = useUserStore()
    console.log(userStore.token,'userStore=====')
	to.meta.matched = [...to.matched]
    Nprogress.start()
    if(userStore.token){
        //获取当前用户的菜单
        await userStore.initMenuRouter()
    }

})
router.afterEach(() => {
    Nprogress.done()
  })
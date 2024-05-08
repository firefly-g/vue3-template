import { defineStore } from 'pinia'
import router from '@/router/index'
import { useRouterStore } from '@/pinia/modules/router'
import { login } from '@/api/user'
import { ElLoading, ElMessage } from 'element-plus'
import { ref} from 'vue'
interface UserInfo{
    nickName: String,
	headerImg: String,
}
type Token=String
export const useUserStore = defineStore('user', () => {
    const loadingInstance = ref(null)
    const userInfo = ref<UserInfo>({
		nickName: '',
		headerImg: '',
	})
    const routerStore = useRouterStore()
    const token = ref<Token>(window.localStorage.getItem('token') || '')
    //设置用户信息
    const setUserInfo = (val:UserInfo) => {
		userInfo.value = val
	}
    /**清空当前用户信息 */
	const clearUserInfo = () => {
		userInfo.value = {
            nickName: '',
            headerImg: '',
          };
	}
    const setToken = (val:Token) => {
		token.value = val
        window.localStorage.setItem('token', token.value)
	}
    const initMenuRouter=async ()=>{
        //获取动态router
        await routerStore.SetAsyncRouter()
        const asyncRouters = routerStore.asyncRouters
        asyncRouters.forEach((asyncRouter) => {
            router.addRoute(asyncRouter)
        })
        console.log('asyncRouters', asyncRouters)
    }
    /* 登录*/
    const LoginIn =async (userInfo) => {
        loadingInstance.value = ElLoading.service({
            fullscreen: true,
            text: '登录中，请稍候...',
        })
        try {
            const res=await login(userInfo)
            if(res.code === 0){
                //保存用户登录信息
                setUserInfo(res.data.user)
                //保存token
                setToken(res.data.token)
            }
        } catch (error) {
            loadingInstance.value.close()
        }
        loadingInstance.value.close()
        await initMenuRouter()
        await router.replace({ name: 'dashboard' })
    }
    /* 登出*/
    const LoginOut=async ()=>{
        //清除本地缓存
        token.value = ''
		sessionStorage.clear()
        localStorage.removeItem('token')
        clearUserInfo()
        await router.push({ name: 'Login', replace: true })
    }
    return{
        LoginIn ,
        LoginOut,
        userInfo,
        token,
        initMenuRouter
    }
})

// router.beforeEach(async (to, from) => {
// 	const userStore = useUserStore()
//     const routerStore = useRouterStore()
//     console.log(to,'路由拦截-触发--------')
// 	to.meta.matched = [...to.matched]
//     Nprogress.start()
//     if(userStore.token){
//         //获取当前用户的菜单
//         await userStore.initMenuRouter()
//         return true
//     }

// })
// router.afterEach(() => {
//     Nprogress.done()
//   })
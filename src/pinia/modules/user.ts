import { defineStore } from 'pinia'
import router from '@/router/index'
import { useRouterStore } from './router'
import { login } from '@/api/user'
import { ElLoading, ElMessage } from 'element-plus'
import { ref} from 'vue'
import { close, start } from '@/utils/nprogress'
interface UserInfo{
    nickName: String,
	headerImg: String,
}
type Token=String
const routerStore = useRouterStore()
export const useUserStore = defineStore('user', () => {
    const loadingInstance = ref(null)
    const userInfo = ref<UserInfo>({
		nickName: '',
		headerImg: '',
	})
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

        //获取动态router
        await routerStore.SetAsyncRouter()
        //此处拿到扁平化处理的嵌套数组
        // const asyncRouters = routerStore.asyncRouters
        const asyncRouters = routerStore.flatRouters
        console.log(routerStore.asyncRouters,'路由·asyncRouters')
        console.log(asyncRouters,'router 路由·flatRouter')
        //将接口中的路由配置到router中
        asyncRouters.forEach((asyncRouter) => {
            router.addRoute(asyncRouter)
        })
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
        userInfo
    }
})

router.beforeEach(async (to, from) => {
	const routerStore = useRouterStore()
	const userStore = useUserStore()
	to.meta.matched = [...to.matched]
    start()
})
router.afterEach(() => {
    close()
  })
import { defineStore } from 'pinia'
import router from '@/router/index'
import { useRouterStore } from '@/pinia/modules/router'
import { login } from '@/api/user'
import { ElLoading, ElMessage } from 'element-plus'
import { getRedirectUrl } from '@/utils/util'
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
        try {
            //获取动态router
            await routerStore.SetAsyncRouter()
            const asyncRouters = routerStore.asyncRouters
            asyncRouters.forEach((asyncRouter) => {
                router.addRoute(asyncRouter)
            })
            return true
        } catch (error) {
            console.log('initMenuRouter error :' , error)
            return false
        }
    
    }
    /* 登录*/
    const LoginIn =async (userInfo) => {
        const tocancleList=['login','notFound','noPermission']
        let pathName='dashboard'
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
            console.log(error,'登录异常')
        }
        loadingInstance.value.close()
        await initMenuRouter()
        //当前登录页是由其他页面重定向来的 登录成功后跳转对应页面 
        const redictUrl=getRedirectUrl()
        if(redictUrl){
            const segments = redictUrl.split('/');
            let toPath=segments[segments?.length - 1]
            if(!tocancleList.includes(toPath)){
                pathName=toPath
            }
        }
        await router.replace({ name: pathName })
    }
    /* 登出*/
    const LoginOut=async ()=>{
        //清除本地缓存
        token.value = ''
		sessionStorage.clear()
        localStorage.removeItem('token')
        clearUserInfo()
        routerStore.clearAsyncRouters()
        await router.push({ name: 'Login', replace: true })
    }
    /* 清理数据 */
	const ClearStorage = async () => {
		token.value = ''
		sessionStorage.clear()
		localStorage.clear()
	}
    return{
        LoginIn ,
        LoginOut,
        userInfo,
        token,
        initMenuRouter,
        ClearStorage
    }
})
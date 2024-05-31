
//用户信息
const userInfo={
	token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjo',
	user:{
        userName:''
    }
}
const userLogin=(options:object)=>{
    const body=JSON.parse(options.body)
    userInfo.user.userName=body?.username
    return {
        code:0,
        data:{
            ...userInfo,
            msg:'创建成功！'
        }
    }
}
export default {
    userLogin
}

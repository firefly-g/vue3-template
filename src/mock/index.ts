import Mock from 'mockjs'
import menu from './modules/menu'
import user from './modules/user'


const {mock}=Mock
mock('/api/getMenu',"get",{
    code:0,
    data:menu.menuData
})

mock('/api/addMenu',"post",menu.addMenu)
mock('/api/deleteMenu',"post",menu.deleteMenu)
mock('/api/editMenu',"post",menu.editMenu)
mock('/api/login',"post",user.userLogin)





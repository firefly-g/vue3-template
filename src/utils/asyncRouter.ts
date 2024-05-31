const viewModules = import.meta.glob('../views/**/*.vue')
const pluginModules = import.meta.glob('../plugin/**/*.vue')

export const asyncRouterHandle = (asyncRouter) => {
  asyncRouter.forEach(item => {
    if (item.component) {
      if (typeof item?.component =='string'&&item?.component?.split('/')[0] === 'views') {
        item.component = dynamicImport(viewModules, item.component)
      } else if (typeof item?.component =='string'&&item?.component?.split('/')[0] === 'plugin') {
        item.component = dynamicImport(pluginModules, item.component)
      }
    } else {
      delete item['component']
    }
    if (item.children) {
      asyncRouterHandle(item.children)
    }
  })
}

function dynamicImport(
  dynamicViewsModules,
  component
) {
    try {
        const keys = Object.keys(dynamicViewsModules)
        const matchKeys = keys.filter((key) => {
            const k = key.replace('../', '')
            return k === component
        })
        const matchKey = matchKeys[0]
        return dynamicViewsModules[matchKey]
    } catch (error) {
        console.log(error,'按需引入中遇到bug')
    }
}

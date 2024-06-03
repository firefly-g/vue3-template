import { nextTick } from 'vue'
import * as ElementPlusIcons from '@element-plus/icons-vue'
//阿里字体图标列表
const getAlicdnIconfont = () => {
    return new Promise((resolve, reject) => {
		nextTick(() => {
			const styles = Array.from(document.styleSheets)
			const alibabaSheets = styles.filter(sheet => sheet.href && sheet.href.includes('at.alicdn.com'))
			if (alibabaSheets.length === 0) {
                reject('未获取到值，请刷新重试');
                return;
            }
			const iconSelectors = alibabaSheets.flatMap(sheet => 
				Array.from(sheet.cssRules)
				.filter(rule => rule?.selectorText?.includes('.icon-'))
				.map(rule => rule?.selectorText?.substring(1, rule?.length)?.replace(/\:\:before/gi, ''))
			)
			if (iconSelectors.length > 0) {
                resolve(iconSelectors);
            } else {
                reject('未找到任何iconfont图标选择器');
            }
		})
	})
}

// 初始化获取 css 样式，获取 element plus 自带 svg 图标，增加了 ele- 前缀，使用时：ele-Aim
const getElementPlusIconfont = () => {
	return new Promise((resolve, reject) => {
		nextTick(() => {
			const icons = ElementPlusIcons as any
			const sheetsIconList = []
			for (const i in icons) {
				sheetsIconList.push(`ele-${icons[i].name}`)
			}
            console.log(sheetsIconList,'/ element plus 字体图标列表')
			if (sheetsIconList.length > 0) resolve(sheetsIconList)
			else reject('未获取到值，请刷新重试')
		})
	})
}


/**
 * 字体图标列表 `document.styleSheets`
 * @method ali 获取阿里字体图标 `<i class="iconfont 图标类名"></i>`
 * @method ele 获取 element plus 自带图标 `<i class="图标类名"></i>`
 */
const initIconfont = {
	// iconfont
	ali: () => {
		return getAlicdnIconfont()
	},
	// element plus
	ele: () => {
		return getElementPlusIconfont()
	},
}
export default initIconfont
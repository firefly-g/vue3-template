import * as path from 'path'
export default function fullImportPlugin() {
	let config
	return {
		name: 'fullImportElementPlus',
		async configResolved(conf) {
			config = conf
		},
		transform(code, id) {
			const sourcePath = path.join(config.root, 'src/main.js').split(path.sep).join('/')
			const targetPath = id.split(path.sep).join('/')
			if (sourcePath === targetPath) {
				const name = 'ElementPlus'
				// 引入 ElementPlus 和 样式
				const prepend = `import ${name} from 'element-plus';\n`
				code = code.replace(
					`import './style/element_visiable.scss'`,
					($1) => $1 + `\nimport 'element-plus/theme-chalk/src/index.scss'`
				)
				code = code.replace('.mount(', ($1) => `.use(${name})` + $1)

				// 生成 sourcemap
				const map = {
					mappings: '', // 这里可以是 sourcemap 的映射关系，可以为空
					sources: [id], // 源文件路径
					names: [], // 源文件中的变量名
					sourceRoot: 'file:///', // 源文件的根路径，可以是相对路径或绝对路径
				}
				return {
					code: prepend + code,
					map: map,
				}
			}
			// 如果不是源文件，不需要做转换，直接返回原始代码和 null 的 sourcemap
			return {
				code: code,
				map: null,
			}
		},
	}
}

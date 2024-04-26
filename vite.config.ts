import { fileURLToPath, URL } from 'node:url'
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import DefineOptions from 'unplugin-vue-define-options/vite'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite' // API 的 自动引入
import Components from 'unplugin-vue-components/vite' // 按需加载自定义组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig((mode)=>{
  console.log(mode,'mode------')
  const env = loadEnv(mode.mode, process.cwd())
  for (const k in env) {
		process.env[k] = env[k]
	}
  const {VITE_BASE_API,VITE_BASE_PATH,VITE_CLI_PORT}=process.env
  const alias={
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
  const config={
    publicPath: '/',
    resolve: {
			alias,
		},
    css:{
      preprocessorOptions: {
        scss: {
            // element-plus主题色配置相关--引入index.scss文件
          additionalData: `@use "@/style/element-plus.scss" as *;`
        }
      }
    },
    server:{
      port: VITE_CLI_PORT,
			overlay: {
				warnings: false,
				errors: true,
			},
      proxy: {
        [VITE_BASE_API]:{
          target: `${VITE_BASE_PATH}`, // 代理到 目标路径
          changeOrigin: true,
          rewrite: (path:any) => {
						if (VITE_BASE_PATH.includes('http:')) {
							return path.replace(new RegExp('^' + '/api'), '')
						}
						return path
					},
        }
      }
    },
    plugins:[
      vue(),
      vueJsx(),
      DefineOptions(),
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            // 自动引入修改主题色添加这一行，使用预处理样式
            importStyle: 'sass'
          })
        ]
      }),
      Components({
				resolvers: [
					ElementPlusResolver({
						importStyle: 'sass',
					}),
				],
				dts: 'components.d.ts', // 生成ts声明文件
			}),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        symbolId: "[name]",
      })
    ],
  }
  return config
})


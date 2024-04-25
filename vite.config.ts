import { fileURLToPath, URL } from 'node:url'
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import DefineOptions from 'unplugin-vue-define-options/vite'
import path from 'path'

export default defineConfig((mode)=>{
  console.log(mode,'mode------')
  const env = loadEnv(mode.mode, process.cwd())
  for (const k in env) {
		process.env[k] = env[k]
	}
  const {
    VITE_BASE_API,
    VITE_BASE_PATH,
    VITE_CLI_PORT
  }=process.env
  const alias={
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
  const config={
    publicPath: '/',
    resolve: {
			alias,
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
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        symbolId: "[name]",
      })
    ],
  }
  return config
})


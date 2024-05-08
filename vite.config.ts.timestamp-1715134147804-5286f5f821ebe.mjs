// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "file:///D:/%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF/test1/vue-project/node_modules/.pnpm/vite@5.2.2_@types+node@20.11.30_sass@1.72.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF/test1/vue-project/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.2_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF/test1/vue-project/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.2.2_vue@3.4.21/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///D:/%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF/test1/vue-project/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.2.2/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import DefineOptions from "file:///D:/%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF/test1/vue-project/node_modules/.pnpm/unplugin-vue-define-options@1.4.3_vue@3.4.21/node_modules/unplugin-vue-define-options/dist/vite.mjs";
import path from "path";
import AutoImport from "file:///D:/%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF/test1/vue-project/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.9.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF/test1/vue-project/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF/test1/vue-project/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///D:/%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF/test1/vue-project/vite.config.ts";
var vite_config_default = defineConfig((mode) => {
  const env = loadEnv(mode.mode, process.cwd());
  for (const k in env) {
    process.env[k] = env[k];
  }
  const { VITE_BASE_API, VITE_BASE_PATH, VITE_CLI_PORT } = process.env;
  const alias = {
    "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
  };
  const config = {
    publicPath: "/",
    resolve: {
      alias
    },
    css: {
      preprocessorOptions: {
        scss: {
          // element-plus主题色配置相关--引入index.scss文件
          additionalData: `@use "@/style/element-plus.scss" as *;`
        }
      }
    },
    server: {
      port: VITE_CLI_PORT,
      overlay: {
        warnings: false,
        errors: true
      },
      proxy: {
        [VITE_BASE_API]: {
          target: `${VITE_BASE_PATH}`,
          // 代理到 目标路径
          changeOrigin: true,
          rewrite: (path2) => {
            if (VITE_BASE_PATH.includes("http:")) {
              return path2.replace(new RegExp("^/api"), "");
            }
            return path2;
          }
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      DefineOptions(),
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            // 自动引入修改主题色添加这一行，使用预处理样式
            importStyle: "sass"
          })
        ]
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass"
          })
        ],
        dts: "components.d.ts"
        // 生成ts声明文件
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
        symbolId: "[name]"
      })
    ]
  };
  return config;
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTk4NzlcdTc2RUVcdTZBMjFcdTY3N0ZcXFxcdGVzdDFcXFxcdnVlLXByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVx1NkEyMVx1Njc3RlxcXFx0ZXN0MVxcXFx2dWUtcHJvamVjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU5JUExJUI5JUU3JTlCJUFFJUU2JUE4JUExJUU2JTlEJUJGL3Rlc3QxL3Z1ZS1wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyxsb2FkRW52IH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXHJcbmltcG9ydCBEZWZpbmVPcHRpb25zIGZyb20gJ3VucGx1Z2luLXZ1ZS1kZWZpbmUtb3B0aW9ucy92aXRlJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJyAvLyBBUEkgXHU3Njg0IFx1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NVxyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJyAvLyBcdTYzMDlcdTk3MDBcdTUyQTBcdThGN0RcdTgxRUFcdTVCOUFcdTRFNDlcdTdFQzRcdTRFRjZcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKChtb2RlKT0+e1xyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZS5tb2RlLCBwcm9jZXNzLmN3ZCgpKVxyXG4gIGZvciAoY29uc3QgayBpbiBlbnYpIHtcclxuXHRcdHByb2Nlc3MuZW52W2tdID0gZW52W2tdXHJcblx0fVxyXG4gIGNvbnN0IHtWSVRFX0JBU0VfQVBJLFZJVEVfQkFTRV9QQVRILFZJVEVfQ0xJX1BPUlR9PXByb2Nlc3MuZW52XHJcbiAgY29uc3QgYWxpYXM9e1xyXG4gICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcclxuICB9XHJcbiAgY29uc3QgY29uZmlnPXtcclxuICAgIHB1YmxpY1BhdGg6ICcvJyxcclxuICAgIHJlc29sdmU6IHtcclxuXHRcdFx0YWxpYXMsXHJcblx0XHR9LFxyXG4gICAgY3NzOntcclxuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICAgIHNjc3M6IHtcclxuICAgICAgICAgICAgLy8gZWxlbWVudC1wbHVzXHU0RTNCXHU5ODk4XHU4MjcyXHU5MTREXHU3RjZFXHU3NkY4XHU1MTczLS1cdTVGMTVcdTUxNjVpbmRleC5zY3NzXHU2NTg3XHU0RUY2XHJcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEB1c2UgXCJAL3N0eWxlL2VsZW1lbnQtcGx1cy5zY3NzXCIgYXMgKjtgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VydmVyOntcclxuICAgICAgcG9ydDogVklURV9DTElfUE9SVCxcclxuXHRcdFx0b3ZlcmxheToge1xyXG5cdFx0XHRcdHdhcm5pbmdzOiBmYWxzZSxcclxuXHRcdFx0XHRlcnJvcnM6IHRydWUsXHJcblx0XHRcdH0sXHJcbiAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgW1ZJVEVfQkFTRV9BUEldOntcclxuICAgICAgICAgIHRhcmdldDogYCR7VklURV9CQVNFX1BBVEh9YCwgLy8gXHU0RUUzXHU3NDA2XHU1MjMwIFx1NzZFRVx1NjgwN1x1OERFRlx1NUY4NFxyXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgICAgcmV3cml0ZTogKHBhdGg6YW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChWSVRFX0JBU0VfUEFUSC5pbmNsdWRlcygnaHR0cDonKSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBwYXRoLnJlcGxhY2UobmV3IFJlZ0V4cCgnXicgKyAnL2FwaScpLCAnJylcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcGF0aFxyXG5cdFx0XHRcdFx0fSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOltcclxuICAgICAgdnVlKCksXHJcbiAgICAgIHZ1ZUpzeCgpLFxyXG4gICAgICBEZWZpbmVPcHRpb25zKCksXHJcbiAgICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICAgIHJlc29sdmVyczogW1xyXG4gICAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcih7XHJcbiAgICAgICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NVx1NEZFRVx1NjUzOVx1NEUzQlx1OTg5OFx1ODI3Mlx1NkRGQlx1NTJBMFx1OEZEOVx1NEUwMFx1ODg0Q1x1RkYwQ1x1NEY3Rlx1NzUyOFx1OTg4NFx1NTkwNFx1NzQwNlx1NjgzN1x1NUYwRlxyXG4gICAgICAgICAgICBpbXBvcnRTdHlsZTogJ3Nhc3MnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIF1cclxuICAgICAgfSksXHJcbiAgICAgIENvbXBvbmVudHMoe1xyXG5cdFx0XHRcdHJlc29sdmVyczogW1xyXG5cdFx0XHRcdFx0RWxlbWVudFBsdXNSZXNvbHZlcih7XHJcblx0XHRcdFx0XHRcdGltcG9ydFN0eWxlOiAnc2FzcycsXHJcblx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdGR0czogJ2NvbXBvbmVudHMuZC50cycsIC8vIFx1NzUxRlx1NjIxMHRzXHU1OEYwXHU2NjBFXHU2NTg3XHU0RUY2XHJcblx0XHRcdH0pLFxyXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XHJcbiAgICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvc3ZnJyldLFxyXG4gICAgICAgIHN5bWJvbElkOiBcIltuYW1lXVwiLFxyXG4gICAgICB9KVxyXG4gICAgXSxcclxuICB9XHJcbiAgcmV0dXJuIGNvbmZpZ1xyXG59KVxyXG5cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUyxTQUFTLGVBQWUsV0FBVztBQUN4VSxTQUFTLGNBQWEsZUFBZTtBQUNyQyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQVQ2SCxJQUFNLDJDQUEyQztBQVVsTixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxTQUFPO0FBQ2xDLFFBQU0sTUFBTSxRQUFRLEtBQUssTUFBTSxRQUFRLElBQUksQ0FBQztBQUM1QyxhQUFXLEtBQUssS0FBSztBQUNyQixZQUFRLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztBQUFBLEVBQ3ZCO0FBQ0MsUUFBTSxFQUFDLGVBQWMsZ0JBQWUsY0FBYSxJQUFFLFFBQVE7QUFDM0QsUUFBTSxRQUFNO0FBQUEsSUFDVixLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLEVBQ3REO0FBQ0EsUUFBTSxTQUFPO0FBQUEsSUFDWCxZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDVjtBQUFBLElBQ0Q7QUFBQSxJQUNFLEtBQUk7QUFBQSxNQUNGLHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQTtBQUFBLFVBRUosZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1IsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLE1BQ1Q7QUFBQSxNQUNHLE9BQU87QUFBQSxRQUNMLENBQUMsYUFBYSxHQUFFO0FBQUEsVUFDZCxRQUFRLEdBQUcsY0FBYztBQUFBO0FBQUEsVUFDekIsY0FBYztBQUFBLFVBQ2QsU0FBUyxDQUFDQSxVQUFhO0FBQzNCLGdCQUFJLGVBQWUsU0FBUyxPQUFPLEdBQUc7QUFDckMscUJBQU9BLE1BQUssUUFBUSxJQUFJLE9BQU8sT0FBWSxHQUFHLEVBQUU7QUFBQSxZQUNqRDtBQUNBLG1CQUFPQTtBQUFBLFVBQ1I7QUFBQSxRQUNHO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVE7QUFBQSxNQUNOLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLFdBQVc7QUFBQSxRQUNULFdBQVc7QUFBQSxVQUNULG9CQUFvQjtBQUFBO0FBQUEsWUFFbEIsYUFBYTtBQUFBLFVBQ2YsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNiLFdBQVc7QUFBQSxVQUNWLG9CQUFvQjtBQUFBLFlBQ25CLGFBQWE7QUFBQSxVQUNkLENBQUM7QUFBQSxRQUNGO0FBQUEsUUFDQSxLQUFLO0FBQUE7QUFBQSxNQUNOLENBQUM7QUFBQSxNQUNFLHFCQUFxQjtBQUFBLFFBQ25CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFBQSxRQUN4RCxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1QsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import {prismjsPlugin} from 'vite-plugin-prismjs';
import myStrTsxPlugin from './plugin/vite-plugin-str-tsx'

// https://vite.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
      base:env.VITE_APP_PUBLIC_PATH,
      build:{
        rollupOptions:{
          external:['script']
        }
      },
      plugins: [
        vue(),
        myStrTsxPlugin(),
        prismjsPlugin({
          languages: ['json','html','ts','js','bash'],
        }),
    
      ],
      resolve: {
        alias: {
          // 关键配置：指向含编译器的 Vue 构建版本
          vue: 'vue/dist/vue.esm-bundler.js'
        },
      }
  })
})

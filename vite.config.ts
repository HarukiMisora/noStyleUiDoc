import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import {prismjsPlugin} from 'vite-plugin-prismjs';


// https://vite.dev/config/


export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
      base:env.VITE_APP_PUBLIC_PATH,
      plugins: [
        vue(),
        prismjsPlugin({
          languages: ['json','html','ts','js','bash'],
        }),
    
      ],
  })
})

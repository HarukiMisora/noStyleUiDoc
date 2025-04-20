
import type { Plugin } from 'vite';

export default function myStrTsxPlugin(): Plugin {
  return {
    name: 'vsx',
    enforce: 'pre',

    // 核心钩子：拦截文件内容
    transform(code, id) {
      // 只处理 .tsx 文件
      if (id.endsWith('.vsx')) {
        const codes = code.replace(/\/\/*$/g,'').split(';');
        console.log(codes);

        


        // 返回转换后的代码和 Source Map
        return {
          code: '',
          map: ''
        };
      }
    }
  };
}

import type { Plugin } from 'vite';
import babel from '@babel/core';

interface varsT {
  STRING: {
    [key:string]:string;
  }
  TEMPLATE: {
    [key:string]:string;
  }
}

export default function myStrTsxPlugin(): Plugin {
  return {
    name: 'vsx',
    enforce: 'pre',

    // 核心钩子：拦截文件内容
    transform(code, id) {
      // 只处理 .tsx 文件
      if (id.endsWith('.vsx')) {
        const vars:varsT = {
          STRING:{},
          TEMPLATE:{}
        }
        const codes = code.replace(/\r|\n/g,'').split(';');
        console.log(codes);
        for (let i = 0; i < codes.length; i++) {
          const line = codes[i];
          if(line.startsWith('string ')){
            const keyAndValue = line.split(' ');
            const key = keyAndValue[1]
            const center = keyAndValue[2]
            const value = line.split(center)[1].replace(/'/g, '').replace(/"/g, '');
            vars.STRING[key] = value
            console.log(key, center, value); 
            continue
          }
          if(line.startsWith('template ')){
            const keyAndValue = line.split(' ');
            const key = keyAndValue[1]
            const value = line.replace(/^.*?{/,'').slice(0,-1)
            console.log(key,value);
            const newCode = value.replace(/\{([^:]+):[^}]+\}/g, (match, key) => {
              return vars.STRING[key] ?? match; // 若找不到键，保留原内容
            }); 
            console.log(newCode);
            
            continue
          } 
 
        }
  
        


        // 返回转换后的代码和 Source Map
        return {
          code: '',
          map: ''
        };
      }
    }
  };
}
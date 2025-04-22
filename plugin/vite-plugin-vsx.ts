
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
        function getVars(match:string){
          const keys = match.replace(/{|}/g,'').split(':')
          
          return vars[<keyof varsT>keys[1].toUpperCase()][keys[0]]
        }
        const codes = code.replace(/萨德勒/g,'').split(';');
        console.log(codes);
        let resCode = 'export default {}'; 
        for (let i = 0; i < codes.length; i++) {
          const line = codes[i];
          if(line.trimStart().startsWith('string ')){
            const keyAndValue = line.split(' ');
            const key = keyAndValue[1]
            const center = keyAndValue[2]
            const value = line.split(center)[1].replace(/'/g, '').replace(/"/g, '');
            vars.STRING[key] = value
            console.log(key, center, value); 
            continue
          }
          if(line.trimStart().startsWith('template ')){
            const index = line.indexOf('=');
            const keyAndValue = line.split('=');
            const key = line.slice(0,index).trimStart().replace(/template| /g,'')
            const value = line.slice(index+3,-1);
            console.log(keyAndValue); 
            
            console.log([key],'key----',value,'----value');
            const newCode = value.trimStart().replace(/\{([^:]+):[^}]+\}/g, (match, key) => {
              // console.log(match);
              
              return getVars(match) ?? match; // 若找不到键，保留原内容
            });
            vars.TEMPLATE[key] = newCode;
            console.log('newCode =>',[newCode,key]); 
            continue 
          }  
          if(line.trimStart().startsWith('export ')){
            const keyAndValue = line.replace(/export |{|}|\s/g,'').split(',');
            console.log(keyAndValue);
            resCode = `export default {${keyAndValue.map(key => {
              const value = vars.STRING[key] ?? vars.TEMPLATE[key] ?? key;
              return `${key}:\`${value}\``
            }).join(',')}}`
            console.log(resCode);
            
          }
          
 
        }
  
        


        // 返回转换后的代码和 Source Map
        return {
          code: resCode,
          map: ''
        };
      }
    }
  };
}
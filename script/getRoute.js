
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename).replace('\\script', '');

const docPath = '\\src\\docs'
const briefPath = '\\src\\brief'

let routerFillString = `
import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../home/home.vue'
import Layout from '../docs/layout.vue'
`

// console.log(__dirname);
const labels = {
  'dom':'WDom盒子',
  'props':'props',
  'ui':'组件',
  'eComDom':'命令盒子'
}

let {string:docsString,menus:API} =await listFiles(__dirname + docPath)
let {string:briefString,menus:BRIEF} =await listFiles(__dirname + briefPath,'brief')
docsString+='    ]'
briefString+='    ]'
let routerString = `
const routes = [
  { path: '/home', component: HomeView,name:'home' },
  { path: '/', redirect:'home' },
  { path: '/:path(.*)', redirect:{name:'zcomingSoonDoc'} },
  { 
    path:'/docs/',
    component:Layout,
    redirect:'/docs/div',
    children:${docsString}
  },
  { 
    path:'/brief/',
    component:Layout,
    redirect:'/brief/introduction',
    children:${briefString}
  },
]
`
const routerFile = routerFillString + routerString +`
export default createRouter({
  history: createWebHashHistory(),
  routes,
})
`
const menuData = {
  API,
  BRIEF
  // BRIEF:{
  //   label:'快速上手',
  //   children:BRIEF
  // }
}
// console.log(JSON.stringify(menuData,null,2))
// 写入路由文件
fs.writeFileSync(
  path.resolve(__dirname, 'src\\router', 'index.ts'),
  routerFile
);

//写入菜单文件
fs.writeFileSync(
  path.resolve(__dirname, 'src\\router', 'menu.ts'),
  `export const menuData = ${JSON.stringify(menuData,null,2).replace(/".*":/g,(match)=>{return match.replace(/"/g,'')})}`
)












/**
 * @param {string} dirPath
 * @param {string} type
 * */ 
async function listFiles(dirPath,type='docs') {
  try {
  console.log('读取目录:', {dirPath},typeof dirPath);

    const files = await fs.promises.readdir(dirPath,{withFileTypes: true});
    let string = `[\n`
    const menus = []
    let menuString = ''

    for (const dirent of files) {
        // console.log('文件:', dirent);

      if (dirent.name.endsWith('Doc.vue')) {
        const pamas = getPamas(dirent)
        // console.log(pamas)
        const arr = dirent.name.split('.')
        const filename = arr[arr.length-2]
        const routerPath = filename.replace('Doc','')
        routerFillString += `import ${filename} from '../${type}/${dirent.name}'\n`
        // console.log(arr);

        const labelIndex = menus.findIndex(item=>item.label==pamas.groupName)
        const menuName = pamas.desc||filename
        const menuItem = {
          label:menuName,
          name:filename
        }
        // console.log(labelIndex,menuItem)
        if(['null',null].includes(pamas.groupName)){
          menus.push({label:'',children:[menuItem]})
        }
        else if(labelIndex==-1){
          menus.push({
            label:pamas.groupName,
            children:[
              menuItem
            ]
          })
        }else{
          menus[labelIndex].children.push(menuItem)
        }



        string += `      {
        path:'/docs/${routerPath}',
        component:${filename},
        name:'${filename}',
      },\n`
      } else if (dirent.isDirectory()) {
        console.log('目录:', dirent.name);
      }
    }
    // console.log(JSON.stringify(menus,null,2));
    
    return {string,menus}
  } catch (err) {
    console.error('读取目录失败:', err);
    // console.log('失败目录:', {dirPath});

  }
}


/**
 * @param {fs.Dirent} file
 */
function getPamas(file){
  const filepath = file.parentPath+'\\'+file.name
  // console.log('读取文件:', filepath);
  const content = fs.readFileSync(filepath, 'utf8');
  // console.log(content);

  // 1. 提取第一个 /** ... */ 注释块
  const commentMatch = content.match(/\/\*\*([\s\S]*?)\*\//);
  if (!commentMatch) return {desc: null, groupName: null}

  const commentContent = commentMatch[1];

  // 2. 定义提取键值的正则表达式
  const extractProp = (name) => {
    const regex = new RegExp(`\\*\\s*@${name}\\s+(.*?)(\\s*\\*\/|\\s*\\n)`, 'i');
    const match = commentContent.match(regex);
    return match ? match[1].trim() : undefined;
  };
    console.log({
    desc: extractProp('desc'),
    groupName: extractProp('groupName')
  });

  // 3. 返回结果对象
  return {
    desc: extractProp('desc'),
    groupName: extractProp('groupName')
  };


}



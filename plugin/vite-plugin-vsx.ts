
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
function formatHTML(html, indentSize = 2) {
  let indentLevel = 0
  const output:string[] = []
  const tagRegex = /(<[^>]+>)/g
  const parts = html.split(tagRegex).filter(p => p) // 过滤空片段

  const getIndent = () => ' '.repeat(indentLevel * indentSize)

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    
    // 处理标签
    if (part.startsWith('<')) {
      const trimmedTag = part.trim()
      const isClosing = trimmedTag.startsWith('</')
      const isSelfClosing = trimmedTag.endsWith('/>')

      // 闭标签处理
      if (isClosing) {
        indentLevel = Math.max(indentLevel - 1, 0)
        output.push(getIndent() + trimmedTag)
      } 
      // 开标签处理
      else {
        // 预判是否单行结构：当前标签后紧跟文本和闭标签
        const nextText = parts[i+1]?.trim()
        const nextTag = parts[i+2]?.trim()
        // console.log([nextText,nextTag]);
        
        const isSingleLine = nextText&&nextTag?.startsWith('</')||nextTag === '' && !nextText.includes('\n')

        if (isSingleLine) {
          // 合并单行结构：<tag>text</tag>
          output.push(getIndent() + `${trimmedTag}${nextText}${nextTag}`)
          i += 2 // 跳过已处理的text和闭标签
        } else {
          output.push(getIndent() + trimmedTag)
          if (!isSelfClosing) indentLevel++
        }
      }
    }
    // 处理文本内容（未被单行结构合并的文本）
    else {
      const lines = part.split('\n')
      for (const line of lines) {
        const trimmedLine = line.trim()
        if (trimmedLine) output.push(getIndent() + trimmedLine)
      }
    }
  }

  return output.join('\n')
}

function transformCodePreview(html) {
  return html.replace(
    /<codePreview(\b[^>]*)>([\s\S]*?)<\/codePreview>/g,
    (match, attrs, content) => {
      // 转义内容中的双引号为 HTML 实体
      const escapedCode = content.replace(/"/g, '&quot;').replace(/<CodePreviewTip(\b[^>]*)>([\s\S]*?)<\/CodePreviewTip>/g,'');
      // 构建新标签，保留原有属性并添加 code
      return `<codePreview${attrs} text="${formatHTML(escapedCode.trimStart())}">${content}</codePreview>`;
    }
  ).replace(
    /<CodePreview(\b[^>]*)>([\s\S]*?)<\/CodePreview>/g,
    (match, attrs, content) => {
      // 转义内容中的双引号为 HTML 实体
      const escapedCode = content.replace(/"/g, '&quot;').replace(/<CodePreviewTip(\b[^>]*)>([\s\S]*?)<\/CodePreviewTip>/g,'');
      // 构建新标签，保留原有属性并添加 code
      return `<CodePreview${attrs} text="${formatHTML(escapedCode.trimStart())}">${content}</CodePreview>`;
    }
  )
}


export default function myStrTsxPlugin(): Plugin {
  return {
    name: 'vue',
    enforce: 'pre',

    // 核心钩子：拦截文件内容
    transform(code, id) {
      // 只处理 .tsx 文件
      if (id.endsWith('Doc.vue')) {
        console.log('处理文件：', id);
        const resCode = transformCodePreview(code);
        // console.log(resCode);
        
 
        

        // 返回转换后的代码和 Source Map
        return {
          code:resCode,
          // map: ''
        };
      }
    }
  };
}
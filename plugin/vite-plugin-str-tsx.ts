
import type { Plugin } from 'vite';
import babel from '@babel/core';
const { parse, traverse, types: t, generate } = babel;

export default function myStrTsxPlugin(): Plugin {
  return {
    name: 'str-tsx',
    enforce: 'pre',

    // 核心钩子：拦截文件内容
    transform(code, id) {
      // 只处理 .tsx 文件
      if (id.endsWith('.vsx')) {
        console.log(code);
        const codes = code.split(';')

        // 1. 将源码解析为 AST
        const ast = parse(code, {
          sourceType: 'module',
          // plugins: ['vsx', 'typescript'], // 根据文件类型添加插件
          filename: id, // 提供文件名辅助错误定位
        });

        // 2. 遍历和修改 AST
        traverse(ast, {
          // 示例：将所有 console.log 替换为空语句
          CallExpression(path) {
            if (
              t.isMemberExpression(path.node.callee) &&
              t.isIdentifier(path.node.callee.object, { name: 'console' }) &&
              t.isIdentifier(path.node.callee.property, { name: 'log' })
            ) {
              path.replaceWith(t.emptyStatement()); // 替换为 ;
            }
          },
        });

        // 3. 将 AST 生成新代码
        const result = generate(ast, {
          retainLines: true, // 保持行号（便于调试）
          compact: false,   // 不压缩代码
          sourceMaps: true, // 生成 Source Map（可选）
          sourceFileName: id,
        });

        // 返回转换后的代码和 Source Map
        return {
          code: result.code,
          map: result.map
        };
      }
    }
  };
}
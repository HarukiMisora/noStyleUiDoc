export default function customVSXPlugin() {
  return {
    name: 'custom-vsx',
    // manipulateOptions(opts) {
    //   opts.plugins.push(['jsx', { pragma: 'h' }]); // 强制启用 JSX 解析
    // },
    visitor: {
      JSXElement(path) {
        // 转换自定义语法节点
        if (path.node.openingElement.name.name === 'template') {
          path.replaceWith(
            t.callExpression(t.identifier('createTemplate'), 
            [path.node.children]
          );
        }
      }
    }
  };
}
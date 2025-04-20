


// compiler/grammar/vsx.peggy
{
  const { buildTemplateAST } = require('../ast-builder');
}

// 语法规则
VSX = 

TemplateNode 
  = "<template>" content:TemplateContent "</template>" {
      return buildTemplateAST('template', content);
    }

TemplateContent
  = [^<]+ { return { type: 'text', value: text() }; }
  | Element

Element
  = "<" tag:$[a-zA-Z]+ attrs:Attribute* ">" children:TemplateContent* "</" $tag ">" {
      return { type: 'element', tag, attrs, children };
    }

Attribute
  = name:$[a-zA-Z-]+ "=" value:('"' [^"]* '"' | "'" [^']* "'") {
      return { name, value: value.slice(1, -1) };
    }
// @ts-ignore
import VueMarkdownEditor_ from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';

// @ts-ignore
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// @ts-ignore
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
// @ts-ignore
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
// @ts-ignore
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';

// @ts-ignore
import Prism from 'prismjs';

export const VueMarkdownEditor=VueMarkdownEditor_.use(vuepressTheme, {
  Prism,
}).use(createLineNumbertPlugin()).use(createCopyCodePlugin()).use(createMermaidPlugin());


// @ts-ignore
import VMdPreview_ from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// @ts-ignore
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs

export const VMdPreview=VMdPreview_.use(vuepressTheme, {
  Prism
}).use(createLineNumbertPlugin()).use(createCopyCodePlugin()).use(createMermaidPlugin());




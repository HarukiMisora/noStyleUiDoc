import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import nostyleui from 'nostyleui'
import 'nostyleui/style'  
import router from './router'

import {VMdPreview,VueMarkdownEditor} from '../lib/vMdMarker/vMdMarker.ts';
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  for (const entry of entries) {
    console.log(entry);
  }
  // console.log(entries);
});
observer.observe({ entryTypes: ['longtask'] });

createApp(App).use(nostyleui).use(VMdPreview).use(VueMarkdownEditor).use(router).mount('#app')

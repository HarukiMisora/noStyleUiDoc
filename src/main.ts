import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import nostyleui from 'nostyleui'
import 'nostyleui/style'  
import router from './router'

import {VMdPreview,VueMarkdownEditor} from '../lib/vMdMarker/vMdMarker.ts';


createApp(App).use(nostyleui).use(VMdPreview).use(VueMarkdownEditor).use(router).mount('#app')

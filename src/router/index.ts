




import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../home/home.vue'
import Layout from '../docs/layout.vue'

import DivDoc from '../docs/divDoc.vue'
import ButtonDoc from '../docs/buttonDoc.vue'
import SpanDoc from '../docs/spanDoc.vue'
import GroupDoc from '../docs/groupDoc.vue'
import ComingSoon from '../home/ComingSoon.vue'
import Install from '../intall/install.vue'
import BgDoc from '../docs/bgDoc.vue'
import FlexDoc from '../docs/flexDoc.vue'
import BdDoc from '../docs/bdDoc.vue'
import HoverDoc from '../docs/hoverDoc.vue'
import Introduction from '../brief/introductionDoc.vue'
import GridDoc from '../docs/gridDoc.vue'

const routes = [
  { path: '/home', component: HomeView,name:'home' },
  { path: '/', redirect:'home' },
  { path: '/:path(.*)', redirect:{name:'ComingSoon'} },
  { 
    path:'/docs/',
    component:Layout,
    redirect:'/docs/div',
    children:[
        {
            path:'/docs/div',
            component:DivDoc,
            name:'wDiv',
        },
        {
          path:'/docs/span',
          component:SpanDoc,
          name:'wSpan',
        },
        {
          path:'/docs/button',
          component:ButtonDoc,
          name:'wButton',
        },
        {
          path:'/docs/divBg',
          component:BgDoc,
          name:'divBg',
        },
        {
          path:'/docs/flexDoc',
          component:FlexDoc,
          name:'flexDoc',
        },
        {
          path:'/docs/bdDoc',
          component:BdDoc,
          name:'bdDoc',
        },
        {
          path:'/docs/hoverDoc',
          component:HoverDoc,
          name:'hoverDoc',
        },
        {
          path:'/docs/group',
          component:GroupDoc,
          name:'wGroup',
        },
        {
          path:'/docs/comingSoon',
          component:ComingSoon,
          name:'ComingSoon',
        },
        {
          path:'/docs/install',
          component:Install,
          name:'Install',
        },
        {
          path:'/docs/gridDoc',
          component:GridDoc,
          name:'gridDoc',
        }
    ]
  },
  {
    path:'/brief/',
    component:Layout,
    redirect:'/brief/introduction',
    children:[
      {
        path:'/brief/introduction',
        component:Introduction,
        name:'introduction',
      },
    ]
  }
]


export default createRouter({
  history: createWebHashHistory(),
  routes,
})
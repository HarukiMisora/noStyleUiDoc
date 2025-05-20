
import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../home/home.vue'
import Layout from '../docs/layout.vue'
import divDoc from '../docs/dom.divDoc.vue'
import groupDoc from '../docs/eComDom.groupDoc.vue'
import bdDoc from '../docs/props.bdDoc.vue'
import bgDoc from '../docs/props.bgDoc.vue'
import flexDoc from '../docs/props.flexDoc.vue'
import gridDoc from '../docs/props.gridDoc.vue'
import positionDoc from '../docs/props.positionDoc.vue'
import hoverDoc from '../docs/props0.hoverDoc.vue'
import buttonDoc from '../docs/ui.buttonDoc.vue'
import buildingDoc from '../brief/buildingDoc.vue'
import installDoc from '../brief/installDoc.vue'
import introductionDoc from '../brief/introductionDoc.vue'
import zcomingSoonDoc from '../brief/zcomingSoonDoc.vue'

const routes = [
  { path: '/home', component: HomeView,name:'home' },
  { path: '/', redirect:'home' },
  { path: '/:path(.*)', redirect:{name:'zcomingSoonDoc'} },
  { 
    path:'/docs/',
    component:Layout,
    redirect:'/docs/div',
    children:[
      {
        path:'/docs/div',
        component:divDoc,
        name:'divDoc',
      },
      {
        path:'/docs/group',
        component:groupDoc,
        name:'groupDoc',
      },
      {
        path:'/docs/bd',
        component:bdDoc,
        name:'bdDoc',
      },
      {
        path:'/docs/bg',
        component:bgDoc,
        name:'bgDoc',
      },
      {
        path:'/docs/flex',
        component:flexDoc,
        name:'flexDoc',
      },
      {
        path:'/docs/grid',
        component:gridDoc,
        name:'gridDoc',
      },
      {
        path:'/docs/position',
        component:positionDoc,
        name:'positionDoc',
      },
      {
        path:'/docs/hover',
        component:hoverDoc,
        name:'hoverDoc',
      },
      {
        path:'/docs/button',
        component:buttonDoc,
        name:'buttonDoc',
      },
    ]
  },
  { 
    path:'/brief/',
    component:Layout,
    redirect:'/brief/introduction',
    children:[
      {
        path:'/docs/building',
        component:buildingDoc,
        name:'buildingDoc',
      },
      {
        path:'/docs/install',
        component:installDoc,
        name:'installDoc',
      },
      {
        path:'/docs/introduction',
        component:introductionDoc,
        name:'introductionDoc',
      },
      {
        path:'/docs/zcomingSoon',
        component:zcomingSoonDoc,
        name:'zcomingSoonDoc',
      },
    ]
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})


export const menuData = {
  API:[
    { 
      label:'DOM盒子',
      children:[
        {
          label:'WDom',
          name:'wDiv'
        },
      ]
    },
    { 
      label:'命令盒子',
      children:[
        {
          label:'WGroup',
          name:'wGroup'
        },
        // {
        //   label:'WVar *',
        //   name:'wVar'
        // },
      ]
    },
    {
      label:'props',
      children:[
        {
          label:'bg属性集',
          name:'divBg'
        },
        {
          label:'bd属性集',
          name:'bdDoc'
        },
        {
          label:'flex属性集',
          name:'flexDoc'
        },
        {
          label:'hover属性集',
          name:'hoverDoc'
        },
        {
          label:'grid属性集',
          name:'gridDoc'
        },
  
      ]
    },
  
    {
      label:'组件',
      children:[
        {
          label:'WButton 按钮',
          name:'wButton',
        }
      ]
    },
  ],
  BRIEF:[
    {
      label:'快速上手',
      children:[
        {
          label:'简介',
          name:'introduction'
        },
        {
          label:'安装',
          name:'Install',
        }
      ]
    },
    {
      label:'...',
      children:[
        {
          label:'敬请期待',
          name:'ComingSoon',
        }
      ]
    }
  ]
  
}
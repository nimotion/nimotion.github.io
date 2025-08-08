import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NiMotion Knowledge Hub",
  description: "Comprehensive technical resource hub for motion control engineers, offering in-depth guides on motor selection, controller applications, and industry-specific solutions in automation and robotics.",
  base: '/',
  // logo: '/logo.png',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  // 导航栏
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 顶部导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: 'https://www.nimotion.com/product' },
      { text: 'Knowledge Base', link: 'IntegratedMotors/index.md' },
      { text: 'Case Studies', link: 'https://www.nimotion.com/solution' },
      { text: 'Contact', link: 'https://www.nimotion.com/contact' }

    ],
  // 左侧导航栏
    sidebar: [
      // 1. 电机基础知识
      {
        text: 'Integrated Motors',
        items: [
          { text: 'What is an integrated motor?', link: 'IntegratedMotors/index.md' },
          { text: 'Types of integrated motors', link: 'IntegratedMotorsTypes/index.md' },
          { text: 'The relationship between integrated motor and servo system', link: 'IntegratedMotorRelationship/index.md' },
          { text: 'Advantages and disadvantages of integrated motors', link: 'IntegratedMotorAdvantages/index.md' },
          // { text: 'The difference between stepper motors and servo motors', link: '/api-examples' },
          // { text: '步进电机的功率计算', link: '/api-examples' },
          // { text: '应用设备的工作时间周期', link: '/api-examples' },

        ]
      },
      // {
      //   text: 'Integrated Motors',
      //   items: [
      //     { text: 'What is an integrated motor?', link: 'IntegratedMotors/index.md' },
      //     { text: '一体化电机的优势与缺点', link: '/markdown-examples' },
      //     { text: '一体化电机与伺服系统的关系', link: '/api-examples' },
      //     { text: '步进电机与伺服电机的区别', link: '/api-examples' },
      //     { text: '步进电机的功率计算', link: '/api-examples' },
      //     { text: '应用设备的工作时间周期', link: '/api-examples' },

      //   ]
      // },
      // 2. 电机选型指南
      {
        text: 'Integrated Motor Selection Guide',
        items: [
          { text: 'How to choose an integrated motor?', link: 'IntegratedMotorSelection/index.md' },
          // { text: '一体化电机尺寸如何选型', link: '/api-examples' },
          // { text: '一体化电机功率如何选型', link: '/api-examples' },
          // { text: '一体化电机的速度如何选型', link: '/api-examples' },
          // { text: '一体化电机的torque如何选型', link: '/api-examples' },
          // { text: '一体化电机的功率选型', link: '/api-examples' },
          // { text: '一体化电机的线缆如何选型', link: '/api-examples' },
        ]
      },
      // 3. 推荐型号数据库
      {
        text: 'Recommended models',
        items: [
          { text: 'Recommended integrated motor models for small automation equipment', link: 'IntegratedMotorRecommended/index.md' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      // 4. 运动控制器专题
      { text: 'Motion Controller Special Topic',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    // 顶部导航右侧图标
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  // 重定向路由
  rewrites: {
    'KnowledgeBase/MotorBasics/IntegratedMotors.md': 'IntegratedMotors/index.md',
    'KnowledgeBase/MotorBasics/IntegratedMotorAdvantages.md': 'IntegratedMotorAdvantages/index.md',
    'KnowledgeBase/MotorBasics/IntegratedMotorsTypes.md': 'IntegratedMotorsTypes/index.md',
    'KnowledgeBase/MotorBasics/IntegratedMotorRelationship.md': 'IntegratedMotorRelationship/index.md',

    'KnowledgeBase/MotorSelection/IntegratedMotorSelection.md': 'IntegratedMotorSelection/index.md',

    'KnowledgeBase/RecommendedModels/IntegratedMotorRecommended.md': 'IntegratedMotorRecommended/index.md'
  }
})

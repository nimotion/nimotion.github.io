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
      { text: 'Products', link: '/markdown-examples' },
      { text: 'Knowledge Base', link: '/markdown-examples' },
      { text: 'Case Studies', link: '/markdown-examples' },
      { text: 'Contact', link: '/markdown-examples' }

    ],
  // 左侧导航栏
    sidebar: [
      // 1. 电机基础知识
      {
        text: '一体化电机',
        items: [
          { text: '什么是一体化电机', link: 'knowledge/index.md' },
          { text: '一体化电机的优势与缺点', link: '/markdown-examples' },
          { text: '步进电机与伺服电机的区别', link: '/api-examples' },
          { text: '步进电机的功率计算', link: '/api-examples' },
          { text: '应用设备的工作时间周期', link: '/api-examples' },

        ]
      },
      // 2. 电机选型指南
      {
        text: '电机选型指南',
        items: [
          { text: '一体化电机如何选择', link: '/markdown-examples' },
          { text: '一体化电机尺寸如何选型', link: '/api-examples' },
          { text: '一体化电机功率如何选型', link: '/api-examples' },
          { text: '一体化电机的速度如何选型', link: '/api-examples' },
          { text: '一体化电机的torque如何选型', link: '/api-examples' },
          { text: '一体化电机的功率选型', link: '/api-examples' },
          { text: '一体化电机的线缆如何选型', link: '/api-examples' },
        ]
      },
      // 3. 推荐型号数据库
      {
        text: '推荐型号',
        items: [
          { text: '小型自动化设备的一体化电机型号推荐', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      // 4. 运动控制器专题
      { text: '运动控制器专题',
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
    'KnowledgeBase/MotorBasics/markdown-examples.md': 'knowledge/index.md',
    // 'packages/pkg-b/src/pkg-b-docs.md': 'pkg-b/index.md'
  }
})

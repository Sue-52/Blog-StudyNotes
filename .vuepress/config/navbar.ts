// 顶部导航栏
export const navbar = [
  { text: '首页', icon: 'Home', link: '/' },
  {
    text: '学习分类',
    icon: 'Notebook',
    children: [
      { text: '前端基础', link: '/docs/01.Front-endBasicKnowledge/' },
    ]
  },
  {
    text: '常用工具',
    icon: 'Tool',
    children: [
      { text: '前端基础', link: '/docs/01.Front-endBasicKnowledge/' },
    ]
  },
  {
    text: '资源分享',
    icon: 'Battery4',
    children: [
      { text: '前端基础', link: '/docs/01.Front-endBasicKnowledge/' },
    ]
  },
  {
    text: '部分文档',
    icon: 'Book',
    children: [
      { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
    ]
  },
]
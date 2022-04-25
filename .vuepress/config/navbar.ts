// 顶部导航栏
export const navbar = [
  { text: '首页', icon: 'Home', link: '/' },
  {
    text: '学习分类',
    icon: 'Notebook',
    children: [
      { text: '前端基础', link: '/docs/01.Front-endBasicKnowledge/' },
      { text: '前端框架', link: '/docs/02.Front-endFrameKnowledge/' },
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
      { text: '前端面试题 ①', link: '/blogs/01.Front-End Interview Question/' },
      { text: 'Leetcode', link: '/blogs/02.Leetcode/' },
    ]
  },
]
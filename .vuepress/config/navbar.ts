// 顶部导航栏
export const navbar = [
  { text: '首页', icon: 'Home', link: '/' },
  { text: '学习分类', link: '/categories/reco/1/' },
  { text: '标签分类', link: '/tags/tag1/1/' },
  {
    text: '部分文档',
    children: [
      { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
      { text: 'vuepress-theme-reco', link: '/blogs/other/guide' }
    ]
  },
]